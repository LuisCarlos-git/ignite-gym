import styled, { css } from 'styled-components/native';

type TextFiledStyleProps = { isFocused: boolean; hasError: boolean };

export const TextFieldWrapper = styled.View`
  align-items: start;
  width: 100%;
`;

export const TextField = styled.TextInput<TextFiledStyleProps>`
  ${({ theme, isFocused, hasError }) => css`
    background-color: ${theme.colors.gray700};
    width: 100%;
    border-radius: 6px;
    padding: 16px;
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.md};
    border: 1px solid transparent;

    ${isFocused &&
    css`
      border-color: ${hasError ? theme.colors.red500 : theme.colors.green700};
    `};
  `}
`;

export const TextFieldErrorMessage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.red500};
    margin-top: 4px;
  `}
`;
