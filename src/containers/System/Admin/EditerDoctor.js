import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import * as actions from '../../../store/actions'
import { result } from 'lodash';
import './admin.scss'

const mdParser = new MarkdownIt(/* Markdown-it options */);


class EditerDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentHTML: '',
            contentMarkdown: '',
            selectedOption: '',
            description: '',

            arrDoctors: '',
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

    componentDidMount() {
        this.props.loadAllDoctors()
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctorsRedux !== this.props.allDoctorsRedux) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctorsRedux)
            this.setState({
                arrDoctors: dataSelect
            })
        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentHTML: html,
            contentMarkdown: text,
        })
        console.log('handleEditorChange', html, text);
    }

    handleOnchangeSaveMarkdown = () => {
        this.props.saveDetailDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption,
        })
        console.log("check cem sao", this.state)
    }

    handleOnchangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption: selectedOption.value });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        let arrDoctors = this.state.arrDoctors
        console.log(">>>>:", arrDoctors)
        return (

            <>
                <div className="container text-center m-auto mt-5">
                    <h1>THÊM THÔNG TIN BÁC SĨ</h1>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4 ">
                            <label>Chọn bác sĩ</label>
                            <Select
                                value={this.state.selectedOption.value}
                                onChange={(options) => this.handleChange(options)}
                                options={arrDoctors}
                                placeholder="Chọn bác sĩ"
                            />

                        </div>
                        <div className="col-8">
                            <label>Mô tả bác sĩ</label>
                            <textarea id="w3review" name="w3review"
                                rows="4" cols="50"
                                style={{ border: '1px solid', width: '100%' }}
                                onChange={(event) => this.handleOnchangeDescription(event)}
                                value={this.state.description}
                                placeholder="Mô tả bác sĩ"
                            >
                                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                            </textarea>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-4 ">
                            <label>Chọn giá</label>
                            <Select
                                // value={this.state.selectedOption.value}
                                // onChange={(options) => this.handleChange(options)}
                                // options={arrDoctors}
                                placeholder="Chọn giá"
                            />

                        </div>
                        <div className="col-4 ">
                            <label>Chọn Phương thức thanh toán</label>
                            <Select
                                // value={this.state.selectedOption.value}
                                // onChange={(options) => this.handleChange(options)}
                                // options={arrDoctors}
                                placeholder="Phương thức thanh toán"
                            />

                        </div>

                        <div className="col-4 ">
                            <label>Chọn tỉnh thành</label>
                            <Select
                                // value={this.state.selectedOption.value}
                                // onChange={(options) => this.handleChange(options)}
                                // options={arrDoctors}
                                placeholder="Chọn tỉnh thành"
                            />

                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-4 ">
                            <label>Tên phòng khám</label>
                            <input type="text" class="form-control" id="" placeholder="" />

                        </div>
                        <div className="col-4">
                            <label>Địa chỉ phòng khám</label>
                            <input type="text" class="form-control" id="" placeholder="" />
                        </div>

                        <div className="col-4">
                            <label>Ghi chú thêm</label>
                            <input type="text" class="form-control" id="" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="container mt-5">

                    <label className="mb-2">Thông tin chi tiết bác sĩ</label>

                    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={({ html, text }) => this.handleEditorChange({ html, text })} />


                    <br></br>
                </div>
                <div className="container mb-5 m-auto">
                    <button className="btn btn-success p-3" onClick={() => this.handleOnchangeSaveMarkdown()}>LƯU THÔNG TIN</button>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctorsRedux: state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadAllDoctors: () => dispatch(actions.fetchAllDoctorStart()),
        saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctorStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditerDoctor);
