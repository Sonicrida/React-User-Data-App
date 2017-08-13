import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from '../components/UserList';
import UserListHeader from '../components/UserListHeader';
import UserListFilter from '../components/UserListFilter';

class UserListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {userFilter: ''};

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(event) {
        this.setState({userFilter: event.target.value.toLowerCase()})
        
    }

    render() {
        console.log(this.state);
        const { userFilter } = this.state;
        const { users } = this.props;

        const filteredUsers = users.filter(user => {
            return !(user.name.toLowerCase().indexOf(userFilter) === -1) || !(user.username.toLowerCase().indexOf(userFilter) === -1) || !(user.email.toLowerCase().indexOf(userFilter) === -1) || !(user.address.street.toLowerCase().indexOf(userFilter) === -1) || !(user.phone.indexOf(userFilter) === -1) || !(user.address.zipcode.indexOf(userFilter) === -1);
        });

        return (
            <div>
                <UserListHeader />
                <UserListFilter handleFilter={this.handleFilter}/>
                <UserList users={filteredUsers}/>
            </div>
        );
    }
}

UserListContainer.propTypes = {
    users: PropTypes.array
};

export default UserListContainer;