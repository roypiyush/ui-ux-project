
module.exports = {
  Regex: {
    name: /^[A-Z]+[a-z]+$/,
    age: /^\d{1,3}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  Actions: {
    ADD_USER: 'addUser',
    UPDATE_USER: 'updateUser',
    DELETE_USER: 'deleteUser',
    GET_USER: 'getUser',
    GET_USERS: 'getAllUsers'
  },
  Events: {
    USER_CHANGE: 'userChange'
  }
}