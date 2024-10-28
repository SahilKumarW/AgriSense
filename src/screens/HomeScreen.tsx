import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the logo scale animation
    Animated.timing(scaleAnim, {
      toValue: 1,               // Animate to full size (1x)
      duration: 1500,           // Duration of the animation in milliseconds (1.5 seconds)
      useNativeDriver: true,    // Optimize animation performance
    }).start();

    // Navigate to LoginScreen after 1.5 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigation, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/Agrisense Logo.png')}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
