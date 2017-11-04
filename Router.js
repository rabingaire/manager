import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';

import LoginForm from './src/components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Login" initial />
            </Stack>
        </Router>
    )
};

export default RouterComponent;
