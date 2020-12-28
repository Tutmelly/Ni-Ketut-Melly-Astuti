import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import firebase from '../firebase.config'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        marginTop: 25
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
    },
    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 10
    },
    username: {
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    postHeader: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputgrup: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#c6cacc',
        borderRadius: 20,
        marginHorizontal: 30
    },
    posisi: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})

const ImportData = ({navigation}) => {
const [state, setState] = useState ({
    nama: "",
    judul: "",
    jumlah: ""
})

const handleChangeText = (nama, value) => {
    setState ({ ...state, [nama]: value})
}
 
const savecomment = async () => {
    if (state.nama === '') {
        alert ('Data belum diinput ')
    }
    else {
        // await firebase.db.collection('users').add({
            await firebase.bd.ref('/users').push({
            nama: state.nama,
            judul: state.judul,
            jumlah: state.jumlah
        })
        alert('data berhasil !')
    }
}
    return (
        <ScrollView style={styles.container}>


            <View style={[styles.posisi]}>
          <Image
      source ={require ('../assets/image/logo.png')}
      style= {{width:"80%", height:275}}/>
          
        </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Nama Peminjam"
                onChangeText= {(value) => handleChangeText ("nama", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Judul Buku"
                onChangeText= {(value) => handleChangeText ("judul", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Jumlah Buku"
                onChangeText= {(value) => handleChangeText ("jumlah", value)}
                />
            </View>

            <TouchableOpacity onPress={() => savecomment ()} style={{width: 325, 
                backgroundColor: '#efcb35', 
                padding: 10, 
                 borderRadius: 10, 
                 alignSelf: 'center',
                  marginTop: 20}}>
                <Text style={{ 
                    textAlign: 'center',
                    color: '#fff', 
                    fontSize: 16 }}>Inputkan</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ViewData')} style={{width: 325, 
                backgroundColor: '#efcb35', 
                padding: 10, 
                 borderRadius: 10, 
                 alignSelf: 'center',
                  marginTop: 20}}>
                <Text style={{ 
                    textAlign: 'center',
                    color: '#fff', 
                    fontSize: 16 }}>View Data Peminjaman </Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}

export default ImportData

