import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import * as actions from '../../../store/actions'


const mdParser = new MarkdownIt(/* Markdown-it options */);


class EditerHandBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentHTML: '',
            contentMarkdown: '',

            allBooks: [],
        }
    }

    componentDidMount() {
        this.props.loadAllBooks()
        this.props.saveOneHandBook()
        console.log(">>check managerShedule", this.props)
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allBooksRedux !== this.props.allBooksRedux) {
            let data = this.props.allBooksRedux
            this.setState({
                allBooks: data
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
        this.props.saveOneHandBook({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
        })
        console.log("check cem sao", this.state)
    }

    handleEditBook = () => {

    }

    handleDeleteBook = () => {

    }

    render() {
        return (

            <>
                <div className="container mt-3">

                    <div className="text-center">
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>Name Book</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allBooks.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.nameBook}</td>
                                            <td>
                                                <div className='btn-cover'>
                                                    <button onClick={() => this.handleEditBook(item)}><i className="btn-edit fas fa-edit"></i></button>
                                                    <button onClick={() => this.handleDeleteBook(item)}><i className="btn-delete fas fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="container mt-3">
                        <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={({ html, text }) => this.handleEditorChange({ html, text })} />

                        <button onClick={() => this.handleOnchangeSaveMarkdown()}>Lưu thông tin</button>
                        <br></br>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allBooksRedux: state.admin.allBooks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadAllBooks: () => dispatch(actions.fetchAllHandBookStart()),
        saveOneHandBook: (data) => dispatch(actions.saveHandBookStart(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditerHandBook);
