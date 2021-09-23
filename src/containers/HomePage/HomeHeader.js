import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import "./HomeHeader.scss";
import "../../containers/Base.scss"

class HomeHeader extends Component {
  render() {
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content grid">
            <div className="home-left-content col c-3">
              <div className="home-logo"></div>
            </div>
            <div className="home-right-content col c-9">
              <div className="home-right-content-cover">
                <form className="home-search">
                  <input type="text" name="q" class="home-search-input"
                    id="header-search-input"
                    placeholder="Search for health information"
                  />
                  <button className="home-search-btn">Go</button>
                </form>

                <ul className="home-item">
                  <li className="home-item-select">
                    <NavLink exact='true' activeClassName="active" to="/">Chuyên Khoa</NavLink>
                  </li>
                  <li className="home-item-select">
                    <NavLink exact='true' activeClassName="active" to="/">Chuyên Khoa</NavLink>
                  </li>
                  <li className="home-item-select">
                    <NavLink exact='true' activeClassName="active" to="/">Chuyên Khoa</NavLink>
                  </li>
                  <li className="home-item-select">
                    <NavLink exact='true' activeClassName="active" to="/">Chuyên Khoa</NavLink>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className="home-header-banner"></div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
