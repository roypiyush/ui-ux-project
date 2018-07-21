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

	registerUserStoreChangeEvent() {
		UserStore.on(Constants.Events.USER_CHANGE, () => {
			this.setState({
				users: UserStore.getAll()
			});
		});
	}

	registerUserEditEvent() {

	}

	handleDeleteClick(id) {
		Dispatcher.dispatch({action: Constants.Actions.DELETE_USER, object: id});
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
										<a href='#'><img width="24" height="24" src="/app/icons/icons8-pencil-30.png" /></a>
									</td>
									<td className='text-center'>
										<a href='#' onClick={(e) => this.handleDeleteClick(id, e)}><img width="24" height="24" src="/app/icons/icons8-close-window-24.png"/></a>
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
