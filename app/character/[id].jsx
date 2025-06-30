import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getCharacterById } from '../../data/characters';

export default function CharacterDetail() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const character = getCharacterById(id);

    if (!character) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Personaje no encontrado</Text>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backButtonText}>Volver</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backIcon}
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={24} color="#FFD700" />
                </TouchableOpacity>
                <Text style={styles.title}>{character.name}</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image source={character.image} style={styles.characterImage} resizeMode="cover" />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Reino</Text>
                        <Text style={styles.realmText}>{character.realm}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Descripción</Text>
                        <Text style={styles.descriptionText}>{character.fullDescription}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Habilidades Especiales</Text>
                        <View style={styles.abilitiesContainer}>
                            {character.abilities.map((ability, index) => (
                                <View key={index} style={styles.abilityChip}>
                                    <Text style={styles.abilityText}>{ability}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingTop: 20,
    },
    backIcon: {
        marginRight: 16,
        padding: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFD700',
        flex: 1,
    },
    content: {
        padding: 16,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    characterImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#FFD700',
    },
    infoContainer: {
        gap: 20,
    },
    section: {
        backgroundColor: '#111',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#333',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 8,
    },
    realmText: {
        fontSize: 16,
        color: '#fff',
        fontStyle: 'italic',
    },
    descriptionText: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 24,
    },
    abilitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    abilityChip: {
        backgroundColor: '#FFD700',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    abilityText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
    },
    errorContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#FFD700',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    backButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
