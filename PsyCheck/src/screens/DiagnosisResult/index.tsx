import React, {useState} from 'react';
import { DiagnosisContainer, Diagnosis, Container, WelcomeText, WelcomeName } from './style';

const DiagnosisResult: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <WelcomeText>
        Diagnóstido do <WelcomeName>Victor</WelcomeName>
      </WelcomeText>
      <DiagnosisContainer>
        <Diagnosis source={require('../../assets/images/diagnosis-psycheck.jpg')} />
      </DiagnosisContainer>
    </Container>
  );
};

export default DiagnosisResult;
