import { ComponentProps } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { TextInput } from 'react-native';

export type TextFieldProps = ComponentProps<typeof TextInput> & {
  name: string;
  control: Control<FieldValues, any>;
};
