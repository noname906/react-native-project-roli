import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export default function hook(hookkifejezés) {

const [bejegyzesek, setBejegyzesek] = useState([]);
const [betolt, setBetolt] = useState([]);

useEffect(()=> {
  setBejegyzesek(bejegyzesek);
  setBetolt(false)
},)

const ujBejegyzes = ()
}
