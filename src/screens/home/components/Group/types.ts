import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

export type GroupsProps = ComponentProps<typeof TouchableOpacity> & {
  name: string;
  isActive: boolean;
};
