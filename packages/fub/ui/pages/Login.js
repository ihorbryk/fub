import React from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../../contexts/app";
import Form, { Input } from "../Form";

export default function Login(props) {
  const appContext = React.useContext(AppContext);

  if (appContext.user.isLogged()) {
    return <Redirect to={props.loginRedirectPath} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-center font-bold text-4xl mb-8">
          {props.pageTitle}
        </h1>
        <Form
          initValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            props.onLogin(values);
          }}
        >
          {({ values, handleFieldChange, handleFormSubmit }) => (
            <div className="p-8 border rounded-lg shadow bg-white">
              <form onSubmit={handleFormSubmit} className="min-w-64">
                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={(e) =>
                      handleFieldChange(e.target.name, e.target.value)
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password">Password</label>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={(e) =>
                      handleFieldChange(e.target.name, e.target.value)
                    }
                    required
                  />
                </div>
                <button
                  type="sumbit"
                  className="text-sm px-3 py-3 bg-indigo-500 hover:bg-indigo-600 w-full text-white mt-4 rounded-lg focus:outline-none"
                >
                  Sing in
                </button>
              </form>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
