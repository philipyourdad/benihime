import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo copy.png';
import styles from './loginstyle';
import { Feather } from '@expo/vector-icons';

const Resetpass = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [resetpass,setResetpass] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [secureText2, setSecureText2] = useState(true);

  const handleResetpass = (password) => {
    if (password === '') {
      Alert.alert('Please fill in all fields');
    } else {
      Alert.alert('Password reset successful');

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

      <Text style={styles.title}>Password Reset</Text>
      <View style={styles.textField}>
        <TextInput
          style={styles.passwordInput}
          placeholder="New Password"
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

      <View style={styles.textField}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Re-Type New Password"
          secureTextEntry={secureText2}
          value={resetpass}
          onChangeText={setResetpass}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setSecureText2(!secureText2)}
        >
          <Feather name={secureText2 ? 'eye' : 'eye-off'} size={24} color="#07143F" />
        </TouchableOpacity>
      </View>
      

      <TouchableOpacity style={styles.button} onPress={() => handleResetpass(password)}>
        <LinearGradient
          colors={['#F85046', '#F85046']}
          style={styles.buttonBackground}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.forgotPasswordText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Resetpass;