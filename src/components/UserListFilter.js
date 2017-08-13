import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const UserListFilter = props => {
    return <Input onChange={props.handleFilter} placeholder="Search for a User...." />;
};

UserListFilter.propTypes = {
    handleFilter: PropTypes.func
};

export default UserListFilter;
