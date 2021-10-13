import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions"
// import { getAllCodeService } from "../../../services/userService"
import { languages } from "../../../utils"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserManageRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            imgAvt: '',
            isLightBox: false,
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getPositionStart()
        this.props.getRoleStart()

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

        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }

    }

    handlerUpImg = (event) => {
        let data = event.target.files;
        let file = data[0]
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                imgAvt: objectUrl
            })
        }
    }

    render() {
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr

        let language = this.props.language
        return (
            <>
                <h2 className="container mt-5" >Add user Rudex</h2>

                <form className="container mt-3">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">First name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="First name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Last name</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputAddress">Phone number</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Phone number" />
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">Sex</label>
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
                            <label htmlFor="inputState">Position</label>
                            <select id="inputState" className="form-control">
                                {positions && positions.length > 0 &&
                                    positions.map((item, index) => {
                                        return (
                                            <option key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">RoleID</label>
                            <select id="inputState" className="form-control">
                                {roles && roles.length > 0 &&
                                    roles.map((item, index) => {
                                        return (
                                            <option key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">Images</label>
                            <input type="file"
                                className="form-control" id="inputZip"
                                onChange={(event) => this.handlerUpImg(event)}
                            />
                            <div className="preview-img"
                                style={{
                                    marginTop: "5px",
                                    maxWidth: "270px", height: "90px",
                                    border: "1px solid",
                                    backgroundImage: `url(${this.state.imgAvt})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    cursor: 'pointer'
                                }}
                                onClick={() => this.setState({ isLightBox: true })}
                            >
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>

                {this.state.isLightBox && (
                    <Lightbox
                        mainSrc={this.state.imgAvt}
                        onCloseRequest={() => this.setState({ isLightBox: false })}
                    />
                )}
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManageRedux);
