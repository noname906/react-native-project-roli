import { useState, useEffect } from 'react';

const kezdetiBejegyzesek = [
  { id: 1, cim: 'Séta a Halászbástyán', hely: 'Budapest', kedvelt: false },
  { id: 2, cim: 'Kávézás a Váci utcában', hely: 'Budapest', kedvelt: false },
  { id: 3, cim: 'Kirándulás a Mecsekben', hely: 'Pécs', kedvelt: true },
];

export default function useBejegyzesek() {
  const [bejegyzesek, setBejegyzesek] = useState([]);
  const [betolt, setBetolt] = useState(true);

  useEffect(() => {
    const idozito = setTimeout(() => {
      setBejegyzesek(kezdetiBejegyzesek);
      setBetolt(false);
    }, 300);

    return () => clearTimeout(idozito);
  }, []);

  const bejegyzesHozzaadasa = (cim, hely) => {
    setBejegyzesek((elozoBejegyzesek) => [
      ...elozoBejegyzesek,
      {
        id: elozoBejegyzesek.at(-1).id + 1,
        cim,
        hely,
        kedvelt: false,
      },
    ]);
  };

  const kedveles = (id) => {
    setBejegyzesek((prevBejegyzesek) =>
      prevBejegyzesek.map((mapitem) => (mapitem.id === id ? { ...mapitem, kedvelt: !mapitem.kedvelt } : mapitem)),
    );
  };

  return {
    bejegyzesek,
    betolt,
    bejegyzesHozzaadasa,
    kedveles,
  };
}
const styles = StyleSheet.create({

});
