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
    case 'Diagnóstico':
      iconName = focused
        ? require('../../assets/icons/medical-active-icon.png')
        : require('../../assets/icons/medical-icon.png');
      break;
    case 'Agendar':
      iconName = focused
        ? require('../../assets/icons/calendar-active-icon.png')
        : require('../../assets/icons/calendar-icon.png');
      break;
    case 'Recomendação':
      iconName = focused
        ? require('../../assets/icons/medal-active-icon.png')
        : require('../../assets/icons/medal-icon.png');
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
