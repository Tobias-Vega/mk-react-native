import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useCharacters } from '../context/Character-context';

export default function PersonajesScreen() {
  const { characters } = useCharacters();
  const { width } = useWindowDimensions();
  const CARD_MARGIN = 8 * 2;
  const numColumns = Math.floor(width / 160);
  const cardWidth = (width - CARD_MARGIN * numColumns) / numColumns;

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personajes</Text>
      <FlatList
        key={numColumns}
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginVertical: 16,
  },
  list: {
    padding: 8,
    justifyContent: 'center',
  },
  card: {
    borderWidth: 2,
    borderColor: '#FFD700',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    margin: 8,
    width: 150,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
  },
});
