import React from 'react';
import UserStore from '../store/userstore';
import Constants from '../constants';
import Dispatcher from '../dispacher/defauldispatcher';

export default class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
		this.registerUserStoreChangeEvent();
	}

	componentWillMount() {
		Dispatcher.dispatch({action: Constants.Actions.GET_USERS});
	}

	registerUserStoreChangeEvent() {
		UserStore.on(Constants.Events.USER_CHANGE, () => {
			this.setState({
				users: UserStore.getAll()
			});
		});
	}

	handleDeleteClick(id) {
		Dispatcher.dispatch({action: Constants.Actions.DELETE_USER, object: id});
	}

	handleUpdateClick(id, user) {
		Dispatcher.dispatch({action: Constants.Actions.UPDATE_USER, object: id, user: user});
	}

	render() {
		return (
			<div>
				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							{
								this.props.headers.map((h) => <th className='text-center'>{h}</th>)
							}
						</tr>
					</thead>
					<tbody>
						{
							this.state.users.map((r, id) =>
								<tr>
									<td className='text-center'>{id + 1}</td>
									<td className='text-center'>{r.fname}</td>
									<td className='text-center'>{r.lname}</td>
									<td className='text-center'>{r.email}</td>
									<td className='text-center'>{r.age}</td>
									<td className='text-center'>
										<a href='#'>Edit</a>
									</td>
									<td className='text-center'>
										<a href='#' onClick={(e) => this.handleDeleteClick(id, e)}>Delete</a>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		);
	}
}
