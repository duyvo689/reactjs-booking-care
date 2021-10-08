import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Specialty.scss"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

class Specialty extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1424,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                    }
                },

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
            <div className="s" >
                <div className="specialty">
                    <h1 class="heading">what services we offer</h1>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla assumenda et
                        laboriosam est pariatur minima sequi libero perferendis totam.</p>
                    <Slider {...settings}>
                        <div className="specialty-card">
                            <div class="card">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F03%2Fhinh-nen-dep-may-tinh-23.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div class="card">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F03%2Fhinh-nen-dep-may-tinh-23.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">s content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div class="card">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F13%2F0e%2F0e%2F81%2Fhalong-bay-full-day-guided.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div class="card">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F03%2Fhinh-nen-dep-may-tinh-23.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div class="card">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F03%2Fhinh-nen-dep-may-tinh-23.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="specialty-card">
                            <div class="card">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F03%2Fhinh-nen-dep-may-tinh-23.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="specialty-card">
                            <div class="card">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwall.vn%2Fwp-content%2Fuploads%2F2020%2F03%2Fhinh-nen-dep-may-tinh-23.jpg&f=1&nofb=1" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
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
