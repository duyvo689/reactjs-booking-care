import React, { Component } from 'react';
import Select from 'react-select';
import * as actions from '../../../store/actions'
import { languages } from "../../../utils"
import { connect } from 'react-redux';
import "./ManagerShedule.scss"
import DatePicker from '../../../components/Input/DatePicker';


class ManagerShedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            arrDoctors: '',
            timeArr: [],
            time: '',
            currentDate: ''
        }
    }

    componentDidMount() {
        this.props.loadAllDoctors()
        this.props.getTimeStart()

        console.log(">>check managerShedule", this.props)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctorsRedux !== this.props.allDoctorsRedux) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctorsRedux)
            this.setState({
                arrDoctors: dataSelect
            })
        }

        if (prevProps.timeRedux !== this.props.timeRedux) {
            let arrTime = this.props.timeRedux
            this.setState({
                timeArr: arrTime,
                time: arrTime && arrTime.length > 0 ? arrTime[0].keyMap : ''
            })
        }
    }

    buildDataInputSelect = (inputData) => {
        let result = []
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {}
                let labelName = `${item.lastName} ${item.firstName}`
                object.value = item.id
                object.label = labelName
                result.push(object)
            })
        }
        return result
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    handlerOnchangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }

    render() {
        const { selectedOption, arrDoctors } = this.state
        let times = this.state.timeArr
        let language = this.props.language
        console.log("chek coi: ", this.state)
        return (

            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                            <label>Chọn bác sĩ</label>
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={arrDoctors}
                            />

                        </div>
                        <div className="col-6">
                            <label>Chọn ngày</label>
                            <DatePicker
                                onChange={this.handlerOnchangeDatePicker}
                                value={this.state.currentDate}
                                minDate={new Date()}
                                className="form-control date-picker"
                            />

                        </div>
                    </div>
                </div>
                <div className="container time-box">

                    {times && times.length > 0 &&
                        times.map((item, index) => {
                            return (
                                <div className="time">
                                    <option value={item.keyMap} keyMap={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                </div>
                            )
                        })
                    }


                </div>
            </>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        allDoctorsRedux: state.admin.allDoctors,
        timeRedux: state.admin.times,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadAllDoctors: () => dispatch(actions.fetchAllDoctorStart()),
        getTimeStart: () => dispatch(actions.fetchTimeStart()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerShedule);
