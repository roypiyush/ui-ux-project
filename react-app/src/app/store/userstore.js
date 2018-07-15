import {EventEmitter} from 'events';
import axios from 'axios';
import Constants from '../constants';

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
        console.log("Users Count " + this.users.length);
        this.emit(Constants.Events.USER_CHANGE);
			}).catch(error => console.log(error));
  }
  
  getAll() {
    return this.users;
  }

  add(user) {
    this.users.push(user);
    console.log('Users Count ' + this.users.length);
    this.emit(Constants.Events.USER_CHANGE);
  }
}
const userStore = new UserStore;
export default userStore;