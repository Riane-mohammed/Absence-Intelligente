import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './routes/homeStack';
import AbsenseStack from './routes/absenseStack';
import EmploieStack from './routes/emploieStack';

export default function App({ navigation }: any) {
  const Drawer = createDrawerNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://192.168.1.110:4000/users?email=${email}&password=${password}`);
      const data = await response.json();
      if (data.length > 0) {
        setIsLoggedIn(true);
      } else {
        Alert.alert('Invalid credentials', 'Please enter valid email and password.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {isLoggedIn && <DrawerItem label="Deconnexion" onPress={handleLogout} />}
      </DrawerContentScrollView>
    );
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Accueil" screenOptions={{ headerShown: false }} drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="Accueil"
          component={HomeStack}
        />
        <Drawer.Screen
          name="Prendre l'absence"
          component={EmploieStack}
        />
        <Drawer.Screen
          name="Absense"
          component={AbsenseStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
