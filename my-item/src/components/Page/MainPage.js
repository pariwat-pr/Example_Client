import React, { Fragment } from "react";
import { Row, Col, Media, Container, Fade } from "reactstrap";
import logo from "../../images/example_logo.png";
import AddItem from "../addItem";

const MainPage = () => {
  const imgStyle = {
    maxWidth: 200,
    maxHight: 200,
  };
  return (
    <Fragment>
      <Fade in={Fade}>
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
