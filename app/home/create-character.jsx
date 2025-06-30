import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addCustomCharacter } from '../../data/characters';

export default function CreateCharacterScreen() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [realm, setRealm] = useState('');
    const [image, setImage] = useState(null);
    const router = useRouter();

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert("Permisos necesarios", "Necesitas dar permisos para acceder a las fotos");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        if (!name.trim()) {
            Alert.alert('Error', 'El nombre es obligatorio');
            return;
        }
        if (!description.trim()) {
            Alert.alert('Error', 'La descripción es obligatoria');
            return;
        }
        if (!realm.trim()) {
            Alert.alert('Error', 'El reino es obligatorio');
            return;
        }
        if (!image) {
            Alert.alert('Error', 'Debes seleccionar una imagen');
            return;
        }

        try {
            const newCharacter = addCustomCharacter({
                name: name.trim(),
                description: description.trim(),
                realm: realm.trim(),
                image: image,
            });

            Alert.alert(
                'Éxito',
                `Personaje "${name}" creado exitosamente!`,
                [
                    {
                        text: 'Ver Personajes',
                        onPress: () => {
                            setName('');
                            setDescription('');
                            setRealm('');
                            setImage(null);
                            router.push('/home/characters');
                        }
                    },
                    {
                        text: 'Crear Otro',
                        onPress: () => {
                            setName('');
                            setDescription('');
                            setRealm('');
                            setImage(null);
                        }
                    }
                ]
            );
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al crear el personaje');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Crear Nuevo Personaje</Text>

                {/* Campo de Nombre */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nombre del Personaje *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: Sub-Zero"
                        placeholderTextColor="#888"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/* Campo de Reino */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Reino *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: Earthrealm"
                        placeholderTextColor="#888"
                        value={realm}
                        onChangeText={setRealm}
                    />
                </View>

                {/* Campo de Descripción */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Descripción *</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Describe las habilidades y origen del personaje..."
                        placeholderTextColor="#888"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>

                {/* Selección de Imagen */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Imagen del Personaje *</Text>

                    <View style={styles.imageSection}>
                        {image && (
                            <View style={styles.imagePreview}>
                                <Image source={{ uri: image }} style={styles.previewImage} />
                                <TouchableOpacity
                                    style={styles.removeImageButton}
                                    onPress={() => setImage(null)}
                                >
                                    <Ionicons name="close-circle" size={24} color="#FF0000" />
                                </TouchableOpacity>
                            </View>
                        )}

                        <View style={styles.imageButtons}>
                            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                                <Ionicons name="images" size={24} color="#FFD700" />
                                <Text style={styles.imageButtonText}>Galería</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Botón de Crear */}
                <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
                    <Text style={styles.createButtonText}>Crear Personaje</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#FFD700',
        marginBottom: 8,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#555',
    },
    textArea: {
        height: 100,
    },
    imageSection: {
        alignItems: 'center',
    },
    imagePreview: {
        position: 'relative',
        marginBottom: 15,
    },
    previewImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFD700',
    },
    removeImageButton: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: '#000',
        borderRadius: 12,
    },
    imageButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    imageButton: {
        backgroundColor: '#333',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFD700',
        flex: 0.4,
    },
    imageButtonText: {
        color: '#FFD700',
        marginTop: 5,
        fontSize: 14,
        fontWeight: '600',
    },
    createButton: {
        backgroundColor: '#FFD700',
        paddingVertical: 18,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 40,
    },
    createButtonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
