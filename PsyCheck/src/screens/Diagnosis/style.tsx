import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-top: 16px;
  margin-left: 120px;
`;

export const CheckImage = styled.Image`
  width: 300px;
  height: 300px;
  margin-top: 50px;
  margin-left: 45px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: #ff85d0;
  border-radius: 12px;
  justify-content: center;
  margin-top: 35px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const WelcomeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-top: 50px;
  text-align: center;
  color: #000000;
`;

export const SubText = styled.Text`
  font-size: 25px;
  color: #555;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;
`;
