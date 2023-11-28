import React, {useState} from 'react';
import RegisterForm from '../../components/RegisterForm';
import {Container, ContentContainer, BackgroundImage, Logo} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/rock-stack-param-list';
import Toast from 'react-native-toast-message';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cadastro'
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Register: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [cnpj, setCnpj] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const isPasswordValid = (password: string) => {
    // Verifica se a senha tem pelo menos 6 caracteres e contém um caractere maiúsculo
    return password.length >= 6 && /[A-Z]/.test(password);
  };

  const handleRegister = () => {
    // Validações
    if (!email || !password || !confirmPassword || !cnpj) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Todos os campos são obrigatórios.',
      });
      return;
    }

    if (!email.includes('@')) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'O email deve conter @.',
      });
      return;
    }

    if (cnpj.length !== 14) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'O CNPJ deve ter 14 dígitos.',
      });
      return;
    }

    if (
      password !== confirmPassword &&
      (!isPasswordValid(password) || !isPasswordValid(confirmPassword))
    ) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2:
          'A senha e a confirmação de senha devem ser iguais e atender aos critérios de senha.',
      });
      return;
    }
  };
  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/white-background.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/logo-psycheck.png')} />
          <RegisterForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            cnpj={cnpj}
            setCnpj={setCnpj}
            onRegisterPress={handleRegister}
          />
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Register;
