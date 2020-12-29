import React from "react";
import Form, { Input } from "../Form";

export default function Login(props) {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-4 border rounded-lg shadow bg-white">
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
            <div>
              <form onSubmit={handleFormSubmit} className="w-64">
                <h1 className="text-center font-bold text-2xl mb-4">Login</h1>
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
                <button
                  type="sumbit"
                  className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 w-full text-white mt-4 rounded-lg focus:outline-none"
                >
                  Login
                </button>
              </form>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
