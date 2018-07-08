import React from 'react';
import axios from 'axios';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		axios.get("http://localhost:8000/users")
			.then(response => {
				this.state.users = response.data.map(c => {
					return {
						id: c.id,
						fname: c.fname,
						lname: c.lname,
						email: c.email,
						age: c.age
					}
				});
				console.log("Users Count " + this.state.users.length);
				this.setState(this.state);
			}).catch(error => console.log(error));
	}

	render() {
		return (
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							{
								this.props.headers.map((h) => <th>{h}</th>)
							}
						</tr>
					</thead>
					<tbody>
						{
							this.state.users.map((r) =>
								<tr>
									{Object.entries(r).map(([key, value]) => <td>{value}</td>)}
								</tr>
							)
						}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;