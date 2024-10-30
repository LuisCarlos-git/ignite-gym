import styled, { css } from 'styled-components/native';

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-family: ${theme.fonts.body};
    color: ${theme.colors.gray100};
  `}
`;

export const Heading = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.gray100};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.gray600};
    flex-direction: row;
    align-items: center;
    padding-top: ${theme.space[16]};
    padding-bottom: ${theme.space[5]};

    ${theme.utils.px(theme.space[8])}
  `}
`;

export const Info = styled.View`
  ${({ theme }) => css`
    padding-left: ${theme.space[4]};
    flex: 1;
  `}
`;
