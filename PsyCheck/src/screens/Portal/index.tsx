import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {carouselData} from '../../components/PortalCarolseu';
import {styless} from '../../components/PortalCarolseu/style';
import {Container, styles, WelcomeText, WelcomeName, Categories} from './style';
import {View, FlatList, Image, Text} from 'react-native';

const Portal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const findUserName = async () => {
      try {
        const response = await axios.get('http://172.19.0.1:8080/paciente/6');
        setUserName(response.data.pessoa.nome);
      } catch (error) {
        console.log(error);
      }
    };

    findUserName();
  }, []);

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
        Bem vindo<WelcomeName>{', ' + userName || '!'}</WelcomeName>
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
