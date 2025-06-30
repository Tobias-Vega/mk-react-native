import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HistoryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/extras/logo-mk.jpeg')}
          style={styles.logo}
        />
        <Text style={styles.title}>Historia de Mortal Kombat</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>El Torneo</Text>
        <Text style={styles.text}>
          En el torneo Mortal Kombat, los guerreros de la Tierra deben enfrentar a los campeones del reino
          de Outworld. Si Outworld gana, podrá conquistar la Tierra. Siete luchadores, guiados por el dios
          Raiden, luchan para salvar el mundo y evitar que el emperador Shao Kahn sea el nuevo gobernante de la Tierra.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Los Reinos</Text>
        <Text style={styles.text}>
          Existen múltiples reinos en el universo de Mortal Kombat: Earthrealm (la Tierra), Outworld (reino conquistador),
          Edenia (reino conquistado), y el Netherrealm (reino de los demonios y espíritus malignos).
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>La Profecía</Text>
        <Text style={styles.text}>
          Según las reglas ancestrales, si un reino pierde diez torneos consecutivos de Mortal Kombat,
          debe fusionarse con el reino victorioso. La Tierra ha perdido nueve veces...
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
});