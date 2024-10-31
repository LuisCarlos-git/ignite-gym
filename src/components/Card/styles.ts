import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.gray500};
    border-radius: ${theme.radii.lg}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${theme.utils.px(theme.space[2])}
    ${theme.utils.py(theme.space[2])}
  `}
`;
