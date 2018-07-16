import {EventEmitter} from 'events';
import axios from 'axios';
import Constants from '../constants';
import Dispatcher from '../dispacher/defauldispatcher';

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.users = []
    // Below call will happen asynchronously. Hence, binding is done using events.
    axios.get("http://localhost:8000/users")
			.then(response => {
				this.users = response.data.map(c => {
					return {
						id: c.id,
						fname: c.fname,
						lname: c.lname,
						email: c.email,
						age: c.age
					}
				});
        this.emit(Constants.Events.USER_CHANGE);
			}).catch(error => console.log(error));
  }
  
  getAll() {
    return this.users;
  }

  add(user) {
    axios.put('http://localhost:8000/user', {user: user})
    .then(response => {
      this.users = response.data.users;
      this.emit(Constants.Events.USER_CHANGE);
    });
  }

  handleActions(params) {
    var action = params.action;
    var object = params.object;
    switch(action) {
      case Constants.Actions.ADD_USER:
        userStore.add(object);
      break;
      case Constants.Actions.GET_USER:
      break;
      case Constants.Actions.UPDATE_USER:
      break;
      case Constants.Actions.DELETE_USER:
      break;
      default:
        console.log(action + ' Action not supported ');
        break;
    }
  }
}
const userStore = new UserStore;
Dispatcher.register(userStore.handleActions.bind(this));
export default userStore;