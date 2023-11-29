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

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-top: 35px;
  color: black;
`;

export const AnswerInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-top: 5px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #ededed;
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