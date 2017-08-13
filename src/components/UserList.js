import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'semantic-ui-react';

const UserList = props => {
    const { users } = props;
    // const userListItems = users.map((user) => <UserInfo key={user.id} name={user.name} address={user.address} />);

    // Process user data to send to Accordion "panels" prop
    const userListItems = users.map((user) => {
        return {
            title: user.name,
            content: 'Street: ' + user.address.street + ', Suite: ' + user.address.suite+ ', City: ' + user.address.city + ', Zip: ' + user.address.zipcode
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