import { StyleSheet, Text, View } from 'react-native';

// A props-ot destrukturálással olvassuk ki: { cim, hely, leiras }
export default function Bejegyzes({ cim, hely, leiras }) {
  return (
    <View style={styles.kartya}>
      <Text style={styles.cim}>{cim}</Text>
      <Text style={styles.hely}>{hely}</Text>
      {/* Ha nincs leírás, ezt a sort nem írjuk ki */}
      {leiras ? <Text style={styles.leiras}>{leiras}</Text> : null}
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
  leiras: {
    fontSize: 14,
    marginTop: 6,
  },
});
