import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions"
// import { getAllCodeService } from "../../../services/userService"
import { languages, CommonUtils } from "../../../utils"
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

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: ''
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
            let arrGender = this.props.genderRedux
            this.setState({
                genderArr: arrGender,
                gender: arrGender && arrGender.length > 0 ? arrGender[0].key : ''
            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPosition = this.props.positionRedux
            this.setState({
                positionArr: arrPosition,
                position: arrPosition && arrPosition.length > 0 ? arrPosition[0].key : ''
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRole = this.props.roleRedux
            this.setState({
                roleArr: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : ''
            })
        }

    }

    handlerUpImg = async (event) => {
        let data = event.target.files;
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                imgAvt: objectUrl,
                avatar: base64
            })
        }
    }

    handlerEditImgUser = (user) => {
        let imageBase64 = ''
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary')
        }
    }

    handleSaveUser = () => {
        console.log("check state: ", this.state)
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phone,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
            avatar: this.state.avatar,
        })
    }

    onChangeInput = (event, id) => {
        let coppyState = { ...this.state }
        coppyState[id] = event.target.value
        this.setState({
            ...coppyState
        }, console.log(this.state))
    }

    render() {
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr

        let { email, password, firstName, lastName, phone, address, gender, position, role, avatar } = this.state

        let language = this.props.language
        return (
            <>
                <h2 className="container mt-5" >Add user Rudex</h2>

                <div className="container mt-3">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" placeholder="Email"
                                value={email}
                                onChange={(event) => this.onChangeInput(event, 'email')}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                                value={password}
                                onChange={(event) => this.onChangeInput(event, 'password')}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">First name</label>
                            <input type="text" className="form-control" placeholder="First name"
                                value={firstName}
                                onChange={(event) => this.onChangeInput(event, 'firstName')}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Last name</label>
                            <input type="text" className="form-control" placeholder="Last name"
                                value={lastName}
                                onChange={(event) => this.onChangeInput(event, 'lastName')}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label htmlFor="inputAddress">Phone number</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Phone number"
                                value={phone}
                                onChange={(event) => this.onChangeInput(event, 'phone')}
                            />
                        </div>
                        <div className="form-group col-md-8">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                                value={address}
                                onChange={(event) => this.onChangeInput(event, 'address')}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">Gender</label>
                            <select id="inputState" className="form-control"
                                onChange={(event) => this.onChangeInput(event, 'gender')}
                            >
                                {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option value={item.key} key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">Position</label>
                            <select id="inputState" className="form-control"
                                value="item.key"
                                onChange={(event) => this.onChangeInput(event, 'position')}
                            >
                                {positions && positions.length > 0 &&
                                    positions.map((item, index) => {
                                        return (
                                            <option value={item.key} key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">RoleID</label>
                            <select id="inputState" className="form-control"
                                value="item.key"
                                onChange={(event) => this.onChangeInput(event, 'role')}
                            >
                                {roles && roles.length > 0 &&
                                    roles.map((item, index) => {
                                        return (
                                            <option value={item.key} key={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
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
                    <button type="submit"
                        className="btn btn-primary mt-4"
                        onClick={() => this.handleSaveUser()}
                    >Submit</button>
                </div>

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
        roleRedux: state.admin.roles,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.fetchcreateNewUserStart(data)),
        allUser: () => (data) => dispatch(actions.fetchAllUserStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManageRedux);
