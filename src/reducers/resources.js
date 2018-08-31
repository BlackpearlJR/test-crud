import {
  INT_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  CLEAR_USERS
} from '../configs/types';

const initialState = {
  users: null,
}

export function addUser(data){
  return {
    type: ADD_USER,
    data
  }
}

export function intUsers(data){
  return {
    type: INT_USER,
    data
  }
}

export function editUser(data){
  return {
    type: EDIT_USER,
    data
  }
}

export function deleteUser(userId){
  return {
    type: DELETE_USER,
    userId
  }
}

export function clearUsers(){
  return {
    type: CLEAR_USERS,
  }
}

const setUsersToLocalStorage = (data) => localStorage.setItem('users', JSON.stringify(data));

const resources = (state = initialState, action) => {
  const users = state.users ? state.users : [];
  switch (action.type) {
    case INT_USER:
      localStorage.setItem('users', JSON.stringify(action.data));
      return {
        ...state,
        users: action.data,
      }

    case ADD_USER:
      const data = action.data;
      const newData = [...users, {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name: data.name ? data.name : '',
        age: data.age ? data.age : '',
        nickname: data.nickname ? data.nickname : '',
      }];
      setUsersToLocalStorage(newData);
      return {
        ...state,
        users: newData,
      }
    
    case EDIT_USER:
      const formData = users.map(user => {
        const returnItem = [];
        if(user.id === action.data.id){
          Object.assign(user, action.data);
        }
        return user;
      });

      setUsersToLocalStorage(formData);
      return {
        ...state,
        users: formData,
      }

    case DELETE_USER:
      const deletedFormData = users.filter(user => user.id !== action.userId);

      setUsersToLocalStorage(deletedFormData);
      return {
        ...state,
        users: deletedFormData,
      }

    default:
      return state;
  }
}

export default resources;