import * as Styles from './styles';
import { CardProps } from './type';

export function Card({ children }: CardProps) {
  return <Styles.Container>{children}</Styles.Container>;
}
