import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { getAllCharacters } from '../../data/characters';

export default function CharactersScreen() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const [allCharacters, setAllCharacters] = useState(getAllCharacters());

  const CARD_MARGIN = 8 * 2;
  const numColumns = Math.floor(width / 160);
  const cardWidth = (width - CARD_MARGIN * numColumns) / numColumns;

  useFocusEffect(
    useCallback(() => {
      setAllCharacters(getAllCharacters());
    }, [])
  );

  const handleCharacterPress = (characterId) => {
    router.push(`/character/${characterId}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }]}
      onPress={() => handleCharacterPress(item.id)}
      activeOpacity={0.7}
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc} numberOfLines={3}>{item.description}</Text>
      {item.isCustom && (
        <View style={styles.customBadge}>
          <Text style={styles.customBadgeText}>PERSONALIZADO</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personajes</Text>
      <FlatList
        key={numColumns}
        data={allCharacters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
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
    position: 'relative',
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
  customBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  customBadgeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
});
