// TabBarIconComponent.js
import React from 'react';
import {IconImage} from './style';

interface TabBarIconProps {
  routeName: string;
  focused: boolean;
}

const TabBarIconComponent: React.FC<TabBarIconProps> = ({
  routeName,
  focused,
}) => {
  let iconName;
  switch (routeName) {
    case 'Início':
      iconName = focused
        ? require('../../assets/icons/home-active-icon.png')
        : require('../../assets/icons/home-icon.png');
      break;
    case 'Fornecedores':
      iconName = focused
        ? require('../../assets/icons/vendors-active-icon.png')
        : require('../../assets/icons/vendors-icon.png');
      break;
    case 'Histórico':
      iconName = focused
        ? require('../../assets/icons/historic-active-icon.png')
        : require('../../assets/icons/historic-icon.png');
      break;
    case 'Perfil':
      iconName = focused
        ? require('../../assets/icons/profile-active-icon.png')
        : require('../../assets/icons/profile-icon.png');
      break;
    default:
      iconName = undefined;
  }

  if (!iconName) {
    return null;
  }

  return <IconImage source={iconName} />;
};

export default TabBarIconComponent;
