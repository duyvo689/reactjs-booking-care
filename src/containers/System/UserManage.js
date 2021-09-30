import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss"
import { getAllUsers } from '../../services/userService'

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL')
        console.log('data ne: ', response)
        if (response && response.errCode == 0) {
            this.setState({
                allUsers: response.users
            }, () => { console.log('data 2: ', this.state.allUsers) })
        }

    }


    render() {
        return (
            <div className="text-center">
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <div className='btn-cover'>
                                            <button><i className="btn-edit fas fa-edit"></i></button>
                                            <button><i className="btn-delete fas fa-trash-alt"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
