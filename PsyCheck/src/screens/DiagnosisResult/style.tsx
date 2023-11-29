import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const WelcomeText = styled.Text`
  color: #000000;
  margin-top: 40px;
  margin-left: 18px;
  font-size: 25px;
  font-weight: bold;
`;

export const WelcomeName = styled.Text`
  color: #ff85d0;
  font-size: 25px;
  font-weight: bold;
`;

export const Diagnosis = styled.Image`
  width: 100%;
  height: 100%;
  border: solid 1px;
  border-radius: 10px;
`;

export const DiagnosisContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;