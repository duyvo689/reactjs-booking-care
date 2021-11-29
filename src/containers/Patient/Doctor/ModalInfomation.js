import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import "./ModalInfomation.scss"


class ModalInfomation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
        let user = this.props.userEdit
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: '123456',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }



    toggle = () => {
        this.props.toggleModal()
    }

    handleOnchangeInput = (event, id) => {
        let coppyState = { ...this.state }
        coppyState[id] = event.target.value
        this.setState({
            ...coppyState
        })
    }

    checkValidate = () => {
        let checkInput = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                checkInput = false
                alert(`Thiếu thông tin ${arrInput[i]}`)
                break
            }
        }
        return checkInput
    }

    handleEditUser = () => {
        let isValid = this.checkValidate()
        if (isValid === true) {
            this.props.editUser(this.state)
        }
    }
    render() {

        return (
            < div >
                <Modal isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    className={'modal-user-container'}
                    size="lg"
                    centered
                >
                    <ModalHeader toggle={() => this.toggle()}>Edit user</ModalHeader>
                    <ModalBody>
                        <div className={"form-input"}>
                            <div className="input-cover">
                                <div className="input-1">
                                    <label>Họ tên</label>
                                    <input
                                        type='email' placeholder='Nhập họ tên'
                                    // value={this.state.email}
                                    // onChange={(event) => this.handleOnchangeInput(event, "email")}
                                    // disabled
                                    />
                                </div>

                                <div className="input-1">
                                    <label>Số điện thoại</label>
                                    <input
                                        type='number' placeholder='Nhập số điện thoại'
                                    // value={this.state.password}
                                    // onChange={(event) => this.handleOnchangeInput(event, "password")}
                                    // disabled
                                    />
                                </div>
                            </div>
                            <div className="input-cover">
                                <div className="input-1">
                                    <label>Năm sinh</label>
                                    <input
                                        type='text' placeholder='1990...'
                                    // value={this.state.firstName}
                                    // onChange={(event) => this.handleOnchangeInput(event, "firstName")}
                                    />
                                </div>
                                <div className="input-1">
                                    <label>Địa chỉ</label>
                                    <input
                                        type='text' placeholder='Nhập địa chỉ'
                                    // value={this.state.lastName}
                                    // onChange={(event) => this.handleOnchangeInput(event, "lastName")}
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn-submit" color="primary" onClick={() => this.handleEditUser()}>Submit</Button>{' '}
                        <Button className="btn-cancel" color="secondary" onClick={() => this.toggle()}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalInfomation);
