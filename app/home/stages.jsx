import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const stages = [
  { name: 'The Pit', image: require('../../assets/images/stages/Pit1.jpeg') },
  { name: 'The Throne Room', image: require('../../assets/images/stages/throne-room.jpeg') },
  { name: 'The Palace Gates', image: require('../../assets/images/stages/palace-gates.jpeg') },
  { name: 'The Portal', image: require('../../assets/images/stages/portal.jpeg') },
  { name: 'The Living Forest', image: require('../../assets/images/stages/forest.jpeg') },
  { name: 'Khan Arena', image: require('../../assets/images/stages/arena.jpeg') },
  { name: 'The Street', image: require('../../assets/images/stages/street.jpeg') },
  { name: 'Smoke Portal', image: require('../../assets/images/stages/portal-mk3.jpeg') },
  { name: 'Soul Chamber', image: require('../../assets/images/stages/soul.jpeg') }
];

export default function EscenariosScreen() {
  const { width } = useWindowDimensions();
  const CARD_MARGIN = 8 * 2;
  const numColumns = Math.floor(width / 160);
  const cardWidth = (width - CARD_MARGIN * numColumns) / numColumns;
  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={item.image} style={styles.image} resizeMode='cover' />
      <View style={styles.overlay}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Escenarios</Text>
      <FlatList
        key={numColumns}
        data={stages}
        renderItem={renderItem}
        keyExtractor={(_, i) => String(i)}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
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
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFD700',
    width: 180,
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 4,
    alignItems: 'center',
  },
  name: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
