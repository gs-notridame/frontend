/* eslint-disable react/react-in-jsx-scope */
import {Button, ButtonText} from './style';

type SaveChangesButtonProps = {
  onPress: () => void;
  text: string;
};

export const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({
  onPress,
  text,
}) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
