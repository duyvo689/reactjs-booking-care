import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'duy vo',
            password: '123456',
            isShowPassword: false,
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnClick = () => {
        console.log(this.state.username)
        console.log(this.state.password)

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
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                            <button type="submit" onClick={() => this.handleOnClick()}>Login</button>
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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
