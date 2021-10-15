import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class EditerContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentHTML: '',
            contentMardown: '',
            selectedDoctor: '',
            description: ''
        }
    }

    componentDidMount() {

    }


    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentHTML: html,
            contentMardown: text,
        })
        console.log('handleEditorChange', html, text);
    }

    handleOnchangeSaveMarkdown = () => {
        console.log("check cem sao", this.state)
    }

    handleOnchangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleChange = (selectedDoctor) => {
        this.setState({ selectedDoctor });
        console.log(`Option selected:`, selectedDoctor);
    };

    render() {

        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4 ">
                            <label>Chọn bác sĩ</label>
                            <Select
                                value={this.state.selectedDoctor}
                                onChange={(options) => this.handleChange(options)}
                                options={options}
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

                </div>
                <button onClick={() => this.handleOnchangeSaveMarkdown()}>Lưu thông tin</button>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditerContent);
