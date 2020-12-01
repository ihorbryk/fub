import React from "react";
import Layout from "../Layout";
import { getModels } from "../../services/model";
import { Link, useParams } from "react-router-dom";

export default function List() {
  const models = getModels();
  const { modelSlug } = useParams();

  const currentEntity = models.find((model) => model.slug === modelSlug);
  const listFieldNames = currentEntity.getListFieldNames();

  return (
    <Layout title={`Select ${currentEntity.name} for edit`}>
      <div>
        <table className="table-auto border border-collapse w-full">
          <thead>
            <tr>
              {Object.keys(currentEntity.data[0]).map((key, index) => {
                if (currentEntity.getListFields().includes(key)) {
                  return (
                    <th key={key} className="border p-2">
                      {listFieldNames[key]}
                    </th>
                  );
                } else return null;
              })}
            </tr>
          </thead>
          <tbody>
            {currentEntity.data.map((dataItem, rowIndex) => (
              <tr key={rowIndex}>
                {Object.keys(dataItem).map((key, columnIndex) => {
                  if (currentEntity.getListFields().includes(key)) {
                    return (
                      <td key={dataItem[key]} className="border p-2">
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
