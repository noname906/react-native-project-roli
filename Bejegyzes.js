import { Text, View, Pressable, StyleSheet } from 'react-native';

export default function Bejegyzes({ id, cim, hely, leiras, kedvelt, kedvenc, kedveles }) {
  return (
    <View style={[styles.kartya, kedvenc && styles.kedvenc]}>
      <Text style={styles.cim}>{cim}</Text>

      <Text style={styles.hely}>
        Helyszín: <Text style={styles.helyNev}>{hely}</Text>
      </Text>

      <Text style={styles.leiras} numberOfLines={2}>
        {leiras}
      </Text>

      <Pressable style={styles.gomb} onPress={() => kedveles(id)}>
        <Text style={styles.gombSzoveg}>{kedvelt ? '♥ Kedvelt' : '♡ Nincs kedvelve'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  kartya: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    margin: 10,
    width: '100%',
  },
  kedvenc: {
    borderLeftWidth: 6,
    borderLeftColor: '#f5c518',
    backgroundColor: '#fffbea',
  },
  cim: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hely: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  helyNev: {
    fontWeight: '600', // a színt és a méretet a külső Text-ből örökli
  },
  leiras: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  gomb: {
    backgroundColor: '#3f21bb',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  gombSzoveg: {
    color: '#fff',
  },
});
