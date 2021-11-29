import React, { Component } from 'react';
import Select from 'react-select';
import * as actions from '../../../store/actions'
import { languages, dateFormat } from "../../../utils"
import { connect } from 'react-redux';
import "./ManagerShedule.scss"
import DatePicker from '../../../components/Input/DatePicker';
import { toast } from 'react-toastify';
import _ from 'lodash'
import { saveBulkScheduleDoctor } from '../../../services/userService'


class ManagerShedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            arrDoctors: '',
            timeArr: [],
            time: '',
            currentDate: '',

            rangeTime: []
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

        if (prevProps.timeRedux !== this.props.timeRedux) {
            let data = this.props.timeRedux
            if (data && data.length > 0) {
                data = data.map(item => ({ ...item, isSelected: false }))
            }
            this.setState({
                rangeTime: data
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

    handleClickBtnTime = (time) => {
        let { rangeTime } = this.state
        if (rangeTime && rangeTime.length > 0) {
            rangeTime = rangeTime.map(item => {
                if (item.id === time.id) item.isSelected = !item.isSelected
                return item
            })
            this.setState({
                rangeTime: rangeTime
            })
        }
    }

    handleSaveShedule = async () => {
        let { rangeTime, selectedOption, currentDate } = this.state
        let result = []

        if (!currentDate) {
            toast.error("invalid date! ")
            return;
        }
        if (selectedOption && _.isEmpty(selectedOption)) {
            toast.error("Invalid selected doctor! ")
            return
        }

        // let formateDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER)
        // let formateDate = moment(currentDate).unix()
        let formateDate = new Date(currentDate).getTime()

        if (rangeTime && rangeTime.length > 0) {
            let selectedTime = rangeTime.filter(item => item.isSelected === true)
            if (selectedTime && selectedTime.length > 0) {
                selectedTime.map((shedule, index) => {
                    let object = {}
                    object.doctorId = selectedOption.value
                    object.date = formateDate
                    object.timeType = shedule.keyMap
                    result.push(object)
                })

            } else {
                toast.error("Invalid selected time")
                return
            }
        }

        let res = await saveBulkScheduleDoctor({
            arrSchedule: result,
            doctorId: selectedOption.value,
            date: formateDate
        })

    }

    render() {
        const { selectedOption, arrDoctors } = this.state
        let times = this.state.timeArr
        let rangeTime = this.state.rangeTime
        let language = this.props.language
        console.log("chek coi: ", this.state)
        return (

            <>
                <div className=" container manager_shedule">
                    <div className=" text-center m-auto mt-5 mb-5">
                        <h1>THÊM LỊCH KHÁM BỆNH</h1>
                    </div>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-6">
                                <label>Chọn bác sĩ</label>
                                <Select
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={arrDoctors}
                                    placeholder="Chọn bác sĩ"
                                />

                            </div>
                            <div className="col-6">
                                <label>Chọn ngày</label>
                                <DatePicker
                                    onChange={this.handlerOnchangeDatePicker}
                                    value={this.state.currentDate}
                                    minDate={new Date()}
                                    className="form-control date-picker"
                                    placeholder="Chọn ngày"

                                />

                            </div>
                        </div>
                    </div>
                    <div className="  time-box mt-5">
                        {rangeTime && rangeTime.length > 0 &&
                            rangeTime.map((item, index) => {
                                return (
                                    <div className={`time ${item.isSelected === true ? "active" : ""}`}
                                        key={index}
                                        onClick={() => this.handleClickBtnTime(item)}
                                    >
                                        <option value={item.keyMap} keyMap={index}>{language === languages.VI ? item.valueVi : item.valueEn}</option>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=" mb-5 mt-4">
                        <button type="submit"
                            className="btn btn-success p-3"
                            onClick={() => this.handleSaveShedule()}
                        >Lưu thông tin</button>
                    </div>
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
