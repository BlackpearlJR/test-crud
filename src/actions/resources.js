import { addUser, intUsers, editUser, deleteUser } from '../reducers/resources';

export const createUser = data => {
  return dispatch => dispatch(addUser(data))
}

export const setEditUser = data => {
  return dispatch => dispatch(editUser(data))
}

export const setDeleteUser = id => {
  return dispatch => dispatch(deleteUser(id))
}

export const checkUsersLocalStorage = () => {
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : null;

  return dispatch => dispatch(intUsers(users))
}