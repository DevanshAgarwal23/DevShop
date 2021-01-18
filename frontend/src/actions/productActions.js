import {
  PRODUCT_DETAILs_FAIL,
  PRODUCT_DETAILs_REQUEST,
  PRODUCT_DETAILs_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstats";
import axios from "axios";

export const listProducts = () => async (dispach) => {
  try {
    dispach({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispach({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispach({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispach) => {
  try {
    dispach({ type: PRODUCT_DETAILs_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispach({
      type: PRODUCT_DETAILs_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispach({
      type: PRODUCT_DETAILs_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
