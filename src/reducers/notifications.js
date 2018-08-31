import {
  SET_LOADING,
  CLEAR_LOADING,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
  CLEAR_ERROR_MESSAGE,
  CLEAR_SUCCESS_MESSAGE,
} from '../configs/types';


const initialState = {
  loading: true,
  error: null,
  clearFilter: null,
}

export function setLoading() {
  return {
    type: SET_LOADING
  }
}

export function clearLoading() {
  return {
    type: CLEAR_LOADING
  }
}

export function setError(message) {
  return {
    type: SET_ERROR_MESSAGE,
    message,
  }
}

export function clearError() {
  return {
    type: CLEAR_ERROR_MESSAGE,
  }
}

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      }

    case SET_ERROR_MESSAGE:
      let message = null;
      switch(action.message){
        case 'Unauthorized Credential':
          message = 'ชื่อหรือรหัสผ่าน ไม่ถูกต้อง';
          break;
        default:
          message = action.message;
      }
      return {
        ...state,
        error: message,
      }
    
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        error: null,
      }

    default:
      return state;
  }
}

export default notifications;