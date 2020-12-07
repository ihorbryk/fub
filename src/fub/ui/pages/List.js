import React from "react";
import { Link, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { getLayouts } from "../../services/layout";
import { url } from "../../tool/route";
import Layout from "../Layout";

export default function List(props) {
  const layouts = getLayouts();
  const { layoutSlug } = useParams();

  const currentLayout = layouts.find((layout) => layout.slug === layoutSlug);
  const listFieldNames = currentLayout.getListFieldNames();

  const handleDeleteOne = (uniqFieldValue) => {
    if (props.onDeleteOne) {
      props.onDeleteOne(uniqFieldValue);
    }
  };

  return (
    <Layout
      title={`Select ${currentLayout.name} for edit`}
      headerActions={
        <div>
          <Link
            to={url(props.paths.add, [currentLayout.slug])}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add new
          </Link>
        </div>
      }
      breadCrumbs={[
        ["/", <FeatherIcon icon="home" size="16" />],
        ["", currentLayout.name],
      ]}
    >
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              {Object.keys(currentLayout.data[0]).map((key, index) => {
                if (currentLayout.getListFields().includes(key)) {
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
            {currentLayout.data.map((dataItem, rowIndex) => (
              <tr key={rowIndex}>
                {Object.keys(dataItem).map((key, columnIndex) => {
                  if (currentLayout.getListFields().includes(key)) {
                    return (
                      <td
                        key={dataItem[key]}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {columnIndex === 0 ? (
                          <Link
                            to={`/${currentLayout.slug}/${
                              dataItem[currentLayout.primaryKey]
                            }`}
                            className="text-blue-500 hover:text-blue-400"
                          >
                            {dataItem[key]}
                          </Link>
                        ) : (
                          dataItem[key]
                        )}
                      </td>
                    );
                  } else {
                    return null;
                  }
                })}
                <td className="px-6 py-4 text-right text-sm">
                  <div
                    className="inline-block text-red-400 cursor-pointer hover:underline"
                    onClick={() =>
                      handleDeleteOne(dataItem[currentLayout.primaryKey])
                    }
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
