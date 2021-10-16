import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailDoctor.scss";
import HomeHeader from "../../HomeHeader"

class DetailDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("check props: ", this.props)
        return (
            <>
                <HomeHeader isShowBanner={false} />

                <div className="grid">
                    <div className="detail-doctor">
                        <div className="doctor-avatar" style={{ backgroundImage: `url("https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg")` }}></div>
                        <div className="doctor-text">
                            <div className="doctor-title" >Giáo sư bác sĩ Võ Thành Duy</div>
                            <div className="doctor-description">
                                Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
                                Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
                                Tổng thư ký hội Da liễu Việt Nam
                            </div>
                        </div>
                    </div>

                    <div className="doctor-post">
                        <p>
                            Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng
                            Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu
                            Tốt nghiệp Đại học Y Hà Nội (1977)
                            Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
                            Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội
                            Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
                            Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan
                            Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu
                            Tổng thư ký hội Da liễu Việt Nam
                            Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới

                        </p>
                    </div>
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
