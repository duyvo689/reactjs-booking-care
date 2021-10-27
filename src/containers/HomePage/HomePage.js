import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import TopDoctor from './Section/TopDoctor';
import HandBook from './Section/HandBook';
import "./HomePage.scss"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {

        return (
            <div className="home-page">
                <HomeHeader isShowBanner={true} />
                <Specialty />
                <TopDoctor />
                <HandBook />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
