import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const HomeScreen: React.FC = () => {
  // Step 2: Create a reference for the animation value (scale)
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Step 3: Start the animation when the component is mounted
    Animated.timing(scaleAnim, {
      toValue: 1,               // Animate to full size (1x)
      duration: 1500,           // Duration of the animation in milliseconds (1.5 seconds)
      useNativeDriver: true,    // Optimize animation performance
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Step 4: Apply the zoom animation to the logo's transform (scale) */}
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
