import * as Styles from './styles';

import background from '@assets/background.png';

export function SignIn() {
  return (
    <Styles.Container>
      <Styles.Image source={background} />
      <Styles.Text>SignIn</Styles.Text>
    </Styles.Container>
  );
}
