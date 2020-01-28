import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 100%;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    background-color: #333333;
`;

const InputField = Styled.TextInput`
    flex: 1;
    color: #FFFFFF;
`;

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText,
}) => {

    return (
        <Container style={style}>
            <InputField
                selectionColor="#FFFFFF"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType ? keyboardType : 'default'}
                autoCapitalize="none"
                autoCorrect={false}
                allowFontScaling={false}
                placeholderTextColor="#FFFFFF"
                placeholder={placeholder}
                clearButtonMode={clearMode ? 'white-editing' : 'never'}
                onChangeText={onChangeText}
            />
        </Container>
    );
};

export default Input;