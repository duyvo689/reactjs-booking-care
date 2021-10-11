import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCodeService } from "../../../services/userService"

class ProductManage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <h2 className="container mt-5" >Add user Rudex</h2>

                <form className="container mt-3">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">First name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="First name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Last name</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label for="inputAddress">Phone number</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Phone number" />
                        </div>
                        <div className="form-group col-md-8">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-3">
                            <label for="inputState">Sex</label>
                            <select id="inputState" className="form-control">
                                <option selected>Male</option>
                                <option>Female</option>
                                <option>Order</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputState">Position</label>
                            <select id="inputState" className="form-control">
                                <option selected>Admin</option>
                                <option>Doctor</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputState">RoleID</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="inputZip">Images</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </>
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
