import React, { useState } from "react";
import { connect } from "react-redux";

import { postSmurf } from "../actions";
import FormContainer from "../components/styled-components/FormContainer";
import FormButton from "../components/styled-components/FormButton";

const SmurfForm = props => {
  const [values, setValues] = useState({
    name: "",
    age: 0,
    height: ""
  });

  const handleChanges = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postSmurf(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChanges}
              value={values.name}
            />
          </label>
          <label>
            {" "}
            Age:
            <input
              type="number"
              name="age"
              onChange={handleChanges}
              value={values.age}
            />
          </label>
          <label>
            {" "}
            Height:
            <input
              type="text"
              name="height"
              onChange={handleChanges}
              value={values.height}
            />
          </label>
          <FormButton type="submit">Add Smurf</FormButton>
        </FormContainer>
      </form>
    </>
  );
};

export default connect(
  null,
  { postSmurf }
)(SmurfForm);
