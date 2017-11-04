import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from './../actions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@gmail.com" 
                        onChangeText={this.onEmailChange}
                        value={this.props.email} />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry 
                        label="Password" 
                        placeholder="password"
                        onChangeText={this.onPasswordChange}
                        value={this.props.password} /> 
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    { this.props.error }
                </Text>

                <CardSection>
                    { this.props.loading? (
                        <Spinner size="large" />
                    ):(
                        <Button
                            onPress={this.onButtonPress} >
                            Login
                        </Button>
                    )}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    
    return { 
        email,
        password,
        error,
        loading, 
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);