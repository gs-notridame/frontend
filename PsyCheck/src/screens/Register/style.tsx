import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  resizeMode: cover;
`;

export const Logo = styled.Image`
  width: 220px;
  height: 220px;
  margin-top: 50px;
  margin-bottom: 45px;
`;

export const ForgotPasswordText = styled.Text`
  color: #ff85d0;
  margin-top: 20px;
  text-decoration: underline;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  background-color: #ff85d0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
