import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { userEndpoint } from './constants/endpoints';
import { fetchUserData } from './actions';

class App extends Component {
    componentWillMount() {
        this.props.dispatch(fetchUserData(userEndpoint));
    }

    render() {
      const {isFetching} = this.props;
        return (
            <div className="App">
                { isFetching ? (
                  <div>Loading</div>
                ) : (
                  <div>Content</div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userData: state.userData,
    isFetching: state.userData.isFetching
});

export default connect(mapStateToProps)(App);
