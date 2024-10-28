import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding-top: ${theme.space[33]};
    padding-bottom: 24px;
    background-color: ${theme.colors.gray900};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.sm};
  `}
`;

export const Image = styled.Image`
  width: 100%;
  position: absolute;
  height: 624px;
  top: 0;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.lg};
  `}
`;

export const FormWrapper = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.space[14] * 2};
    align-items: center;
    gap: 16px;
    flex: 1;

    ${theme.utils.px(24)}
  `}
`;

export const SubmitButtonWrapper = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.space[14]};
    width: 100%;
  `}
`;

export const FooterWrapper = styled.View`
  ${({ theme }) => css`
    gap: 16px;
    align-items: center;
    padding-top: 24px;
    width: 100%;
  `}
`;
