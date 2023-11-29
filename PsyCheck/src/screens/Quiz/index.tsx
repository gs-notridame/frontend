import React, {useState} from 'react';
import {RootStackParamList} from '../../types/rock-stack-param-list';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Container,
  QuestionText,
  AnswerInput,
  Title,
  Button,
  ButtonText,
} from './style';

type QuizNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: QuizNavigationProp;
};

const exampleQuestions = [
  {id: '1', text: 'Como você está se sentindo ultimamente?'},
  {
    id: '2',
    text: 'Descreva em palavras chaves sentimentos que te definam recentemente',
  },
  {id: '3', text: 'Você possui traumas mal resolvidos?'},
  {id: '4', text: 'Você já realizou algum tipo de tratamento?'},
  {id: '5', text: 'Por qual motivo você nos procurou?'},
];

const Quiz: React.FC<Props> = ({navigation}) => {
  const [questions] = useState(exampleQuestions);
  const [answers, setAnswers] = useState({});

  const submitAnswers = () => {
    console.log(answers);
  };

  const handleInputChange = (text: any, questionId: any) => {
    setAnswers({...answers, [questionId]: text});
  };

  return (
    <Container>
      <Title>Questionário</Title>
      {questions.map(question => (
        <View key={question.id}>
          <QuestionText>{question.text}</QuestionText>
          <AnswerInput
            onChangeText={text => handleInputChange(text, question.id)}
            value={answers[question.id] || ''}
          />
        </View>
      ))}
      <Button
        onPress={() => {
          navigation.navigate('Diagnosis');
        }}>
        <ButtonText>Enviar Respostas</ButtonText>
      </Button>
    </Container>
  );
};

export default Quiz;
