import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./UserManage.scss"
import { getAllUsers, createNewUserService } from '../../services/userService'
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            isModalOpen: false,
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact()
    }

    getAllUserFromReact = (async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                allUsers: response.users
            })
        }
    })

    handleAddUser = (() => {
        this.setState({
            isModalOpen: true
        })
    })

    toggleModal = (() => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    })

    createNewUser = async (data) => {
        console.log(data)
        try {
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                this.getAllUserFromReact()
                this.toggleModal()
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {

        return (
            <>
                <ModalUser
                    isOpen={this.state.isModalOpen}
                    toggleModal={this.toggleModal}
                    createNewUser={this.createNewUser}
                />
                <div className="btn-add-user" onClick={() => this.handleAddUser()}>
                    <i className="fas fa-plus"></i>
                    Add new user
                </div>
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
            </>
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
