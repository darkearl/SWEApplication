import {createReducer} from '../../utils/reducer';
import * as ActionTypes from '../../constants/ActionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated :false,
};

export default createReducer(initialState, {
  [ActionTypes.LOGIN_REQUEST]: (state) => {
    return Object.assign({}, state, {
      isFetching: true
    });
  },
  [ActionTypes.LOGIN_FAILURE]: (state) => {
    return Object.assign({}, state, {
      isFetching: false
    });
  },
  [ActionTypes.USER_AUTHORIZED]: (state) => {
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated :true
    });
  },
  [ActionTypes.USER_NO_EXIST]: (state) => {
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated :false
    });
  },
  [ActionTypes.SET_PROFILE_USER]: (state,payload) => {
    return Object.assign({}, state, {
      ...payload
    });
  }
})