import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My name is Kelvin</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aabda0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold', //makes 'Kelvin' bold
},
});
