import React from "react";
import Layout from "../Layout";
import { getEntities } from "../../services/entity";
import { useParams } from "react-router-dom";
import { PageHeader } from "../elements";
import Form from "../Form";

export default function Edit() {
  const { entitySlug, id } = useParams();
  const currentEntity = getEntities().find(
    (entity) => entity.slug === entitySlug
  );
  const currentData = currentEntity.data.find(
    (item) => item[currentEntity.primaryKey] == id
  );

  if (!currentData) {
    return null;
  }

  return (
    <Layout>
      <PageHeader
        title={`Editing ${currentEntity.name} #${
          currentData[currentEntity.primaryKey]
        }`}
      />
      <div className="">
        <Form
          initValues={Object.keys(currentData).reduce((acc, key) => {
            acc[key] = currentData[key];
            return acc;
          }, {})}
          onSubmit={(values) => {
            console.log("-->", values);
            // TODO: call service method for update entity
          }}
        >
          {({ values, handleFieldUpdate, handleFormSubmit }) => (
            <form onSubmit={handleFormSubmit}>
              {Object.keys(currentData).map((key) => (
                <div key={key} className="mb-3">
                  <label
                    htmlFor=""
                    className="block text-sm font-medium text-gray-700"
                  >
                    {key}
                  </label>
                  <input
                    name={key}
                    type="text"
                    value={values[key]}
                    className="p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) =>
                      handleFieldUpdate(e.target.name, e.target.value)
                    }
                  />
                </div>
              ))}
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </Layout>
  );
}
