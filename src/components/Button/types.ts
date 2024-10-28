import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';

export type ButtonProps = {
  variant?: 'solid' | 'outline';
  label: string;
  isLoading?: boolean;
} & Omit<ComponentProps<typeof TouchableOpacity>, 'children'>;
