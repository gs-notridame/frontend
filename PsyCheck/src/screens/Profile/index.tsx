import React, {useState, useEffect} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {
  Container,
  UserProfileImage,
  InputField,
  InputRow,
  EditIcon,
  Title,
} from './style';

import {LogoutButton} from '../../components/LogoutButton';
import {DeleteAccountButton} from '../../components/DeleteAccountButton';
import {SaveChangesButton} from '../../components/SaveChangesButton';

const defaultUserImage = require('../../assets/images/default-profile-image.png');
const editIcon = require('../../assets/icons/edit-active-icon.png');

const UserPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const findUserData = async () => {
      try {
        const response = await fetch('http://172.19.0.1:8080/paciente/6');
        const json = await response.json();
        setName(json.pessoa.nome);
        setEmail(json.pessoa.email);
        setCpf(json.pessoa.cpf);
        setPassword(json.pessoa.senha);
      } catch (error) {
        console.log(error);
      }
    };

    findUserData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      const updatedData = {
        codPaciente: 6,
        historico: 'Histórico do paciente',
        numSeguroSaude: '1234567890',
        pessoa: {
          nome: name,
          email: email,
          softDelete: false,
          usuario: 'usuario_paciente',
          cpf: cpf,
          senha: password,
          dataNasc: '1990-01-01',
          genero: {
            genero: 'MASCULINO',
          },
        },
      };
      const response = await fetch('http://172.19.0.1:8080/paciente', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        Alert.alert('Sucesso', 'Dados atualizados com sucesso.');
      } else {
        Alert.alert('Erro', 'Não foi possível atualizar os dados.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Erro de Conexão',
        'Não foi possível conectar ao servidor para atualizar os dados.',
      );
    }
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Você saiu da sua conta.');
    navigation.navigate('Home');
  };

  const handleEdit = (field: string) => {
    Alert.alert('Editar', `Editar ${field}`);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Excluir Conta',
      'Tem certeza que deseja desativar sua conta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: async () => {
            try {
              const response = await fetch(
                'http://172.19.0.1:8080/paciente/1',
                {
                  method: 'DELETE',
                },
              );

              if (response.ok) {
                Alert.alert(
                  'Conta Desativada',
                  'Sua conta foi desativada com sucesso.',
                );
                navigation.navigate('Home');
              } else {
                Alert.alert('Erro', 'Não foi possível desativar a conta.');
              }
            } catch (error) {
              console.error(error);
              Alert.alert(
                'Erro de Conexão',
                'Não foi possível conectar ao servidor.',
              );
            }
          },
        },
      ],
    );
  };

  return (
    <Container>
      <UserProfileImage source={defaultUserImage} />

      <View>
        <Title>Nome</Title>
        <InputRow>
          <InputField
            placeholder="Nome"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TouchableOpacity onPress={() => handleEdit('nome')}>
            <EditIcon source={editIcon} />
          </TouchableOpacity>
        </InputRow>
      </View>

      <View>
        <Title>E-mail</Title>
        <InputRow>
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TouchableOpacity onPress={() => handleEdit('email')}>
            <EditIcon source={editIcon} />
          </TouchableOpacity>
        </InputRow>
      </View>

      <View>
        <Title>CPF</Title>
        <InputRow>
          <InputField
            placeholder="CPF"
            value={cpf}
            onChangeText={text => setCpf(text)}
          />
          <TouchableOpacity onPress={() => handleEdit('telefone')}>
            <EditIcon source={editIcon} />
          </TouchableOpacity>
        </InputRow>
      </View>

      <View>
        <Title>Senha</Title>
        <InputRow>
          <InputField
            secureTextEntry={true}
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={() => handleEdit('endereço')}>
            <EditIcon source={editIcon} />
          </TouchableOpacity>
        </InputRow>
      </View>
      <LogoutButton onPress={handleLogout} text="Logout" />
      <SaveChangesButton onPress={handleSaveChanges} text="Salvar" />
      <DeleteAccountButton
        onPress={handleDeleteAccount}
        text="Desativar-Conta"
      />
    </Container>
  );
};

export default UserPage;
