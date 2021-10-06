import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import "./HomeHeader.scss";

class HomeHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearch: false
    }
  }

  handleSearchForm = () => {
    this.setState({
      isSearch: !this.state.isSearch
    }, () => console.log(this.state.isSearch))
  }
  render() {
    return (
      <>
        <div className="header">

          <a href="#" className="logo"> <i className="fas fa-shopping-basket"></i> groco </a>

          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#features">features</a>
            <a href="#products">products</a>
            <a href="#categories">categories</a>
            <a href="#review">review</a>
            <a href="#blogs">blogs</a>
          </nav>

          <div className="icons">
            <div className="fas fa-bars" id="menu-btn"></div>
            <div onClick={() => this.handleSearchForm()} className="fas fa-search" id="search-btn"></div>
            <div className="fas fa-shopping-cart" id="cart-btn"></div>
            <div className="fas fa-user" id="login-btn"></div>
          </div>

          <form action="" className={`search-form ${this.state.isSearch ? `active` : ''}`}>
            <input type="search" id="search-box" placeholder="search here..." />
            <label for="search-box" className="fas fa-search"></label>
          </form>
        </div>
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
