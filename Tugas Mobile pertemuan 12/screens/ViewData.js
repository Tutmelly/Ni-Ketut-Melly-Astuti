import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../firebase.config'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     
    },
    text: {
      color: 'white',
    },
    data: {
      color: '#000',
      marginLeft:10
    }, 
    all: {
      marginTop: 10,
      width: 340,
      height: 120,
      borderColor: '#55a3d3',
      borderWidth: 5,
      borderRadius: 5,
      justifyContent: 'center',
      margin: 5,
      backgroundColor:"#efcb35"
    },
    btn1: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 7,
      width: 310,
      height: 30,
      alignItems: 'center',
      backgroundColor:"#55a3d3",
      justifyContent: 'center',
      marginLeft: 5
    },
    btn2: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 7,
      width: 310,
      height: 30,
      alignItems: 'center',
      backgroundColor:"#e60101",
      justifyContent: 'center',
      marginLeft: 5
    },
    list: {
      maxHeight: 910,
    }
  })

export default function ViewData({ navigation }) {
  const [listFire, setListFire] = useState(null);


  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            nama: childItem.val().nama,
            judul: childItem.val().judul,
            jumlah: childItem.val().jumlah,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.bd.ref('/users/' + key).remove()
  }

  function editFire(key, nama, judul, jumlah) {
    navigation.navigate('Update',
      {
        key: key,
        nama: nama,
        judul: judul,
        jumlah: jumlah
      })
  }

  return (
    <View style={styles.container}>

        <Text style={{marginTop: 50, fontSize: 20, color:"#55a3d3", fontWeight:"bold"}}> Data Peminjaman Buku</Text>

      <FlatList style={styles.list} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.all}>
            <Text style={styles.data}>Name: {item.nama} </Text>
            <Text style={styles.data}>judul Buku: {item.judul}</Text>
            <Text style={styles.data}>Jumlah Buku: {item.jumlah}</Text>
            <View style={{ marginTop: 5, alignSelf: 'center' }}>
            
              {/* <TouchableOpacity style={styles.btn1} onPress={() => { editFire(item.key, item.nama, item.judul, item.jumlah) }}>
                <Text style={styles.text}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn2} onPress={() => { delFire(item.key) }}>
                <Text style={styles.text}>Delete</Text>
              </TouchableOpacity> */}
            </View>
            </View>
          } />
    </View>
  );
};