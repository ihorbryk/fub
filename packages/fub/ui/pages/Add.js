import React from "react";
import { Link, useParams } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { ModelField } from "../../classes/ModelField";
import { getLayouts } from "../../services/layout";
import Layout from "../Layout";
import Form from "../Form";
import { url } from "../../tool/route";

export default function Add(props) {
  const { layoutSlug } = useParams();

  const currentLayout = getLayouts().find(
    (layout) => layout.slug === layoutSlug
  );

  const fields = Object.keys(currentLayout.model).reduce((acc, key) => {
    if (currentLayout.model[key].__proto__ instanceof ModelField) {
      acc[key] = currentLayout.model[key];
    }
    return acc;
  }, {});

  return (
    <Layout
      title={`Add new ${currentLayout.name}`}
      breadCrumbs={[
        ["/", <FeatherIcon icon="home" size="14" />],
        [url(props.paths.list, [currentLayout.slug]), currentLayout.name],
        ["", "Add new"],
      ]}
    >
      <div className="">
        <Form
          initValues={Object.keys(fields).reduce((acc, key) => {
            acc[key] = "";
            return acc;
          }, {})}
          onSubmit={(values) => {
            console.log("-->", values);
            // TODO: call service method for update entity
          }}
        >
          {({ values, handleFieldChange, handleFormSubmit }) => (
            <React.Fragment>
              <form onSubmit={handleFormSubmit}>
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white divide-y">
                  {Object.keys(fields).map((key) => (
                    <div key={key} className="flex items-center py-3 px-3">
                      <div className="w-64">
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
                </div>
              </form>
              <div className="py-4 text-right bg-gray-100 rounded-b-lg">
                <Link
                  to={url(props.paths.list, [currentLayout.slug])}
                  className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </React.Fragment>
          )}
        </Form>
      </div>
    </Layout>
  );
}
