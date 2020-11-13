import {
  GET_CUSTOMER_INFO_START,
  GET_CUSTOMER_INFO_SUCCESS,
  GET_CUSTOMER_INFO_FAILURE,
  REGISTER_CUSTOMER_INFO_START,
  REGISTER_CUSTOMER_INFO_SUCCESS,
  REGISTER_CUSTOMER_INFO_FAILURE,
} from '../../../api/types';

const initialState = {
  customer: {},
  isFetching: false,
  error: '',
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_INFO_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CUSTOMER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customer: action.payload,
      };
    case GET_CUSTOMER_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case REGISTER_CUSTOMER_INFO_START:
      return {
        ...state,
        isFetching: true,
      };
    case REGISTER_CUSTOMER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customer: action.payload,
      };
    case REGISTER_CUSTOMER_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
