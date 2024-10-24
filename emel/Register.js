import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

const handleRegister = () => {
    if (username === '' || password === '') {
      Alert.alert('Please fill in all fields');
    } else {
      Alert.alert('Login successful', `Welcome, ${username}!`);
    }
  };

  return (
    <View style={styles.container}>

      <View>
        <Image source={require("../assets/logo copy.png")} style={styles.headerImage} />
      </View>

      <Text style={styles.headerText}>Create an Account</Text>

      <TextInput style={styles.textField} placeholder="Email" />

      <TextInput style={styles.textField} placeholder="Full Name" />

      <TextInput style={styles.textField} nChangeText={setUsername} placeholder="Username" keyboardType="email-address"/>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setSecureText(!secureText)}
        >
          <Feather name={secureText ? 'eye' : 'eye-off'} size={24} color="#07143F" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLinkButton}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF9FC', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30, 
  },
  headerImage: {
    width: '75%',
    height: undefined,
    aspectRatio: 1, 
    resizeMode: 'contain',
    marginTop: 30,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 23,
    fontWeight: '700',
    color: '#333', 
    marginBottom: 20, 
  },
  textField: {
    width: '90%', 
    height: 40, 
    borderColor: '#07143F',
    borderWidth: 1.9,
    borderRadius: 10,
    marginBottom: 20, 
    paddingHorizontal: 20,
  },
  passwordContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#07143F',
    borderWidth: 1.9,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  toggleButton: {
    marginLeft: 10,
  },
  signupButton: {
    width: 170,
    paddingVertical: 12, 
    backgroundColor: '#F85046', 
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15, 
  },
  signupButtonText: {
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
  loginLinkButton: {
    color: '#1E1E1E', 
    marginTop: 40, 
  },
});