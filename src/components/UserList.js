import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'semantic-ui-react';
import UserInfo from './UserInfo';

const UserList = props => {
    const { users } = props;

    // Process user data to send to Accordion "panels" prop
    const userListItems = users.map((user, i) => {
        return {
            key: i.toString(),
            title: user.name,
            content: <UserInfo address={user.address} email={user.email} />
        };
    });

    return (
        <div>
            <Accordion styled fluid panels={userListItems} />
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array
};

export default UserList;
