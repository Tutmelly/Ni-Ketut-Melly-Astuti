import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import firebase from '../firebase.config'

const Post = ({navigation}) => {
const image = { uri: 'https://sujeitoprogramador.com/wp-content/uploads/2019/03/como.png'}

const [state, setState] = useState ({
    name: "",
    title: "",
    comment: ""
})

const handleChangeText = (name, value) => {
    setState ({ ...state, [name]: value})
}

const savecomment = async () => {
    if (state.name === '') {
        alert ('Please provide a name')
    }
    else {
        await firebase.db.collection('users').add({
            name: state.name,
            title: state.title,
            comment: state.comment
        })
        alert('Seved!')
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
                onChangeText= {(value) => handleChangeText ("name", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Judul Buku"
                onChangeText= {(value) => handleChangeText ("title", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Jumlah Buku"
                onChangeText= {(value) => handleChangeText ("comment", value)}
                />
            </View>

            <TouchableOpacity onPress={() => savecomment ()} style={{width: 125, 
                backgroundColor: '#efcb35', 
                padding: 10, 
                 borderRadius: 40, 
                 alignSelf: 'center',
                  marginTop: 20}}>
                <Text style={{ 
                    textAlign: 'center',
                    color: '#fff', 
                    fontSize: 16 }}>Inputkan</Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}

export default Post

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