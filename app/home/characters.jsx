import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const characters = [
  { name: 'Liu Kang', image: require('../../assets/images/characters/liukang.jpeg'), description: 'Monje shaolin y campeón del Mortal Kombat, lucha por defender la Tierra del emperador Shao Kahn.' },
  { name: 'Sub-Zero', image: require('../../assets/images/characters/sub-zero.jpeg'), description: 'Un guerrero del clan Lin Kuei que ha roto sus lazos con ellos para detener su corrupción.' },
  { name: 'Scorpion', image: require('../../assets/images/characters/scorpion.jpeg'), description: 'Espíritu vengativo que regresa del infierno para castigar a quienes destruyeron su clan.' },
  { name: 'Sonya Blade', image: require('../../assets/images/characters/sonya.jpeg'), description: 'Agente de las fuerzas especiales que busca detener a Kano y combatir a las fuerzas del mal.' },
  { name: 'Jax', image: require('../../assets/images/characters/jax.jpeg'), description: 'Comandante militar con brazos cibernéticos, busca justicia y proteger la Tierra.' },
  { name: 'Noob Saibot', image: require('../../assets/images/characters/noob-saibot.png'), description: 'El antiguo Sub-Zero, ahora un espectro que busca venganza y caos en el mundo mortal.' },
  { name: 'Sindel', image: require('../../assets/images/characters/sindel.jpeg'), description: 'Reina resucitada de Edenia, ahora sirviente de Shao Kahn con un grito mortal.' },
  { name: 'Shao Kahn', image: require('../../assets/images/characters/shao-khan.jpeg'), description: 'El tiránico emperador de Outworld que busca conquistar la Tierra por completo.' },
  { name: 'Kitana', image: require('../../assets/images/characters/kitana.jpeg'), description: 'Princesa de Edenia y guerrera experta, lucha por la libertad de su reino.' },
  { name: 'Raiden', image: require('../../assets/images/characters/raiden.jpeg'), description: 'Dios del trueno y protector de la Tierra, lucha contra las fuerzas del mal.' },
  { name: 'Shang Tsung', image: require('../../assets/images/characters/shang-tsung.jpeg'), description: 'Hechicero que puede robar las almas y habilidades de otros combatientes.' },
  { name: 'Johnny Cage', image: require('../../assets/images/characters/cage.jpeg'), description: 'Actor de Hollywood y experto en artes marciales, busca demostrar su valía en el Mortal Kombat.' }
];

export default function PersonajesScreen() {
  const { width } = useWindowDimensions();
  const CARD_MARGIN = 8 * 2;
  const numColumns = Math.floor(width / 160);
  const cardWidth = (width - CARD_MARGIN * numColumns) / numColumns;

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
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
