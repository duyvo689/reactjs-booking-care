import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import "./HomeHeader.scss";

class HomeHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isLogin: false
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
  render() {
    return (
      <>
        <div className="header">

          <a href="#" className="logo"> <i className="fas fa-hospital-alt"></i> groco </a>

          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#features">booking</a>
            <a href="#products">clinic</a>
            <a href="#categories">specialty</a>
            <a href="#review">doctors</a>
            <a href="#blogs">blogs</a>
          </nav>

          <div className="icons">
            <div className="fas fa-bars" id="menu-btn"></div>
            <div onClick={() => this.handleSearchForm()} className="fas fa-search" id="search-btn"></div>
            <div className="fas fa-shopping-cart" id="cart-btn"></div>
            <div onClick={() => this.handleLoginForm()} className="fas fa-user" id="login-btn"></div>
          </div>

          <form action="" className={`search-form ${this.state.isSearch ? `active` : ''}`}>
            <input type="search" id="search-box" placeholder="search here..." />
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

        <section className="home" id="home">

          <div className="content">
            <h3>medical  <span>examination</span>  services for you</h3>
            <p>It would be nice if more healthcare centers focus on good health and less on treating disease.</p>
            <a href="#" className="btn-login">use now</a>
          </div>

        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
