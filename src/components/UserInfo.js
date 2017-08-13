import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import md5 from 'blueimp-md5';

const UserInfo = props => {
    const { email, address } = props;
    const emailHash = md5(email.toLowerCase());
    const gravatar = 'https://www.gravatar.com/avatar/' + emailHash;
    return (
        <div>
            <img src={gravatar} /> <br />
            <Icon name="location arrow" />Street: {address.street}, Suite: {address.suite}, City: {address.city}, Zip: {address.zipcode}
        </div>
    );
};

UserInfo.propTypes = {
    email: PropTypes.string,
    address: PropTypes.object
};

export default UserInfo;
