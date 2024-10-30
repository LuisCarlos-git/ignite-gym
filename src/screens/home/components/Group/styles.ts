import styled, { css } from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    min-width: ${theme.space[24]};
    height: ${theme.space[10]};
    background-color: ${theme.colors.gray600};
    border-radius: ${theme.radii.md}px;
    justify-content: center;
    align-items: center;
    border-color: ${isActive ? theme.colors.green500 : 'transparent'};
    border-width: 1px;
  `}
`;

export const Text = styled.Text<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.green500 : theme.colors.gray200};
    font-size: ${theme.fontSizes.xs};
    font-family: ${theme.fonts.heading};
  `}
`;
