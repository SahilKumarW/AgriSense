import React, { useState } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface LoginScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/login-illustration.png')}
        style={styles.illustration}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.header}>Log In</Text>
        <Text style={styles.subHeader}>Please sign in to continue</Text>

        <View style={styles.inputContainer}>
          <Icon name="email-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "eye-outline" : "eye-off-outline"} size={24} color="#aaa" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => alert('Forgot Password')}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => alert('Log In')}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign in with</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={24} color="#db4437" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  illustration: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'green',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    marginHorizontal: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  signupText: {
    color: '#888',
  },
  signupLink: {
    color: 'green',
    fontWeight: 'bold',
  },
});
