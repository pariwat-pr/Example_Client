import React, { useState, useEffect, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Label,
  Container,
  Input,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { getLatestItem, addNewItem } from "../actions/itemAction";

const AddItem = (props) => {
  const [LatestItem, setLatestItem] = useState(true);
  const [LatestID, setLatestID] = useState(0);
  const [NameItem, setNameItem] = useState("");
  const [PriceItem, setPriceItem] = useState("");
  const itemLatestID = useSelector((state) => state.itemLatest.id);

  AddItem.propTypes = {
    getLatestItem: PropTypes.func.isRequired,
    addNewItem: PropTypes.func.isRequired,
  };
  const { getLatestItem, addNewItem } = props;

  useEffect(() => {
    const getLatestID = async () => {
      if (LatestItem) {
        await getLatestItem();
        await setLatestItem(false);
        if (await itemLatestID) {
          await setLatestID(itemLatestID);
        }
      }
    };
    getLatestID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "itemName") {
      setNameItem(value);
    } else if (name === "itemPrice") {
      setPriceItem(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newItem = await {
      ID: LatestID + 1,
      Name: NameItem,
      Price: PriceItem,
    };
    await addNewItem(newItem);
  };

  return (
    <Fragment>
      <Container>
        <Card>
          <CardHeader>เพิ่มสินค้า</CardHeader>
          <CardBody>
            <Row>
              <Col>
                <Form onSubmit={onSubmit}>
                  <FormGroup row>
                    <Label for="itemName" sm={2}>
                      Name:
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="itemName"
                        id="itemName"
                        onChange={onChange}
                        placeholder="โปรดใส่ชื่อสินค้า"
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="itemPrice" sm={2}>
                      Price:
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="number"
                        name="itemPrice"
                        id="itemPrice"
                        onChange={onChange}
                        placeholder="โปรดใส่ราคาสินค้า"
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={{ size: 8, offset: 3 }}>
                      <Col>
                        <Button block>คลิกเพื่อเพิ่มสินค้า</Button>
                      </Col>
                      <Col sm={1} />
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default connect(null, { getLatestItem, addNewItem })(AddItem);
