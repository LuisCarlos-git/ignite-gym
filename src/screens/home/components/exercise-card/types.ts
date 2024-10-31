import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

export type ExerciseCardProps = ComponentProps<typeof TouchableOpacity> & {
  uri: string;
  title: string;
  description: string;
};
