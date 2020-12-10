import React from 'react';
import {
  StyleSheet, Text, View, Image,TouchableOpacity
} from 'react-native';
import b1 from '../assets/image/b1.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",  
  },
  buttonsn: {
    backgroundColor: "#efcb35",
    borderRadius: 6,
    padding: 16,
    fontSize:16,
    alignItems: 'center',
  },
  b1: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  judul: {
    fontSize:20,
    fontWeight: '700',
    marginBottom: 16,
  },
  penulis: {
    color: "#b5b4b0",
    marginBottom: 16,
  },
  sinopsisjudul: {
    color: "black",
    marginBottom: 5,
    fontWeight:"bold",
  },
  sinopsis: {
    color: "black",
    marginBottom: 5,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const DetailsScreen = ({navigation}) => (
  <View style={styles.container}>

      <View>
        <Image
          style={styles.b1}
          source={b1}
        />

      <View style={{ padding: 24 }}>
        <Text style={styles.judul}>GOLOKALISASI</Text>
        <Text style={styles.penulis}>
          Penulis : Yusli Effendi
        </Text>
        <Text style={styles.sinopsisjudul}>
          Sinopsis :
        </Text>
        <Text style={styles.sinopsis}>
          Kisah sukses globalisai yang diyakini mampu melipat ruang dan waktu, membuat kita bak 
          desa global dengan lokomotif kapitalisme sebagai kendaraan tunggal satu arah yang 
          dipicu kencang menuju akir sejarah manusia 
        </Text>
        <Text style={styles.sinopsis}>
          padahal, saking kencangnya globalisasi neoliberal, gerakan protes yang muncul aibat 
          ketimpangan dan ketidakadilan sosial yang diakibatkannya, tak mampu mengjentikan lajunya
        </Text>
      </View>
      </View>

      <TouchableOpacity
            style={styles.buttonsn}        
            onPress={() => navigation.navigate('Post')}
          >
            <Text style={{ color: "black" }}>Tambahkan buku</Text>
          </TouchableOpacity>

  </View>
);
export default DetailsScreen;
