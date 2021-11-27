import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HandBook.scss"
import Slider from "react-slick";
import * as actions from '../../../store/actions'


class HandBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrBooks: []
        }
    }

    componentDidMount() {
        this.props.loadAllBooks()
        console.log("check loadAllBooks>>", this.props)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allBooksRedux !== this.props.allBooksRedux) {
            let data = this.props.allBooksRedux
            this.setState({
                arrBooks: data
            })
        }
    }

    handleViewDetail = () => {

    }

    render() {
        let arrBooks = this.state.arrBooks

        const settings = {

            dots: true,
            infinite: false,
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
            <div className="hand-book container section">
                <h1 className="section_heading">Cẩm nang sức khoẻ</h1>
                <Slider {...settings}>
                    {arrBooks && arrBooks.length > 0 && arrBooks.map((item, index) => {
                        let imageBase64 = ''
                        if (item.image) {
                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                        }
                        if (index === 0) {
                            console.log("<<<>>>>>:", item)
                        }
                        return (
                            <div className="hand-book-card" key={index} onClick={() => this.handleViewDetail(item)}>
                                <div className="card" >
                                    <div className="card-img-top card-img" style={{ backgroundImage: `url(${imageBase64})` }}></div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nameBook}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Slider>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        allBooksRedux: state.admin.allBooks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadAllBooks: () => dispatch(actions.fetchAllHandBookStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
