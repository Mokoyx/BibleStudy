import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration. The inspired 
authors spoke and wrote as they were moved by the Holy Spirit. In this Word, God has committed to humanity the 
knowledge necessary for salvation. The Holy Scriptures are the supreme, authoritative, and the infallible revelation 
of His will. They are the standard of character, the test of experience, the definitive revealer of doctrines, and the 
trustworthy record of God’s acts in history.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:15,
    marginRight:15
  },
  text: {
    fontSize: 24,
    justifyContent:'center'
  },
});
