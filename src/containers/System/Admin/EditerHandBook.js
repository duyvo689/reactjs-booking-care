import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import * as actions from '../../../store/actions'
import { languages, CommonUtils } from "../../../utils"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const mdParser = new MarkdownIt(/* Markdown-it options */);


class EditerHandBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameBook: '',
            contentHTML: '',
            contentMarkdown: '',

            allBooks: [],

            isLightBox: false,
            avatar: '',
            imgAvt: '',

        }
    }

    componentDidMount() {
        this.props.loadAllBooks()
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
            avatar: this.state.avatar,
            nameBook: this.state.nameBook
        })
        console.log("check xem sao", this.state)
    }


    handlerUpImg = async (event) => {
        let data = event.target.files;
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                imgAvt: objectUrl,
                avatar: base64
            })
        }
    }

    handleOnchangeDescription = (event) => {
        this.setState({
            nameBook: event.target.value
        })
    }

    handleEditBook = () => {

    }

    handleDeleteBook = () => {

    }

    render() {
        return (

            <>
                <div className="container mt-3">

                    <div className="container text-center m-auto mt-5 mb-5">
                        <h1>TẤT CẢ BÀI VIẾT</h1>
                    </div>
                    <div className=" container text-center">
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

                    <div className="container text-center m-auto mt-5 mb-5">
                        <h1>THÊM BÀI VIẾT MỚI</h1>
                    </div>

                    <div className=" container row">
                        <div className="col-8">
                            <label>Tiêu đề bài viết</label>
                            <textarea id="w3review" name="w3review"
                                rows="4" cols="50"
                                style={{ border: '1px solid', width: '100%', alignItems: 'center' }}
                                onChange={(event) => this.handleOnchangeDescription(event)}
                                value={this.state.nameBook}
                            >

                            </textarea>
                        </div>

                        <div className="form-group col-4 ">
                            <label htmlFor="inputZip">Hình ảnh bài viết</label>
                            <input type="file"
                                className="form-control" id="inputZip"
                                onChange={(event) => this.handlerUpImg(event)}
                            />
                            <div className="preview-img"
                                style={{
                                    marginTop: "5px",
                                    maxWidth: "350px", height: "90px",
                                    border: "1px solid",
                                    backgroundImage: `url(${this.state.imgAvt})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    cursor: 'pointer'
                                }}
                                onClick={() => this.setState({ isLightBox: true })}
                            >
                            </div>
                        </div>
                    </div>

                    <div className="container mt-3">
                        <label className="mb-4" htmlFor="inputZip">Nội dung bài viết</label>

                        <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={({ html, text }) => this.handleEditorChange({ html, text })} />
                    </div>

                    <div className="container mb-5 mt-4">
                        <button type="submit"
                            className="btn btn-success p-3"
                            onClick={() => this.handleOnchangeSaveMarkdown()}
                        >Lưu thông tin</button>
                    </div>
                </div>

                {this.state.isLightBox && (
                    <Lightbox
                        mainSrc={this.state.imgAvt}
                        onCloseRequest={() => this.setState({ isLightBox: false })}
                    />
                )}
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
