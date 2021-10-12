import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions"
import { getAllCodeService } from "../../../services/userService"
import { languages } from "../../../utils"

class UserManageRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        // try {
        //     let res = await getAllCodeService('gender')
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // } catch (e) {
        //     console.log(e)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }

    }

    render() {
        let genders = this.state.genderArr
        let language = this.props.language
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
                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })
                                }
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
        language: state.app.language,
        genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManageRedux);
