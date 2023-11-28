import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {Container, QuestionText, AnswerInput} from './style';

// Exemplo de perguntas
const exampleQuestions = [
  {id: '1', text: 'Qual é o seu filme favorito?'},
  {id: '2', text: 'Qual é o seu livro favorito?'},
  {id: '3', text: 'Qual é o seu hobby?'},
];

const QuestionnairePage = () => {
  const [questions] = useState(exampleQuestions);
  const [answers, setAnswers] = useState({});

  const submitAnswers = () => {
    // Implementação do envio
    console.log(answers);
  };

  const handleInputChange = (text, questionId) => {
    setAnswers({...answers, [questionId]: text});
  };

  return (
    <Container>
      {questions.map(question => (
        <View key={question.id}>
          <QuestionText>{question.text}</QuestionText>
          <AnswerInput
            onChangeText={text => handleInputChange(text, question.id)}
            value={answers[question.id] || ''}
          />
        </View>
      ))}
      <Button title="Enviar Respostas" onPress={submitAnswers} />
    </Container>
  );
};

export default QuestionnairePage;
