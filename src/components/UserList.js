import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Header } from 'semantic-ui-react';

import UserInfo from './UserInfo';

const UserList = props => {
    const { users } = props;
    // const userListItems = users.map((user) => <UserInfo key={user.id} name={user.name} address={user.address} />);
    const userListItems = users.map((user) => {
        return {
            title: user.name,
            content: 'Street: ' + user.address.street + ', Suite: ' + user.address.suite+ ', City: ' + user.address.city + ', Zip: ' + user.address.zipcode
        };
    });
    console.log(userListItems);
    return <div>
            <Header as="h1" style={{ marginTop: '4rem', textAlign: 'center' }}>
                User List
            </Header>
            <Accordion styled fluid panels={userListItems} />
        </div>;
};

UserList.propTypes = {
    
};

export default UserList;