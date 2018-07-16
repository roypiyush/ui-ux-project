import React from 'react';
import UserStore from '../store/userstore';
import Constants from '../constants';

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
	
	render() {
		return (
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							{
								this.props.headers.map((h) => <th className='text-center'>{h}</th>)
							}
						</tr>
					</thead>
					<tbody>
						{
							this.state.users.map((r) =>
								<tr>
									<td className='text-center'>{r.id}</td>
									<td className='text-center'>{r.fname}</td>
									<td className='text-center'>{r.lname}</td>
									<td className='text-center'>{r.email}</td>
									<td className='text-center'>{r.age}</td>
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		);
	}
}
