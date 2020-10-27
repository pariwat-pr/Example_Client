import axios from "axios";
import { GET_ITEM, GET_ITEMS } from "./type";

// รับข้อมูล item ล่าสุด
export const getLatestItem = () => (dispatch) => {
  axios.get("http://localhost:5000/api/item/latest").then((res) => {
    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  });
};
