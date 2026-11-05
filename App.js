import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bejegyzes from './Bejegyzes';

// Kézzel megadott, három elemű bejegyzések tömb
const bejegyzesek = [
  {
    id: '1',
    cim: 'Séta a Halászbástyán',
    hely: 'Budapest',
    leiras: 'Naplementekor gyönyörű a kilátás a Dunára.',
  },
  {
    id: '2',
    cim: 'Kávézás a Váci utcában',
    hely: 'Budapest',
  }, // nincs leírás -> a komponens nem írja ki
  {
    id: '3',
    cim: 'Kirándulás a Mecsekben',
    hely: 'Pécs',
    leiras: 'Egész napos túra, kilátás a Misina-tetőről.',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fejlec}>Útinapló</Text>

      {/* map + egyedi key (id) */}
      {bejegyzesek.map((b) => (
        <Bejegyzes key={b.id} cim={b.cim} hely={b.hely} leiras={b.leiras} />
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
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  fejlec: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
