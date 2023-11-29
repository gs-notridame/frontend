import React, {useState} from 'react';
import {carouselData} from '../../components/PortalCarolseu';
import {styless} from '../../components/PortalCarolseu/style';
import {
  Container,
  styles,
  WelcomeText,
  WelcomeName,
  Categories
} from './style';
import {View, FlatList, Image, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/rock-stack-param-list';

type PortalNavigationProp = StackNavigationProp<RootStackParamList, 'Portal'>;

type Props = {
  navigation: PortalNavigationProp;
};

const Portal: React.FC<Props> = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Logic to handle search
  };

  const renderCarouselItem = ({item}) => (
    <View style={styless.carouselItem}>
      <Image source={item.image} style={styless.carouselImage} />
      <Text style={styless.carouselTitle}>{item.title}</Text>
      <Text style={styless.carouselDescription}>{item.description}</Text>
    </View>
  );

  return (
    <Container>
      <WelcomeText>
        Bem vindo, <WelcomeName>Victor</WelcomeName>
      </WelcomeText>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/banner-psycheck.png')}
          style={styles.titleImage}
        />
      </View>
      <Categories> Recomendações </Categories>
      <FlatList
        data={carouselData}
        renderItem={renderCarouselItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
      />
    </Container>
  );
};

export default Portal;
