import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const AnswerInput = styled.TextInput`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 88%;
  height: 56px;
  background-color: #FF85D0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
