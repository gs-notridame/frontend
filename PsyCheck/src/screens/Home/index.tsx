import React from 'react';
import {RootStackParamList} from '../../types/rock-stack-param-list';
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Logo,
  SubText,
  WelcomeText,
} from './style';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Logo source={require('../../assets/images/logo-psycheck.png')} />
      <WelcomeText>Bem vindo!</WelcomeText>
      <SubText>Faça sua triagem mental gratuitamente.</SubText>
      <ButtonContainer>
        <Button
          onPress={() => {
            navigation.navigate('Quiz');
          }}>
          <ButtonText>Triagem</ButtonText>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <ButtonText>Login</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
