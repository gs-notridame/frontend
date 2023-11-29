import React from 'react';
import {RootStackParamList} from '../../types/rock-stack-param-list';
import {
  Container,
  Title,
  Button,
  ButtonText,
  WelcomeText,
  SubText,
  CheckImage,
} from './style';
import {StackNavigationProp} from '@react-navigation/stack';

type DiagnosisNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Diagnosis'
>;

type Props = {
  navigation: DiagnosisNavigationProp;
};

const Diagnosis: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Title>Diagnóstico</Title>
      <CheckImage source={require('../../assets/images/diagnosis-check.png')} />
      <WelcomeText>Você está quase lá!</WelcomeText>
      <SubText>
        Cadastre-se para receber seu diagnóstico personalizado na hora!
      </SubText>
      <Button
        onPress={() => {
          navigation.navigate('Cadastro');
        }}>
        <ButtonText>Cadastro</ButtonText>
      </Button>
    </Container>
  );
};

export default Diagnosis;
