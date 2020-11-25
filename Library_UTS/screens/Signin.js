import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,
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
  illustration: {
    width: 312,
    height: 234,
  },
  selamat: {
    marginTop: 32,
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
    paddingHorizontal:160,
    fontSize:16,
    alignItems: 'center',
  },
});

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerLogin = () => {
    navigation.navigate('TabNavigasi');
  };

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
      style= {{width:"110%", height:300}}/>
          
        </View>
        <Text style={styles.selamat}>Selamat datang </Text>
        <Text style={styles.ket}>Aplikasi ini dapat membantu anada dalam 
                                mencari buku untuk membantu dalam proses
                                pembelajaran di Kampus dan sekolah</Text>
        <Text style={styles.login}>Silahkan Login</Text>

        <View>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={[styles.input, { marginBottom: 20 }]}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handlerLogin}
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
          Dont have an account?
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
