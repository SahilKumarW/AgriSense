import React, { useState } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

interface SignupScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignUpScreen = ({ navigation } : SignupScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  return (
    <View style={styles.container}>
      {/* Top illustration */}
      <Image
        source={require('../../assets/signup-illustration.png')} 
        style={styles.illustration}
      />
      
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Create an account to continue</Text>
      
      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#777" style={styles.icon} />
        <TextInput placeholder="First Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#777" style={styles.icon} />
        <TextInput placeholder="Last Name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#777" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#777" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#777" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#777" style={styles.icon} />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry={showConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon name={showConfirmPassword ? "eye-slash" : "eye"} size={20} color="#777" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social Login Options */}
      <Text style={styles.orText}>or sign up with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  illustration: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  loginText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  loginLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
