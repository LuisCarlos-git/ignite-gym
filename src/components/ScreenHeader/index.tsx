import * as Styles from './styles';
import { ScreenHeaderProps } from './types';

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Styles.Container>
      <Styles.Heading>{title}</Styles.Heading>
    </Styles.Container>
  );
}
