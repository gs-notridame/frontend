import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: 22px;
  z-index: 1;
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

export const Categories = styled.Text`
  color: #000000;
  margin-top: 155px;
  margin-left: 12px;
  font-size: 25px;
  font-weight: bold;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleImage: {
    width: '100%',
    height: 175,
    resizeMode: 'cover',
    borderRadius: 8,
    shadowColor: 'black',
    marginTop: 25,
  },
});
