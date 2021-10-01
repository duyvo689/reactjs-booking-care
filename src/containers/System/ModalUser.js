import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProductManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleModal()
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
                    <ModalHeader toggle={() => this.toggle()}>Add new user</ModalHeader>
                    <ModalBody>
                        <div className={"form-input"}>
                            <div className="input-cover">
                                <div className="input-1">
                                    <label>Email</label>
                                    <input type='email' placeholder='Nhap email' />
                                </div>

                                <div className="input-1">
                                    <label>Password</label>
                                    <input type='password' placeholder='Nhap password' />
                                </div>
                            </div>
                            <div className="input-cover">
                                <div className="input-1">
                                    <label>First Name</label>
                                    <input type='text' placeholder='Nhap first name' />
                                </div>
                                <div className="input-1">
                                    <label>Last Name</label>
                                    <input type='text' placeholder='Nhap last name' />
                                </div>
                            </div>
                            <div className="input-2">
                                <label>Address</label>
                                <input type='text' placeholder='Nhap address' />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn-submit" color="primary" onClick={() => this.toggle()}>Submit</Button>{' '}
                        <Button className="btn-cancel" color="secondary" onClick={() => this.toggle()}>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
