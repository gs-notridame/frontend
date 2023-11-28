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
      <SearchContainer>
        <IconContainer>
          <SearchIcon source={require('../../assets/icons/search-icon.png')} />
        </IconContainer>
        <SearchInput
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholder="Buscar um produto no PsyCheck"
          clearButtonMode="while-editing"
        />
      </SearchContainer>
      <ShoppingCartIconContainer>
        <ShoppingCartIcon
          source={require('../../assets/icons/shopping-cart-icon.png')}
        />
      </ShoppingCartIconContainer>
      <WelcomeText>
        Bem vindo, <WelcomeName>Victor</WelcomeName>
      </WelcomeText>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/banner-psycheck.png')}
          style={styles.titleImage}
        />
      </View>
      <Categories> Categorias </Categories>
      <FlatList
        data={carouselData}
        renderItem={renderCarouselItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
      />
      <SearchButton text="Buscar produto" />
    </Container>
  );
};

export default Portal;
