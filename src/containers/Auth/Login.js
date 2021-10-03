import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.message !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.message == 0) {
                this.props.userLoginSuccess(data.user)
                console.log('Đăng nhập thành công!')
            }
        } catch (e) {

            console.log(e.response.data)
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }

    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-backgroud'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='login-form'>
                            <div className="login-title">Login</div>
                            <label>Username</label>
                            <input
                                description="Username"
                                placeholder="Enter your username" type="text"
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeEmail(event)}
                            />
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input
                                    description="Password"
                                    placeholder="Enter your password"
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    // value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                            <div className='login-title-err' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <button onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        <div className='login-forgot-password'>Forgot password?</div>

                        <div className='login-with'>Or sign in with</div>
                        <div className='login-social'>
                            <i className="facebook-icon fab fa-facebook"></i>
                            <i className="twitter-icon fab fa-twitter"></i>
                            <i className="google-icon fab fa-google"></i>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
