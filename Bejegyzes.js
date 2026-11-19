import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Bejegyzes({ id, cim, hely, leiras, kedvelt, kedveles }) {
  return (
    <View style={[styles.kartya, kedvelt && styles.kedvenc]}>
      <Text style={styles.cim}>{cim}</Text>

      <Text style={styles.hely}>
        Helyszín: <Text>{hely}</Text>
      </Text>

      {leiras ? (
        <Text style={styles.leiras} numberOfLines={2}>
          {leiras}
        </Text>
      ) : null}

      <Pressable style={styles.gomb} onPress={() => kedveles(id)}>
        <Text style={styles.gombSzoveg}>
          {kedvelt ? 'Kedvelt ★' : 'Kedvelés'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
  },
  kedvenc: {
    borderLeftWidth: 5,
    borderLeftColor: '#f1c40f',
    backgroundColor: '#fffdf2',
  },
  cim: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hely: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 6,
  },
  leiras: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
  },
  gomb: {
    alignSelf: 'flex-start',
    backgroundColor: '#3f21bb',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  gombSzoveg: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
