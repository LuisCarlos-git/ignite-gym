import { ActivityIndicator } from 'react-native';
import * as Styles from './styles';

export function Loading() {
  return (
    <Styles.Container>
      <ActivityIndicator color="#fff" size="large" />
    </Styles.Container>
  );
}
