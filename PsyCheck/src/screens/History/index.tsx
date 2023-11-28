// History.js
import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {styles} from './style';
import HistoryCard from '../../components/HistoryCard';

const historyData = [
  {
    number: '3125354',
    value: 1532.59,
    quantity: 48,
    vendor: 'Mercado Livre',
    date: '01/11/2023',
  },
  {
    number: '35846121',
    value: 2515.84,
    quantity: 15,
    vendor: 'Kabuum',
    date: '09/10/2023',
  },
  {
    number: '685146351',
    value: 3215.45,
    quantity: 4,
    vendor: 'Amazon',
    date: '8/10/2023',
  },
  {
    number: '8798456321',
    value: 55454.24,
    quantity: 65,
    vendor: 'Kalunga',
    date: '15/08/2023',
  },
  {
    number: '8798456321',
    value: 6451.89,
    quantity: 15,
    vendor: 'Amazon',
    date: '15/02/2023',
  },
];

const HistoryPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/history-green-title.png')}
        style={styles.titleImage}
      />
      <ScrollView style={styles.container}>
        {historyData.map((order, index) => (
          <HistoryCard key={index.toString()} order={order} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryPage;
