import React, { useEffect } from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf";
import { getSmurfs } from "../actions";
import SmurfForm from "./SmurfForm";
import SmurfContainer from "./styled-components/SmurfContainer";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <>
      <h4>Smurf List</h4>
      <SmurfForm />
      {props.smurfs.map(smurf => (
        <SmurfContainer>
          <Smurf key={smurf.name} smurf={smurf} />
        </SmurfContainer>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
