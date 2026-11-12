import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Bejegyzes from './Bejegyzes';
import { useState } from 'react';
import useBejegyzesek from './hooks/useBejegyzesek';

export default function App() {
  const { bejegyzesek, betolt, bejegyzesHozzaadasa, kedveles } = useBejegyzesek();
  const [ujCim, setUjCim] = useState('');
  const [ujHely, setUjHely] = useState('');

  const ujelemHozzaadasa = () => {
    bejegyzesHozzaadasa(ujCim, ujHely);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fejlec}>Útinapló</Text>

      <Text>
        Bejegyzések száma: {bejegyzesek.length} és ebből kedvelt: {bejegyzesek.filter((b) => b.kedvelt).length}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={ujCim} onChangeText={setUjCim} placeholder="Cím:" />
        <TextInput style={styles.input} value={ujHely} onChangeText={setUjHely} placeholder="Hely:" />

        <Button title="Adat hozzáadása" onPress={ujelemHozzaadasa} />
      </View>

      {betolt ? (
        <Text>Bejegyzések betöltése...</Text>
      ) : (
        bejegyzesek.map((b) => (
          <Bejegyzes key={b.id} id={b.id} cim={b.cim} hely={b.hely} kedvelt={b.kedvelt} kedveles={kedveles} />
        ))
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  fejlec: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});
