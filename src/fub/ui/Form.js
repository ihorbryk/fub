import React from "react";

export default function Form(props) {
  const [values, setValues] = React.useState(props.initValues);

  // TODO: rename to handleFieldChange
  const handleFieldUpdate = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(values);
  };

  return <>{props.children({ values, handleFieldUpdate, handleFormSubmit })}</>;
}
