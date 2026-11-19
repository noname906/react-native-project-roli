import {Button, StyleSheet, Text, View, Pressable} from 'react-native';

export default function Bejegyzes({ id, cim, hely, kedvelt, kedveles }) {
  return (
    <View style={styles.kartya}>
      <Text style={styles.cim}>{cim}</Text>
      <Text style={styles.hely}>{hely}</Text>
      <Pressable style={styles.hatter}
        onPress={() => kedveles(id)}
        //title={kedvelt ? 'kedvelt' : 'nincs kedvelve'}
        ><Text></Text></ Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 12,
    marginBottom: 10,
    width: '100%',
  },
  cim: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hely: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  kedvelt: {
    width: 20,
  },
  hatter: {
    backgroundColor: '#3f21bb',
    borderColor: '#e61b1b'
  }
});
