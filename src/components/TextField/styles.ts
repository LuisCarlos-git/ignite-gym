import styled, { css } from 'styled-components/native';

export const TextFieldWrapper = styled.View`
  align-items: start;
  width: 100%;
`;

export const TextField = styled.TextInput`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray700};
    width: 100%;
    border-radius: 6px;
    padding: 16px;
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.md};
  `}
`;

export const TextFieldErrorMessage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.red500};
    margin-top: 4px;
  `}
`;
