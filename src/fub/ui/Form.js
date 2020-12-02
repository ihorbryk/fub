import React from "react";

export default function Form(props) {
  const [values, setValues] = React.useState(props.initValues);

  const handleFieldChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(values);
  };

  return (
    <>
      {props.children({
        values,
        handleFieldChange,
        handleFormSubmit,
      })}
    </>
  );
}

export function Input(props) {
  return (
    <input
      {...props}
      type="text"
      className="p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
    />
  );
}

export function TextArea(props) {
  return (
    <textarea
      {...props}
      className="p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
    />
  );
}

export function Checkbox(props) {
  return (
    <input
      {...props}
      onChange={() =>
        props.onChange({
          target: { name: props.name, value: !props.value },
        })
      }
      checked={props.value}
      type="checkbox"
      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    />
  );
}
