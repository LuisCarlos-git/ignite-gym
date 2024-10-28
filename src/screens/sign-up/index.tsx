import * as Styles from './styles';

import background from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Button, TextField } from '@components';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { PublicNavigatorRoutesProps } from 'src/routes/PublicRoutes';

export function SignUp() {
  const { control } = useForm();
  const navigator = useNavigation<PublicNavigatorRoutesProps>();

  const handleNavigateToSignIn = useCallback(() => {
    navigator.navigate('sign-in');
  }, []);

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
          <Styles.Heading>Crie sua conta</Styles.Heading>
          <TextField control={control} name="name" placeholder="Nome" />
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
            <Button label="Criar e acessar" />
          </Styles.SubmitButtonWrapper>
          <Styles.FooterWrapper>
            <Button
              onPress={handleNavigateToSignIn}
              label="Voltar para o login"
              variant="outline"
            />
          </Styles.FooterWrapper>
        </Styles.FormWrapper>
      </Styles.Container>
    </ScrollView>
  );
}
