import React from "react";
import Layout from "../Layout";
import { getEntities } from "../../services/entity";
import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../elements";

export default function List() {
  const entiyies = getEntities();
  const { entitySlug } = useParams();

  const currentEntity = entiyies.find((entity) => entity.slug === entitySlug);
  const listFieldNames = currentEntity.getListFieldNames();

  return (
    <Layout>
      <PageHeader title={currentEntity.name} />
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
