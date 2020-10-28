import React, { Fragment, useState } from "react";
import { Row, Media, Container, Fade } from "reactstrap";
import logo from "../../images/example_logo.png";
import AddItem from "../addItem";

const MainPage = () => {
  const [fadeIn] = useState(true);
  //   const toggle = () => setFadeIn(!fadeIn);
  const imgStyle = {
    maxWidth: 200,
    maxHight: 200,
  };
  return (
    <Fragment>
      <Fade in={fadeIn}>
        <p style={{ whiteSpace: "pre-wrap" }}>{"\n"}</p>
        <Container>
          <Row>
            <Media
              object
              src={logo}
              style={imgStyle}
              alt={logo}
              className="mx-auto"
            ></Media>
          </Row>
        </Container>
        <p style={{ whiteSpace: "pre-wrap" }}>{"\n"}</p>
        <AddItem />
      </Fade>
    </Fragment>
  );
};

export default MainPage;
