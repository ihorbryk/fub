import React from "react";
import Layout from "../Layout";
import { getModels } from "../../model";
import { Link, useParams } from "react-router-dom";

export default function List() {
  const models = getModels();
  const { modelSlug } = useParams();

  const currentEntity = models.find((model) => model.slug === modelSlug);
  const listFieldNames = currentEntity.getListFieldNames();

  return (
    <Layout title={`Select ${currentEntity.name} for edit`}>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              {Object.keys(currentEntity.data[0]).map((key, index) => {
                if (currentEntity.getListFields().includes(key)) {
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentEntity.data.map((dataItem, rowIndex) => (
              <tr key={rowIndex}>
                {Object.keys(dataItem).map((key, columnIndex) => {
                  if (currentEntity.getListFields().includes(key)) {
                    return (
                      <td
                        key={dataItem[key]}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {columnIndex === 0 ? (
                          <Link
                            to={`/${currentEntity.slug}/${
                              dataItem[currentEntity.primaryKey]
                            }`}
                            className="text-blue-500"
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
