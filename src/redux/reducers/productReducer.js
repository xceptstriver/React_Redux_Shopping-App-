import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  product: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: [...payload],
      };

    case ActionTypes.SELECTED_PRODUCT:
      return {
        product: {
          ...payload,
        },
      };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        product: {},
      };
    default:
      return state;
  }
};
