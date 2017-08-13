import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { userEndpoint } from '../constants/endpoints';
import { fetchUserData } from '../actions';
import UserList from './UserList';
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react';

class App extends Component {
    componentWillMount() {
        this.props.dispatch(fetchUserData(userEndpoint));
    }

    render() {
        const { isFetching, users } = this.props;

        if (isFetching) {
            return (
                <Container>
                    <Dimmer active inverted>
                        <Loader inverted>Loading Users</Loader>
                    </Dimmer>
                </Container>
            );
        }

        return (
            <Container text>
                <UserList users={users} />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userData.users.data,
    isFetching: state.userData.isFetching
});

export default connect(mapStateToProps)(App);
