import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gray900};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: white;
    font-family: ${theme.fonts.heading};
  `}
`;

export const Image = styled.Image`
  width: 100%;
  position: absolute;
  height: 624px;
  top: 0;
`;
