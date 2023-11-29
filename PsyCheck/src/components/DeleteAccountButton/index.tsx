/* eslint-disable react/react-in-jsx-scope */
import {Button, ButtonText} from './style';

type DeleteAccountButtonProps = {
  onPress: () => void;
  text: string;
};

export const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = ({
  onPress,
  text,
}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
