import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserManageRedux from '../containers/System/Admin/UserManageRedux';
import EditerDoctor from '../containers/System/Admin/EditerDoctor';
import EditerHandBook from '../containers/System/Admin/EditerHandBook';
import Header from '../containers/Header/Header';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {isLoggedIn && <Header />}

                < div className="system-container" >
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/CRUD-user-redux" component={UserManageRedux} />
                            <Route path="/system/editer-content-doctor" component={EditerDoctor} />
                            <Route path="/system/editer-content-handbook" component={EditerHandBook} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div >
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
