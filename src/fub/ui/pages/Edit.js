import React from "react";
import Layout from "../Layout";
import { Field, getModels } from "../../model";
import { useParams } from "react-router-dom";
import Form from "../Form";

export default function Edit() {
  const { modelSlug, id } = useParams();

  const currentModel = getModels().find((entity) => entity.slug === modelSlug);

  const currentData = currentModel.data.find(
    (item) => item[currentModel.primaryKey] == id
  );

  if (!currentData) {
    return null;
  }

  const fields = Object.keys(currentModel).reduce((acc, key) => {
    if (currentModel[key].__proto__ instanceof Field) {
      acc[key] = currentModel[key];
    }
    return acc;
  }, {});

  return (
    <Layout title={`Editing ${currentModel.name}`}>
      <div className="">
        <Form
          initValues={Object.keys(fields).reduce((acc, key) => {
            acc[key] = currentData[key];
            return acc;
          }, {})}
          onSubmit={(values) => {
            console.log("-->", values);
            // TODO: call service method for update entity
          }}
        >
          {({ values, handleFieldChange, handleFormSubmit }) => (
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <form onSubmit={handleFormSubmit} className="p-3">
                {Object.keys(fields).map((key) => (
                  <div key={key} className="flex items-center py-3 border-b">
                    <div className="w-48">
                      <label
                        htmlFor={key}
                        className="block text-sm text-gray-700"
                      >
                        {fields[key].label}
                      </label>
                    </div>
                    <div className="w-full">
                      {fields[key].render({
                        id: key,
                        name: key,
                        value: values[key],
                        choices: fields[key].choices,
                        onChange: (e) =>
                          handleFieldChange(e.target.name, e.target.value),
                      })}
                    </div>
                  </div>
                ))}
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          )}
        </Form>
      </div>
    </Layout>
  );
}
