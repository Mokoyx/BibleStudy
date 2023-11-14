import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Study({ navigation }) {
  const navigateToDetails = () => {
    // Use the navigation prop to navigate to the "StudyDetails" screen
    navigation.navigate('StudyDetails');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Study Landing Screen</Text>
      {/* Add a button to navigate to the StudyDetails screen */}
      <Button title="Go to Details" onPress={navigateToDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  text: {
    fontSize: 24,
  },
});
