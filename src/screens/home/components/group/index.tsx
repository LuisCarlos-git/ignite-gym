import { GroupsProps } from './types';
import * as Styles from './styles';

export function Group({ name, isActive, ...rest }: GroupsProps) {
  return (
    <Styles.Button isActive={isActive} {...rest} activeOpacity={0.7}>
      <Styles.Text isActive={isActive}>{name}</Styles.Text>
    </Styles.Button>
  );
}
