import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import {styles} from './style';
import {vendorsData} from '../../components/VendorsCards';

const Vendors: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Logic to handle search
  };

  const renderVendorItem = ({item}) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.sales} vendas</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fornecedores</Text>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={handleSearchChange}
        placeholder="Procurar fornecedor..."
      />
      <FlatList
        data={vendorsData}
        renderItem={renderVendorItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default Vendors;
