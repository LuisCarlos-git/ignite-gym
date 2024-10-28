import { ActivityIndicator } from 'react-native';
import * as Styles from './styles';
import { ButtonProps } from './types';

export function Button({
  label,
  variant = 'solid',
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <Styles.Button {...rest} activeOpacity={0.7} variant={variant}>
      {isLoading && <ActivityIndicator />}
      <Styles.Label variant={variant}>{label}</Styles.Label>
    </Styles.Button>
  );
}
