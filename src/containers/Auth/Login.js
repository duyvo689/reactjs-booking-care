import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='login-backgroud'>
                <div className='login-container'>
                    <div className='login-content'>
                        <form className='login-form'>
                            <div className="login-title">Login</div>
                            <label>Username</label>
                            <input description="Username" placeholder="Enter your username" type="text" />
                            <label>Password</label>
                            <input description="Password" placeholder="Enter your password" type="password" />
                            <button>Login</button>
                        </form>
                        <div className='login-with'>Or sing in with</div>
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
