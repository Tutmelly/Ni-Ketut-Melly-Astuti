import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput
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
  judul: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign:"center"
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
});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const gohome = () => {
      navigation.navigate('TabNavigasi');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{
        padding: 24,
        paddingTop: Constants.statusBarHeight,
      }}>
        <View style={[styles.posisi]}>
          <Image
      source ={require ('../assets/image/logo.png')}
      style= {{width:"110%", height:300}}/>
          
        </View>
        <View style={{ 
          marginTop: 32, 
          marginBottom: 16,
           }}>
          <Text style={styles.judul}>Create Akun</Text>
        </View>

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
            secureTextEntry
            style={styles.input}
          />
        <TextInput
            value={confirmPass}
            onChangeText={setConfirmPass}
            placeholder="Password"
            secureTextEntry
            style={[styles.input, { marginBottom: 20 }]}
          />
        </View>

        <TouchableOpacity
            style={styles.button}
            onPress={gohome}
          >
            <Text style={{ 
              color:"black",
              fontSize:16
               }}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
