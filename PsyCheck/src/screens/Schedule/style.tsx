import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const FormInput = styled.TextInput`
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 15px;
`;

export const FormButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: #ff85d0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const FormButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const FormLabel = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: black;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-top: 16px;
  margin-left: 130px;
`;
