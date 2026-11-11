import { Button, StyleSheet, Text, View } from 'react-native';

export default function Bejegyzes({id, cim, hely, kedvelt, kedveles}) {
  return (
    <View style={styles.kartya}>
      <Text style={styles.cim}>{cim}</Text>
      <Text style={styles.hely}>{hely}</Text>
      <Button title={kedvelt ? 'kedvelt' : 'nincs kedvelve'} onPress={() => kedveles(id)} style={styles.Button}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    width: '100%',
  },
  cim: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hely: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  kedvelt: {
    width: 20,
  }
});
