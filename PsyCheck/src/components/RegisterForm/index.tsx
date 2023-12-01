import React from 'react';
import {Input} from './style';

type RegisterFormProps = {
  name: string;
  setName: (text: string) => void;
  numSeguroSaude: string;
  setNumSeguroSaude: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  cpf: string;
  setCpf: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  onRegisterPress: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  setName,
  numSeguroSaude,
  setNumSeguroSaude,
  email,
  setEmail,
  cpf,
  setCpf,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  return (
    <>
      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        keyboardType="name-phone-pad"
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <Input
        placeholder="Numero Seguro Saúde"
        value={numSeguroSaude}
        onChangeText={setNumSeguroSaude}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
    </>
  );
};

export default RegisterForm;
