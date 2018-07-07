import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            rows: [
                {
                    id: "1",
                    fname: "gname"
                },
                {
                    id: "2",
                    fname: "gname"
                }
            ]
        }
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
                        this.state.rows.map((r) => 
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