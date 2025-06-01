import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert, Button, Image, Platform,
  StyleSheet, Text, TextInput, TouchableOpacity,
  View
} from 'react-native';
import { useCharacters } from "../context/Character-context";

export default function CreateCharacterScreen() {
  const { createCharacter } = useCharacters();

  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const hasPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Se necesitan permisos de la galería para seleccionar imagen.');
        return false;
      }
    }
    return true;
  };

  const selectImage = async () => {
    const permissions = await hasPermissions();
    if (!permissions) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7,
    });
    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!name.trim() || !description.trim() || !imageUri) {
      Alert.alert('Complete todos los campos', 'Debe ingresar nombre, descripción y elegir una imagen.');
      return;
    }

    createCharacter({ name, description, imageUri });

    setName('');
    setDescription('');
    setImageUri(null);

    router.push('/home/characters');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crear Nuevo Personaje</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del personaje"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Descripción"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
        ) : (
          <Text style={styles.imagePickerText}>Tocar para seleccionar imagen</Text>
        )}
      </TouchableOpacity>

      <Button title="Guardar Personaje" onPress={handleSubmit} color="#FFAC1C" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '40%',
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  imagePicker: {
    width: 150,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFD700',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerText: {
    color: '#888',
    textAlign: 'center',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
});