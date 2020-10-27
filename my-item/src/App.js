import React, { useState, useEffect, Fragment } from "react";
import { Container, Fade, Col, Row } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MainPage from "./components/Page/MainPage";

const App = (props) => {
  return (
    <Fragment>
      <MainPage />
      <p></p>
    </Fragment>
  );
};

export default App;
