import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import "./HomeHeader.scss";
import { FormattedMessage } from 'react-intl';
import { languages } from "../../utils";
import homeIcon1 from "../../assets/home-icon-1.png"
import homeIcon2 from "../../assets/home-icon-2.png"
import homeIcon3 from "../../assets/home-icon-3.png"
import homeIcon4 from "../../assets/home-icon-4.png"
import homeIcon5 from "../../assets/home-icon-5.png"

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
    return (
      <>
        <div className="header">
          <div className="navbar_home container">
            <div className="logo">
              <a href="#" className="logo_link">
                <i className="fas fa-hospital-alt logo_icon"></i>
                DoctorCare
              </a>
            </div>
            <div className="content">
              <div className="content_children">
                <p> <b>Chuyên Khoa</b> </p>
                Tìm bác sĩ theo chuyên khoa
              </div>
              <div className="content_children">
                <p> <b>Cơ sở y tế</b> </p>
                Chọn bệnh viện phòng khám
              </div>
              <div className="content_children">
                <p> <b>Bác sĩ</b> </p>
                Chọn bác sĩ giỏi
              </div>
              <div className="content_children">
                <p> <b>Gói khám</b> </p>
                Khám sức khỏe tổng quát
              </div>
            </div>
            <div className="login">
              <a href> Đăng nhập/ đăng ký</a>
            </div>
          </div>
        </div>

        {this.props.isShowBanner === true &&
          <div className="home" id="home">
            <div className="home_cover">
              <div className="content">
                <h3><FormattedMessage id="banner.slogan-1" />  <span><FormattedMessage id="banner.slogan-2" /> </span><FormattedMessage id="banner.slogan-3" /> </h3>
                <p><FormattedMessage id="banner.title" /> </p>

                <a href="#" className="btn-login"><FormattedMessage id="banner.btn-banner" /> </a>
              </div>
            </div>
            <div className="home_cover-footer">

              <div className="home_list container">
                <div className="home_item">
                  <div className="home_circle">
                    <img className="home_img" src={homeIcon1} alt="" />
                  </div>
                  <h3 className="home_title">Khám <br></br> chuyên khoa</h3>
                </div>
                <div className="home_item">
                  <div className="home_circle">
                    <img className="home_img" src={homeIcon2} alt="" />
                  </div>
                  <h3 className="home_title">Khám <br></br> từ xa</h3>
                </div>
                <div className="home_item">
                  <div className="home_circle">
                    <img className="home_img" src={homeIcon3} alt="" />
                  </div>
                  <h3 className="home_title">Khám <br></br> tổng quát</h3>
                </div>
                <div className="home_item">
                  <div className="home_circle">
                    <img className="home_img" src={homeIcon4} alt="" />
                  </div>
                  <h3 className="home_title">Xét nghiệm<br></br> y học</h3>
                </div>
                <div className="home_item">
                  <div className="home_circle">
                    <img className="home_img" src={homeIcon5} alt="" />
                  </div>
                  <h3 className="home_title">Sức khoẻ<br></br> tinh thần</h3>
                </div>
              </div>
            </div>

          </div>
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
