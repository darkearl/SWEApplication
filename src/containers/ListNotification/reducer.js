import {createReducer} from '../../utils/reducer';
import * as ActionTypes from '../../constants/ActionTypes';

const initialState = {
  isFetching: false,
  receivedAt: null,
  data:[]
};

export default createReducer(initialState, {
  [ActionTypes.START_FETCHING_ALL_NOTIFICATIONS]: (state) => {
    return Object.assign({}, state, {
      isFetching: true
    });
  },
  [ActionTypes.RECEIVED_NOTIFICATIONS]: (state) => {
    return Object.assign({}, state, {
      isFetching: false
    });
  },
  [ActionTypes.ADD_NOTIFICATIONS]: (state, payload) => {
    return Object.assign({}, state, {
      data: payload
    });
  },
})