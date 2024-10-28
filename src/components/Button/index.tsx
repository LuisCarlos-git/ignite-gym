import { ActivityIndicator } from 'react-native';
import * as Styles from './styles';
import { ButtonProps } from './types';
import { theme } from '@styles/theme';

export function Button({
  label,
  variant = 'solid',
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <Styles.Button
      {...rest}
      activeOpacity={0.7}
      variant={variant}
      disabled={isLoading}
      isLoading={isLoading}
    >
      {isLoading && (
        <ActivityIndicator
          color={variant === 'solid' ? 'white' : theme.colors.green700}
        />
      )}
      <Styles.Label variant={variant}>{label}</Styles.Label>
    </Styles.Button>
  );
}
