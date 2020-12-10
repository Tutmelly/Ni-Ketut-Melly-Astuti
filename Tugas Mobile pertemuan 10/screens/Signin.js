import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  posisi: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selamat: {
    marginTop: 10,
    textAlign:"center",
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 25,
  },
  ket:{
    textAlign:"center",
    marginBottom: 8,
    fontSize: 15,
  },
  login:{
    marginTop: 12,
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    borderColor: "#c6cacc",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#efcb35",
    borderRadius: 6,
    padding: 16,
    paddingHorizontal:120,
    alignItems: 'center',
  },
  buttonsn: {
    backgroundColor: "#efcb35",
    borderRadius: 6,
    padding: 16,
    paddingHorizontal:155,
    fontSize:16,
    alignItems: 'center',
  },
});

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const AuthLogin = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpq1OI-gtcFYMu6hdaxPgK39Mgvf0Yvrs", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    const resData = await response.json()
    if (response.ok){
      await navigation.navigate('TabNavigasi')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }


  // const handlerLogin = () => {
  //   navigation.navigate('TabNavigasi');
  // };

  return (
    <ScrollView style={styles.container}>
      <View style={{
        padding: 24,
        paddingTop: Constants.statusBarHeight,
      }}
      >
        <View style={[styles.posisi]}>
          <Image
      source ={require ('../assets/image/logo.png')}
      style= {{width:"110%", height:275}}/>
          
        </View>
        <Text style={styles.selamat}>Selamat datang </Text>
        <Text style={styles.ket}>Aplikasi ini dapat membantu anda dalam 
                                mencari buku dalam proses
                                pembelajaran</Text>
        <Text style={styles.login}> Login</Text>

        <View>
          <TextInput
            value={email}
            placeholder="Email"
            style={styles.input}
            onChangeText= {(text) => {
              setEmail(text)
          }}
          />
          <TextInput
            value={password}
            placeholder="Password"
            style={[styles.input, { marginBottom: 20 }]}
            secureTextEntry
            onChangeText= {(text) => {
              setPassword(text)
          }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={AuthLogin}
          >
            <Text style={{ 
              color:"black",
              fontSize:16
               }}>Login</Text>
          </TouchableOpacity>

          <View style={[styles.posisi, styles.row]}>
          <Text style={{ 
            color: "black",
            marginTop:20,
            fontSize:15,
            marginBottom:10 }}>
          Don't have an account?
          </Text>
          <TouchableOpacity
            style={styles.buttonsn}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={{ color: "black" }}>Sign Up</Text>
          </TouchableOpacity>
      </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SigninScreen;
