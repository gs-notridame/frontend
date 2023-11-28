import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 300px;
  margin-top: 50px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 180px;
`;

export const WelcomeText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 50px;
  text-align: center;
  color: #000000;
`;

export const SubText = styled.Text`
  font-size: 20px;
  color: #555;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 60px;
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
