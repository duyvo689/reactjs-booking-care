import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManagerShedule extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {

        return (

            <div>
                <h1>hi doctor manager</h1>
                <h1>hi doctor manager</h1>
                <h1>hi doctor manager</h1>
                <h1>hi doctor manager</h1>
                <div>
                    <h1>hi doctor manager</h1>
                    <h1>hi doctor manager</h1>
                    <h1>hi doctor manager</h1>
                    <h1>hi doctor manager</h1>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerShedule);
