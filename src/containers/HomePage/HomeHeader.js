import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import "./HomeHeader.scss";
import { FormattedMessage } from 'react-intl';
import { languages } from "../../utils"

import { changeLanguageApp } from "../../store/actions"


class HomeHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isLogin: false,
      isVI: true,
      isEN: false
    }
  }

  handleSearchForm = () => {
    this.setState({
      isSearch: !this.state.isSearch,
      isLogin: false,
    })
  }

  handleLoginForm = () => {

    this.setState({
      isLogin: !this.state.isLogin,
      isSearch: false,

    })
  }

  handleLanguage = (language) => {
    // alert(language)
    this.props.changeLanguageAppRedux(language)
    this.setState({
      isVI: !this.state.isVI,
      isEN: !this.state.isEN,
    })
  }


  render() {
    console.log("check props: ", this.props)
    return (
      <>
        <div className="header">
          <div className="grid-header">

            <a href="#" className="logo"> <i className="fas fa-hospital-alt"></i> groco </a>

            <nav className="navbar">
              <a href="#home"><FormattedMessage id="homeheader.home" /></a>
              <a href="#features"><FormattedMessage id="homeheader.booking" /></a>
              <a href="#products"><FormattedMessage id="homeheader.clinic" /></a>
              <a href="#categories"><FormattedMessage id="homeheader.specialty" /></a>
              <a href="#review"><FormattedMessage id="homeheader.doctors" /></a>
              <a href="#blogs"><FormattedMessage id="homeheader.blogs" /></a>
            </nav>

            <div className="language">
              <div onClick={() => this.handleLanguage(languages.VI)} className={this.state.isVI ? `active` : ''}>VI</div>
              <div onClick={() => this.handleLanguage(languages.EN)} className={this.state.isEN ? `active` : ''}>EN</div>
            </div>
            <div className="icons">
              <div className="fas fa-bars" id="menu-btn"></div>
              <div onClick={() => this.handleSearchForm()} className="fas fa-search" id="search-btn"></div>
              <div onClick={() => this.handleLoginForm()} className="fas fa-user" id="login-btn"></div>
            </div>


            <form action="" className={`search-form ${this.state.isSearch ? `active` : ''}`}>
              {/* <FormattedMessage id="homeheader.search" />
            {placeholder =>
              <input
                className="search-input"
                placeholder={placeholder}
                type="search"
                id="search-box"
              />
            } */}
              <input type="search" id="search-box" placeholder="search here.." />
              <label htmlFor="search-box" className="fas fa-search"></label>
            </form>

            <form action="" className={`login-form ${this.state.isLogin ? `active` : ''}`}>
              <h3>login now</h3>
              <input type="email" placeholder="your email" className="box" />
              <input type="password" placeholder="your password" className="box" />
              <p>forget your password <a href="#">click here</a></p>
              <p>don't have an account <a href="#">create now</a></p>
              <input type="submit" value="login now" className="btn-login" />
            </form>
          </div>
        </div>

        {this.props.isShowBanner === true &&
          <section className="home" id="home">
            <div className="content">
              <h3><FormattedMessage id="banner.slogan-1" />  <span><FormattedMessage id="banner.slogan-2" /> </span><FormattedMessage id="banner.slogan-3" /> </h3>
              <p><FormattedMessage id="banner.title" /> </p>
              <a href="#" className="btn-login"><FormattedMessage id="banner.btn-banner" /> </a>
            </div>

          </section>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
