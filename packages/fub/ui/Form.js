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

  return props.children({
    values,
    handleFieldChange,
    handleFormSubmit,
  });
}

export function Input(props) {
  return (
    <input
      {...props}
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
  let checked = null;

  if (typeof props.value === "string") {
    checked = props.value === "true" ? true : false;
  } else {
    checked = props.value;
  }

  return (
    <input
      {...props}
      onChange={(e) => {
        e.target.value = !checked;
        props.onChange(e);
      }}
      checked={checked}
      type="checkbox"
      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    />
  );
}

export function RadioList(props) {
  let checked = null;

  if (typeof props.value === "string") {
    checked = props.value;

    if (props.value === "true") {
      checked = true;
    }

    if (props.value === "false") {
      checked = false;
    }
  } else {
    checked = props.value;
  }

  return props.choices.map((choice, index) => {
    return (
      <div key={choice[0]} className="flex items-center">
        <input
          {...props}
          onChange={(e) => {
            props.onChange(e);
          }}
          checked={checked === choice[0] ? true : false}
          type="radio"
          value={choice[0]}
          id={`${props.id}-${index}`}
          className="block focus:ring-indigo-500 h-4 w-4 text-indigo-600 border border-gray-300"
        />
        <label
          htmlFor={`${props.id}-${index}`}
          className="inline-block ml-3 text-sm text-gray-700"
        >
          {choice[1]}
        </label>
      </div>
    );
  });
}

export function SelectList(props) {
  let selected = null;

  if (typeof props.value === "string") {
    selected = props.value;

    if (props.value === "true") {
      selected = true;
    }

    if (props.value === "false") {
      selected = false;
    }
  } else {
    selected = props.value;
  }

  return (
    <select
      {...props}
      onChange={(e) => {
        props.onChange(e);
      }}
      className="p-2 pr-3 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
    >
      {props.choices.map((choice, index) => {
        return (
          <option
            key={choice[0]}
            checked={selected === choice[0] ? true : false}
            value={choice[0]}
          >
            {choice[1]}
          </option>
        );
      })}
    </select>
  );
}
