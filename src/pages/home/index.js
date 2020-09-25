import React from 'react';
import {withRouter} from 'react-router-dom';

import GlobalStyle from '../../styles/global';
import { Container } from './styles';

function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <GlobalStyle />
        </Container>
    );
};

export default withRouter(Home);