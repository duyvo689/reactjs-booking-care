import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Specialty.scss"
import Slider from "react-slick";

class Specialty extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <div className="specialty">
                <div className="grid" >
                    <h1 className="heading">what services we offer</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla assumenda et
                        laboriosam est pariatur minima sequi libero perferendis totam.</p>
                    <Slider {...settings}>
                        <div className="specialty-card">
                            <div className="card">
                                <div className="card-img-top card-img" style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F03%2Fhinh-nen-dep-may-tinh-23.jpg&f=1&nofb=1")` }}></div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div className="card">
                                <div className="card-img-top card-img" style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-eT1OAmllNIk%2FUb6v_jDga-I%2FAAAAAAAAAkw%2F6jh9NzAm4GY%2Fs1600%2Fhinhnenbaibien13.jpg&f=1&nofb=1")` }}></div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">s content. jdhfjhs fksdjfk fksdjfk mfhskdjhfk jhfiksdj</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div className="card">
                                <div className="card-img-top card-img" style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F13%2F0e%2F0e%2F81%2Fhalong-bay-full-day-guided.jpg&f=1&nofb=1")` }}></div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div className="card">
                                <div className="card-img-top card-img" style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftravel.ebrand.jp%2Fwp%2Fwp-content%2Fuploads%2F2020%2F06%2Ffujisan_1000_1000.jpg&f=1&nofb=1")` }}></div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">s content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div className="card">
                                <div className="card-img-top card-img" style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F02%2Fhinh-anh-ca-heo-de-thuong-6-1536x960.jpg&f=1&nofb=1")` }}></div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div className="card">
                                <div className="card-img-top card-img" style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-eT1OAmllNIk%2FUb6v_jDga-I%2FAAAAAAAAAkw%2F6jh9NzAm4GY%2Fs1600%2Fhinhnenbaibien13.jpg&f=1&nofb=1")` }}></div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">s content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div >
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
