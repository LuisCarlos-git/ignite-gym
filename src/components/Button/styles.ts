import { TouchableOpacity } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
import styled, { css } from 'styled-components/native';

type VariantProps = {
  variant: 'solid' | 'outline';
};

type ButtonStyleProps = {
  isLoading: boolean;
} & VariantProps;

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

export const Button = styled(TouchableOpacity)<ButtonStyleProps>`
  ${({ theme, variant, isLoading }) => css`
    width: 100%;
    justify-content: center;
    border-radius: 6px;
    flex-direction: row;

    opacity: ${isLoading ? 0.5 : 1};

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
