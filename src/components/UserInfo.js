import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'semantic-ui-react';

const UserInfo = props => {
    return (
        <div>
            <Accordion.Title><h3>{props.name}</h3></Accordion.Title>
            <Accordion.Content>
                Street: {props.address.street}, Suite: {props.address.suite}, City: {props.address.city}, Zip: {props.address.zipcode}
            </Accordion.Content>
        </div>
    );
};

UserInfo.propTypes = {
    
};

export default UserInfo;