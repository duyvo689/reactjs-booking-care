import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailDoctor.scss";
import HomeHeader from "../../HomePage/HomeHeader"
import { getDetailDoctorService } from '../../../services/userService'

class DetailDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataDoctor: {},
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            let res = await getDetailDoctorService(id)
            if (res) {

                this.setState({
                    dataDoctor: res.data,
                })
            }
            console.log("check  data : ", res)

        }

    }

    render() {
        let data = this.state.dataDoctor
        console.log("check data render :", data)
        console.log("check state render:", this.state.dataDoctor)
        let title = ''
        let imageBase64 = ''
        let description = ''
        let post = ''
        if (data && data.positionData && data.firstName && data.lastName) {
            title = `${data.positionData.valueVi}, ${data.firstName} ${data.lastName}`
        }
        if (data && data.image) {
            imageBase64 = new Buffer(data.image, 'base64').toString('binary')
        }
        if (data && data.Markdown) {
            description = data.Markdown.description
            post = data.Markdown.contentHTML
        }
        return (
            <>
                <HomeHeader isShowBanner={false} />

                <div className="grid">
                    <div className="detail-doctor">
                        <div className="doctor-avatar" style={{ backgroundImage: `url(${imageBase64})` }}></div>
                        <div className="doctor-text">
                            <div className="doctor-title" >{title}</div>
                            <div className="doctor-description">
                                {description}
                            </div>
                        </div>

                    </div>

                    <div className="doctor-post"
                        dangerouslySetInnerHTML={{ __html: post }}
                    ></div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
