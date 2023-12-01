import React, {useState} from 'react';
import RegisterForm from '../../components/RegisterForm';
import {Container, ContentContainer, BackgroundImage, Logo} from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/rock-stack-param-list';
import Toast from 'react-native-toast-message';
import {RegisterButton} from '../../components/RegisterButton';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cadastro'
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Register: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState<string>('');
  const [numSeguroSaude, setNumSeguroSaude] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const isPasswordValid = (password: string) => {
    return password.length >= 6 && /[A-Z]/.test(password);
  };

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !cpf) {
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

    if (cpf.length !== 11) {
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
    try {
      const registerData = {
        historico: 'Histórico do paciente',
        numSeguroSaude: numSeguroSaude,
        pessoa: {
          nome: name,
          email: email,
          usuario: 'usuário_paciente',
          cpf: cpf,
          senha: password,
          softDelete: false,
        },
      };
      const response = await fetch('http://172.19.0.1:8080/paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Cadastro realizado com sucesso!',
        });
        navigation.navigate('Login');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Não foi possível realizar o cadastro.',
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Erro de Conexão',
        text2: 'Não foi possível conectar ao servidor.',
      });
    }
  };
  return (
    <Container>
      <BackgroundImage
        source={require('../../assets/images/white-background.png')}>
        <ContentContainer>
          <Logo source={require('../../assets/images/logo-psycheck.png')} />
          <RegisterForm
            name={name}
            setName={setName}
            numSeguroSaude={numSeguroSaude}
            setNumSeguroSaude={setNumSeguroSaude}
            email={email}
            setEmail={setEmail}
            cpf={cpf}
            setCpf={setCpf}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onRegisterPress={handleRegister}
          />
          <RegisterButton onPress={handleRegister} text="Cadastrar" />
        </ContentContainer>
      </BackgroundImage>
    </Container>
  );
};

export default Register;
