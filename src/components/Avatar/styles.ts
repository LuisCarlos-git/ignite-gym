import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  ${({ theme }) => css`
    border-radius: ${theme.radii.full}px;
    border-width: 2;
    border-color: ${theme.colors.gray400};
    background-color: ${theme.colors.gray500};
  `}
`;
