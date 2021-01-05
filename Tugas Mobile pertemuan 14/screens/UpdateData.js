import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../firebase.config';

export default function Update({ route, navigation }) {
  const [nama, setNama] = useState(route.params.nama);
  const [judul, setJudul] = useState(route.params.judul);
  const [jumlah, setJumlah] = useState(route.params.jumlah);


  function upDateFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        nama: nama,
        judul: judul,
        jumlah: jumlah
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setNama('');
      setJudul('');
      setJumlah('');
      navigation.navigate("ViewData")
    }
  }

  return (
    <View style={styles.container}>
         <Text style={{marginTop: 100, fontSize: 20, color:"#55a3d3", fontWeight:"bold",marginBottom:20}}> Edit Data Peminjaman Buku</Text>

        <Text style={styles.text}>Nama Peminjam </Text>
        <TextInput style={styles.textInput} onChangeText={nama => setNama(nama)} value={nama} />

        <Text style={styles.text}>Judul Buku</Text>
        <TextInput style={styles.textInput} onChangeText={judul => setJudul(judul)} value={judul} />

        <Text style={styles.text}>Jumlah Buku</Text>
        <TextInput style={styles.textInput} onChangeText={jumlah => setJumlah(jumlah)} value={jumlah} />

        <TouchableOpacity style={styles.btn1} onPress={() => { upDateFire() }}>
          <Text style={styles.text}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate("ViewData")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efcb35',
    alignItems: 'center',
  
  },
  text: {
    color: '#000',
    fontSize:15,
    fontWeight:"bold"
    
  },
  btn1: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    backgroundColor:"#55a3d3"
  },
  btn2: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    backgroundColor:"#e60101"
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 3,
    borderColor:"#55a3d3",
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});