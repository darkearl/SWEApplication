import {createReducer} from '../utils/reducer';
import * as ActionTypes from '../actions/types';

const metaState = {
  isLogging:false,
  isAuthenticated :false,
  isRegistering:false
};
const initialState = {
  meta: metaState
};

export default createReducer(initialState, {
  [ActionTypes.LOGIN_REQUEST]: (state) => {
    return Object.assign({}, state, {
      meta: {
        ...metaState,
        isLogging:true
      }
    });
  },
  [ActionTypes.LOGIN_FAILURE]: (state) => {
    return Object.assign({}, state, {
      meta: {
        ...metaState,
        isLogging:false
      }
    });
  },
  [ActionTypes.USER_AUTHORIZED]: (state) => {
    return Object.assign({}, state, {
      meta: {
        ...metaState,
        isLogging: false,
        isAuthenticated: true,
      }
    });
  },
  [ActionTypes.USER_NO_EXIST]: (state) => {
    return Object.assign({}, state, {
      ...initialState
    });
  },
  [ActionTypes.SET_PROFILE_USER]: (state,payload) => {
    return Object.assign({}, state, {
      ...payload
    });
  }
})