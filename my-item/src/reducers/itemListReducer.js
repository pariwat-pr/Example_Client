import { GET_ITEMS } from "../actions/type";

const initialState = {
  itemlist: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        itemlist: action.payload,
      };
    default:
      return state;
  }
}
