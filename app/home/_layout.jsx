import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#FFD700',
        },
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#FFD700',
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: 'Historia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: 'Personajes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stages"
        options={{
          title: 'Escenarios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create-character"
        options={{
          title: 'Crear',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          name="product"
          options={{
            title: 'Productos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cube" size={size} color={color} />
            ),
          }}
        />
    </Tabs>
  );
}