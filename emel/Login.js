import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo copy.png';
import styles from './loginstyle';
import { Feather } from '@expo/vector-icons'; 

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Please fill in all fields');
    } else {
      Alert.alert('Login successful', `Welcome, ${username}!`);
    }
  };

  return (
    <LinearGradient
      colors={['#ECF9FC', '#ECF9FC', '#ECF9FC']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={logo}
          style={styles.logoImage}
        />
      </View>

      <Text style={styles.title}>Welcome Back</Text>

      <TextInput style={styles.textField} onChangeText={setUsername} placeholder="Username" />

      <View style={styles.textField}>
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

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <LinearGradient colors={['#F85046', '#F85046']} style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Log in</Text>
        </LinearGradient>
      </TouchableOpacity>

      
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Resetpass')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    

      <View style={styles.createAccountContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createAccountText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};



export default Login;
