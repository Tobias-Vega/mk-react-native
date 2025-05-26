import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HistoriaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.text}>
          En el torneo Mortal Kombat, los guerreros de la Tierra deben enfrentar a los campeones del reino
          de Outworld. Si Outworld gana, podrá conquistar la Tierra. Siete luchadores, guiados por el dios
          Raiden, luchan para salvar el mundo y evitar que el emperador Shao Kahn sea el nuevo gobernante de la Tierra.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 20,
    maxWidth: 600,
  },
  title: {
    fontSize: 32,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
});