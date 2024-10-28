import { TouchableOpacity } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
import styled, { css } from 'styled-components/native';

type VariantProps = {
  variant: 'solid' | 'outline';
};

const buttonVariantMapper = {
  solid: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green700};
  `,
  outline: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.green700};
  `,
};

const labelVariantMapper = {
  solid: (theme: DefaultTheme) => css`
    color: white;
  `,
  outline: (theme: DefaultTheme) => css`
    color: ${theme.colors.green700};
  `,
};

export const Button = styled(TouchableOpacity)<VariantProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    align-items: center;
    margin-top: ${theme.space[14]};
    border-radius: 6px;

    ${buttonVariantMapper[variant](theme)}
  `}
`;

export const Label = styled.Text<VariantProps>`
  ${({ theme, variant }) => css`
    padding: 16px;
    border-radius: 6px;
    color: white;

    font-family: ${theme.fonts.heading};
    ${labelVariantMapper[variant](theme)}
  `}
`;
