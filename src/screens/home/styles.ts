import { Exercise } from '@screens';
import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    ${theme.utils.px(theme.space[5])}
  `}
`;

export const ExerciseListContent = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.space[5]};
    gap: ${theme.space[5]};
  `}
`;
