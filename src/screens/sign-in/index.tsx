import * as Styles from './styles';

import background from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Button, TextField } from '@components';
import { useForm } from 'react-hook-form';

export function SignIn() {
  const { control } = useForm();

  return (
    <Styles.Container>
      <Styles.Image
        source={background}
        alt="logo da academia"
        defaultSource={background}
      />
      <Styles.LogoContainer>
        <Logo />
        <Styles.Text>Treine sua mente e seu corpo</Styles.Text>
      </Styles.LogoContainer>

      <Styles.FormWrapper>
        <Styles.Heading>Acesse sua conta</Styles.Heading>
        <TextField control={control} name="email" placeholder="E-mail" />
        <TextField
          control={control}
          name="password"
          placeholder="Senha"
          keyboardType="visible-password"
        />

        <Button label="Entrar" />
        <Button label="Entrar" variant="outline" />
      </Styles.FormWrapper>
    </Styles.Container>
  );
}
