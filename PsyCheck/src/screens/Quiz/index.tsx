import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  QuestionText,
  AnswerInput,
  Title,
  Button,
  ButtonText,
} from './style';

const exampleQuestions = [
  {id: '1', text: 'Como você está se sentindo ultimamente?'},
  {
    id: '2',
    text: 'Descreva em palavras chaves sentimentos que te definam recentemente',
  },
  {id: '3', text: 'Por qual motivo você nos procurou?'},
];

const Quiz = () => {
  const [questions] = useState(exampleQuestions);
  const [answers, setAnswers] = useState({});

  const submitAnswers = () => {
    console.log(answers);
  };

  const handleInputChange = (text, questionId) => {
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
      <Button onPress={submitAnswers}>
        <ButtonText>Enviar Respostas</ButtonText>
      </Button>
    </Container>
  );
};

export default Quiz;
