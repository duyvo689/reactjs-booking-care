import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import './HomeHeader.scss'

class HomeHeader extends Component {

    render() {
        return (
            <>
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <i className="fas fa-bars"></i>
                        <div className="header-logo"></div>
                    </div>
                    <div className="center-content">
                        <ul className="center-child">
                            <li className="center-child-item">
                                <NavLink exact activeClassName="active" to="/">Chuyên khoa</NavLink>
                            </li>
                            <li className="center-child-item">
                                <NavLink exact activeClassName="active" to="/">Bác sĩ</NavLink>
                            </li>
                            <li className="center-child-item">
                                <NavLink exact activeClassName="active" to="/">Phòng khám</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="right-content">
                        <div className="right-child">
                            <i className="fas fa-question-circle"></i>
                            <span>Hỗ trợ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-header-banner">

            </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
