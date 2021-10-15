import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import * as actions from '../../../store/actions'
import { result } from 'lodash';


const mdParser = new MarkdownIt(/* Markdown-it options */);


class EditerContent extends Component {

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
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4 ">
                            <label>Chọn bác sĩ</label>
                            <Select
                                value={this.state.selectedOption.value}
                                onChange={(options) => this.handleChange(options)}
                                options={arrDoctors}
                            />

                        </div>
                        <div className="col-8">
                            <textarea id="w3review" name="w3review"
                                rows="4" cols="50"
                                style={{ border: '1px solid', width: '100%' }}
                                onChange={(event) => this.handleOnchangeDescription(event)}
                                value={this.state.description}
                            >
                                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                            </textarea>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={({ html, text }) => this.handleEditorChange({ html, text })} />

                    <button onClick={() => this.handleOnchangeSaveMarkdown()}>Lưu thông tin</button>
                    <br></br>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditerContent);
