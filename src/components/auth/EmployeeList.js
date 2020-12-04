import React, {Component} from 'react';
import {user} from '../../actions/EmployeeList.js';

class EmployeeList extends Component {
    renderList() {
        const res = this.props.employees;
        return user.map(item => {
            return (
                <div className="ui cards" key={item.id}>
                    <div className="card">
                        <div className="content">
                            <div className="header">{item.name}</div>
                            <div className="meta">{item.age}</div>
                            <div className="meta">{item.gender}</div>
                            <div className="meta">{item.email}</div>
                            <div className="meta">{item.phoneNo}</div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Employee List</h2>
                {this.renderList()}
            </div>
        )
    }
}

export default EmployeeList;

