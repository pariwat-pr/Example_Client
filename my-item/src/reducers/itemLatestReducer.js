import { GET_LATEST_ITEM } from "../actions/type";

const initialState = {
  id: null,
  name: null,
  price: null,
};

export default function getlastItem(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_ITEM:
      const itemID = action.payload;
      return itemID
        ? {
            id: action.payload.no_id,
            name: action.payload.item_name,
            price: action.payload.item_price,
          }
        : {
            id: null,
            name: null,
            price: null,
          };
    default:
      return state;
  }
}
