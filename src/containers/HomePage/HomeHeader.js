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
                    placeholder="Nhập từ khoá tìm kiếm"
                  />
                  <button className="home-search-btn">Đi</button>
                </form>

                <ul className="home-item">
                  <li className="home-item-select">
                    <NavLink exact='true' activeClassName="active" to="/">Chuyên Khoa khám</NavLink>
                  </li>
                  <li className="home-item-select">
                    <NavLink activeClassName="active" to="/">Bác sĩ</NavLink>
                  </li>
                  <li className="home-item-select">
                    <NavLink activeClassName="active" to="/">Bệnh viện</NavLink>
                  </li>
                  <li className="home-item-select">
                    <NavLink activeClassName="active" to="/">Gói khám bệnh</NavLink>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className="home-header-nav">
          <ul className="home-header-menu">
            <li className="home-header-item">
              <NavLink exact='true' activeClassName="active" to="/">Thuốc</NavLink>
            </li>
            <li className="home-header-item">
              <NavLink activeClassName="active" to="/">Sức khoẻ</NavLink>
            </li>
            <li className="home-header-item">
              <NavLink activeClassName="active" to="/">Sắc đẹp</NavLink>
            </li>
            <li className="home-header-item">
              <NavLink activeClassName="active" to="/">Khám bệnh online</NavLink>
            </li>
            <li className="home-header-item">
              <NavLink activeClassName="active" to="/">Mua sắm</NavLink>
            </li>
            <li className="home-header-item">
              <NavLink activeClassName="active" to="/">Khuyến mại</NavLink>
            </li>
            <li className="home-header-item">
              <NavLink activeClassName="active" to="/">Liên hệ</NavLink>
            </li>
          </ul>
        </div>
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
