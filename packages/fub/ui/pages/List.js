import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { getLayouts } from "../../services/layout";
import { url } from "../../tool/route";
import Layout from "../Layout";
import NoDataForDisplay from "../NoDataForDisplay";
import LoadingPleceholder from "../LoadingPleceholder";
import Confirm from "../../ui/Confirm";
import { useFetchData } from "../../tool/hooks";

export default function List(props) {
  const { layoutSlug } = useParams();
  const layouts = getLayouts();
  const currentLayout = layouts.find((layout) => layout.slug === layoutSlug);

  if (!currentLayout) {
    return <Redirect to="/404" />;
  }

  const [checkedItems, setCheckedItems] = React.useState([]);
  const [selectedAction, setSelectedAction] = React.useState("");

  const handleCheckItem = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(
        checkedItems.filter((checkedItem) => checkedItem != item)
      );
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  const handleCheckAllItems = () => {
    if (checkedItems.length > 0) {
      setCheckedItems([]);
    } else {
      setCheckedItems(data);
    }
  };

  const handleSelectAction = (e) => {
    setSelectedAction(e.target.value);
  };

  const handleRunAction = () => {
    if (selectedAction) {
      const actionForRun = currentLayout.defaultListActions
        .concat(currentLayout.listActions)
        .find((action) => action.name == selectedAction);
      actionForRun.run(checkedItems);
    }
  };

  const { data, loading, error } = useFetchData(currentLayout.listFetch);

  if (loading) {
    return (
      <Wrapper currentLayout={currentLayout} paths={props.paths}>
        <LoadingPleceholder />
      </Wrapper>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <Wrapper currentLayout={currentLayout} paths={props.paths}>
        <NoDataForDisplay />
      </Wrapper>
    );
  }

  const listFieldNames = currentLayout.getListFieldNames(data);

  return (
    <Wrapper currentLayout={currentLayout} paths={props.paths}>
      <React.Fragment>
        <div className="py-3 mb-2 text-sm flex items-center text-gray-500">
          Action:{" "}
          <select
            className="ml-2 px-2 py-1 pr-3 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block sm:text-sm border-gray-300 rounded-md"
            onChange={(e) => handleSelectAction(e)}
            value={selectedAction}
          >
            <option value="">---</option>
            {currentLayout.defaultListActions.map((action) => (
              <option key={action.name} value={action.name}>
                {action.title}
              </option>
            ))}
            {currentLayout.listActions.map((action) => (
              <option key={action.name} value={action.name}>
                {action.title}
              </option>
            ))}
          </select>{" "}
          <button
            className="ml-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none"
            onClick={() => handleRunAction()}
          >
            Apply
          </button>{" "}
          <span className="ml-2">
            Selected {checkedItems.length} objects from {data.length}
          </span>
        </div>
        <div className="shadow overflow-x-auto border-gray-200 sm:rounded-lg">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="bg-gray-50 w-4 pl-4 py-3">
                  <input
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    onChange={() => handleCheckAllItems()}
                    checked={checkedItems.length == data.length}
                  />
                </th>
                {Object.keys(data[0]).map((key, index) => {
                  if (currentLayout.getListFields(data).includes(key)) {
                    return (
                      <th
                        key={key}
                        className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {listFieldNames[key]}
                      </th>
                    );
                  } else return null;
                })}
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((dataItem, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    checkedItems.includes(dataItem) ? "bg-yellow-100" : ""
                  }
                >
                  <td className="w-4 pl-4 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      onChange={() => handleCheckItem(dataItem)}
                      checked={checkedItems.includes(dataItem)}
                    />
                  </td>
                  {Object.keys(dataItem).map((dataKey, columnIndex) => {
                    if (currentLayout.getListFields(data).includes(dataKey)) {
                      return (
                        <td
                          key={dataItem[dataKey]}
                          className="px-6 py-4 whitespace-nowrap truncate"
                        >
                          <DataItemWrapper
                            currentLayout={currentLayout}
                            dataItem={dataItem}
                            dataKey={dataKey}
                            columnIndex={columnIndex}
                          />
                        </td>
                      );
                    } else {
                      return null;
                    }
                  })}
                  <td className="px-6 py-4 text-right text-sm">
                    <Confirm
                      style="danger"
                      onOk={() => {
                        currentLayout.handleDeleteOne(
                          dataItem[currentLayout.primaryKey]
                        );
                      }}
                      icon="trash-2"
                    >
                      <button className="inline-block text-red-400 cursor-pointer hover:underline focus:outline-none">
                        Delete
                      </button>
                    </Confirm>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {currentLayout.displayPagination && (
          <div className="py-4 text-right flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              {currentLayout.getPaginationText()}
            </div>
            <nav
              className="relative z-0 inline-flex shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <div
                onClick={() => currentLayout.handleClickPaginationPrev()}
                className="cursor-pointer relative inline-flex items-center px-1 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <FeatherIcon icon="chevron-left" />
              </div>
              <div
                onClick={() => currentLayout.handleClickPaginationNext()}
                className="cursor-pointer relative inline-flex items-center px-1 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <FeatherIcon icon="chevron-right" />
              </div>
            </nav>
          </div>
        )}
      </React.Fragment>
    </Wrapper>
  );
}

function Wrapper(props) {
  return (
    <Layout
      title={`Select ${props.currentLayout.name} for edit`}
      headerActions={
        <div>
          <Link
            to={url(props.paths.add, [props.currentLayout.slug])}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add new
          </Link>
        </div>
      }
      breadCrumbs={[
        ["/", <FeatherIcon icon="home" size="14" />],
        ["", props.currentLayout.name],
      ]}
    >
      {props.children}
    </Layout>
  );
}

function DataItemWrapper(props) {
  if (
    props.currentLayout.listLinkField &&
    props.currentLayout.listLinkField === props.dataKey
  ) {
    return (
      <LinkDataItemDecorator
        currentLayout={props.currentLayout}
        dataItem={props.dataItem}
      >
        {props.currentLayout.listFieldCustomLayout[props.dataKey] ? (
          props.currentLayout.listFieldCustomLayout[props.dataKey](
            props.dataItem[props.dataKey]
          )
        ) : (
          <DataItem value={props.dataItem[props.dataKey]} />
        )}
      </LinkDataItemDecorator>
    );
  } else if (!props.currentLayout.listLinkField && props.columnIndex === 0) {
    return (
      <LinkDataItemDecorator
        currentLayout={props.currentLayout}
        dataItem={props.dataItem}
      >
        {props.currentLayout.listFieldCustomLayout[props.dataKey] ? (
          props.currentLayout.listFieldCustomLayout[props.dataKey](
            props.dataItem[props.dataKey]
          )
        ) : (
          <DataItem value={props.dataItem[props.dataKey]} />
        )}
      </LinkDataItemDecorator>
    );
  }

  return props.currentLayout.listFieldCustomLayout[props.dataKey] ? (
    props.currentLayout.listFieldCustomLayout[props.dataKey](
      props.dataItem[props.dataKey]
    )
  ) : (
    <DataItem value={props.dataItem[props.dataKey]} />
  );
}

function LinkDataItemDecorator(props) {
  return (
    <Link
      to={`/${props.currentLayout.slug}/${
        props.dataItem[props.currentLayout.primaryKey]
      }`}
      className="text-blue-500 hover:text-blue-400"
    >
      {props.children}
    </Link>
  );
}

function DataItem(props) {
  if (typeof props.value === "boolean" && props.value) {
    return (
      <div className="text-green-500">
        <FeatherIcon icon="check-square" size={20} />
      </div>
    );
  }

  if (typeof props.value === "boolean" && !props.value) {
    return (
      <div className="text-red-500">
        <FeatherIcon icon="x-square" size={20} />
      </div>
    );
  }

  return props.value;
}
