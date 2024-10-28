import { TextInput } from 'react-native';
import { TextFieldProps } from './types';
import * as Styles from './styles';
import { Controller, get, useFormContext } from 'react-hook-form';
import { theme } from '@styles/theme';
import { useState } from 'react';

export function TextField({ name, control, ...rest }: TextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Styles.TextFieldWrapper>
          <Styles.TextField
            hasError={!!fieldState.error?.message}
            isFocused={isFocused}
            onBlur={() => {
              field.onBlur();
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            onChangeText={field.onChange}
            value={field.value}
            placeholderTextColor={theme.colors.gray300}
            {...rest}
          />
          {fieldState.error?.message && (
            <Styles.TextFieldErrorMessage>
              {fieldState.error?.message}
            </Styles.TextFieldErrorMessage>
          )}
        </Styles.TextFieldWrapper>
      )}
    />
  );
}
