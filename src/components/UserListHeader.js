import React from 'react';
import { Header } from 'semantic-ui-react';
import Styled from 'styled-components';

const StyledHeader = Styled.div`
    margin-top: 4rem;
    text-align: center;
`;

const UserListHeader = () => {
    return (
        <StyledHeader>
            <Header as="h1">User List</Header>
        </StyledHeader>
    );
};

export default UserListHeader;
