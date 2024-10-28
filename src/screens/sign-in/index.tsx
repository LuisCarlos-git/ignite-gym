import * as Styles from './styles';

import background from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Button, TextField } from '@components';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';

export function SignIn() {
  const { control } = useForm();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
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
          <TextField
            keyboardType="email-address"
            autoCapitalize="none"
            control={control}
            name="email"
            placeholder="E-mail"
          />
          <TextField
            control={control}
            name="password"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Senha"
          />

          <Styles.SubmitButtonWrapper>
            <Button label="Entrar" />
          </Styles.SubmitButtonWrapper>
          <Styles.FooterWrapper>
            <Styles.Text>Ainda não tem acesso?</Styles.Text>
            <Button label="Criar conta" variant="outline" />
          </Styles.FooterWrapper>
        </Styles.FormWrapper>
      </Styles.Container>
    </ScrollView>
  );
}
