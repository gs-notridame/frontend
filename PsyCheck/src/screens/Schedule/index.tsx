import React, {useState} from 'react';
import {TouchableOpacity, ScrollView, Alert} from 'react-native';
import {
  Container,
  FormInput,
  FormButton,
  FormButtonText,
  FormLabel,
  Title,
} from './style';

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    professional: '',
    cell: '',
    insurance: '',
    notes: '',
  });

  const [isProfessionalPickerVisible, setProfessionalPickerVisible] =
    useState(false);

  const handleInputChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    // Lógica para submeter o formulário
    console.log(formData);
  };

  // Mock de dados, substitua com seus dados dinâmicos
  const professionals = ['Profissional A', 'Profissional B', 'Profissional C'];

  const handleSchedule = () => {
    Alert.alert('Agendado!', 'Sua consulta foi agendada com sucesso!');
  };

  return (
    <ScrollView>
      <Title>Agendamento</Title>
      <Container>
        <FormLabel>Data</FormLabel>
        <FormInput
          placeholder="DD/MM/AAAA"
          value={formData.date}
          onChangeText={text => handleInputChange('date', text)}
        />

        <FormLabel>Horário</FormLabel>
        <FormInput
          placeholder="HH:MM"
          value={formData.time}
          onChangeText={text => handleInputChange('time', text)}
        />

        <FormLabel>Profissional</FormLabel>
        <TouchableOpacity onPress={() => setProfessionalPickerVisible(true)}>
          <FormInput
            placeholder="Selecione o profissional"
            value={formData.professional}
            editable={false}
          />
        </TouchableOpacity>

        {/* Aqui você pode implementar seu Modal ou Picker para seleção do profissional */}

        <FormLabel>Celular</FormLabel>
        <FormInput
          placeholder="(XX) XXXXX-XXXX"
          value={formData.cell}
          onChangeText={text => handleInputChange('cell', text)}
          keyboardType="phone-pad"
        />

        <FormLabel>Convênio</FormLabel>
        <FormInput
          placeholder="Nome do convênio"
          value={formData.insurance}
          onChangeText={text => handleInputChange('insurance', text)}
        />

        <FormLabel>Observações</FormLabel>
        <FormInput
          placeholder="Notas adicionais"
          value={formData.notes}
          onChangeText={text => handleInputChange('notes', text)}
          multiline
        />

        <FormButton onPress={handleSchedule}>
          <FormButtonText>Agendar</FormButtonText>
        </FormButton>
      </Container>
    </ScrollView>
  );
};

export default ScheduleForm;
