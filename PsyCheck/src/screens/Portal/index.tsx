import React, {useState} from 'react';
import {carouselData} from '../../components/PortalCarolseu';
import {styless} from '../../components/PortalCarolseu/style';
import {
  Container,
  SearchContainer,
  SearchInput,
  IconContainer,
  SearchIcon,
  ShoppingCartIconContainer,
  ShoppingCartIcon,
  styles,
  WelcomeText,
  WelcomeName,
  Categories,
} from './style';
import {View, FlatList, Image, Text} from 'react-native';
import {SearchButton} from '../../components/SearchButton';

const Portal: React.FC = () => {
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
      <SearchButton text="Diagnóstico" />
    </Container>
  );
};

export default Portal;
