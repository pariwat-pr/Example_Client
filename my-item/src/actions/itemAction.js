import axios from "axios";
import { GET_LATEST_ITEM, ADD_ITEM } from "./type";

// รับข้อมูล item ล่าสุด
export const getLatestItem = () => (dispatch) => {
  axios.get("http://localhost:5000/api/item/latest").then((res) => {
    dispatch({
      type: GET_LATEST_ITEM,
      payload: res.data,
    });
  });
};

// เพิ่ม item ล่าสุด
export const addNewItem = ({ ID, Name, Price }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    ID,
    Name,
    Price,
  });
  axios
    .post("http://localhost:5000/api/item/add", body, config)
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        playload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
