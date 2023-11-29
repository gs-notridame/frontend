import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import {styles} from './style';
import {diagnosisResultData} from '../../components/DiagnosisResultCards';

const DiagnosisResult: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Logic to handle search
  };

  const renderDiagnosisResultItem = ({item}) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.sales} vendas</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnóstico</Text>
      <FlatList
        data={diagnosisResultData}
        renderItem={renderDiagnosisResultItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default DiagnosisResult;
