import { Avatar } from '@components';
import * as Styles from './styles';
import { LogOut } from 'lucide-react-native';
import { theme } from '@styles/theme';

export function Header() {
  return (
    <Styles.Header>
      <Avatar />
      <Styles.Info>
        <Styles.Text>olá,</Styles.Text>
        <Styles.Heading>Luis Carlos</Styles.Heading>
      </Styles.Info>
      <LogOut size={24} color={theme.colors.gray100} />
    </Styles.Header>
  );
}
