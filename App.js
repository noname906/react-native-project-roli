import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Bejegyzes from './Bejegyzes';
import { useState } from 'react';
import useBejegyzesek from './hooks/useBejegyzesek';

export default function App() {
  // Use state ||| Átkerült a hooks/useBejegyzesek.js-be
  // const [bejegyzesek, setBejegyzesek] = useState([
  //  { id: 1, cim: 'Séta a Halászbástyán', hely: 'Budapest', kedvelt: false },
  //  { id: 2, cim: 'Kávézás a Váci utcában', hely: 'Budapest', kedvelt: false },
  //  { id: 3, cim: 'Kirándulás a Mecsekben', hely: 'Pécs', kedvelt: true },
  // ]);

  const { bejegyzesek, betolt, bejegyzesHozzaadasa, kedveles } = useBejegyzesek();
  const [ujCim, setUjCim] = useState('');
  const [ujHely, setUjHely] = useState('');

  // TömbHozzáadás
  const ujelemHozzaadasa = () => {
    const ujBejegyzes = {
      // Python tömb[-1] js-ben
      id: bejegyzesek.at(-1).id + 1,
      cim: ujCim,
      hely: ujHely,
      kedvelt: false,
    };

    setBejegyzesek((elozoBejegyzesek) => [...elozoBejegyzesek, ujBejegyzes]);
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

      {bejegyzesek.map((b) => (
        // / Propertie a kedveles function-höz
        <Bejegyzes key={b.id} id={b.id} cim={b.cim} hely={b.hely} kedvelt={b.kedvelt} kedveles={kedveles} />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justify: 'flex-start',
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
