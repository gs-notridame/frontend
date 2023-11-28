/* eslint-disable react/react-in-jsx-scope */
import {Button, ButtonText} from './styles';

type SearchButtonProps = {
  text: string;
};

export const SearchButton: React.FC<SearchButtonProps> = ({text}) => {
  return (
    <Button>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
