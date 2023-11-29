import React, {useState} from 'react';
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

const defaultUserImage = require('../../assets/images/default-profile-image.png');
const editIcon = require('../../assets/icons/edit-active-icon.png');

const UserPage = ({navigation}) => {
  const [name, setName] = useState('PsyCheck LTDA');
  const [email, setEmail] = useState('PsyCheck@orçamentos.com');
  const [phone, setPhone] = useState('(11) 3385-8010');
  const [address, setAddress] = useState(
    'Av. Paulista, 1106 - 7º andar - Bela Vista',
  );

  const handleLogout = () => {
    Alert.alert('Logout', 'Você saiu da sua conta.');
    navigation.navigate('Home');
  };

  const handleDeleteAccount = () => {
    Alert.alert('Excluir', 'Você excluiu sua conta.');
    navigation.navigate('Home');
  };

  // Função para lidar com a edição do campo
  const handleEdit = (field: string) => {
    Alert.alert('Editar', `Editar ${field}`);
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
        <Title>Telefone</Title>
        <InputRow>
          <InputField
            placeholder="Telefone"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <TouchableOpacity onPress={() => handleEdit('telefone')}>
            <EditIcon source={editIcon} />
          </TouchableOpacity>
        </InputRow>
      </View>

      <View>
        <Title>Endereço</Title>
        <InputRow>
          <InputField
            placeholder="Endereço"
            value={address}
            onChangeText={text => setAddress(text)}
          />
          <TouchableOpacity onPress={() => handleEdit('endereço')}>
            <EditIcon source={editIcon} />
          </TouchableOpacity>
        </InputRow>
      </View>
      <LogoutButton onPress={handleLogout} text="Logout" />
      <DeleteAccountButton
        onPress={handleDeleteAccount}
        text="Desativar-Conta"
      />
    </Container>
  );
};

export default UserPage;
