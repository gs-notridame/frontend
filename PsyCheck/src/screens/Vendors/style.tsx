import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', // Ajuste a largura conforme necessário
    aspectRatio: 1, // Mantém a proporção quadrada independente da largura
    borderRadius: 8,
    elevation: 1, // Sombra para Android
    // Sombra para iOS:
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    padding: 8,
  },
  cardImage: {
    width: '100%',
    height: '70%', // Ajuste conforme necessário
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});
