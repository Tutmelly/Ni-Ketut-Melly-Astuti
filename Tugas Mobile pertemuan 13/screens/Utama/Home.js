import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //import ikon
import { StyleSheet, View, Text, Image, 
} from 'react-native';
import img from '../../assets/image/cvr.jpg'; //import gambar

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:50,
  },
});
// memanggil halaman
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>

      <View>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
          padding:10,
          textAlign:"center",
          backgroundColor:"#efcb35",
          color: "black",
          marginTop:30,
          marginBottom:20,
          }}>
          Home
        </Text>
      </View>

    <Image
         style= {{width:"100%", height:200}}
        source={img} //berdasarkan deklarasi import diatas
      />

    <View style={{
          ...styles.flexRow,
          marginTop: 24,
          justifyContent: 'space-evenly',
        }}>
          <View style={{ 
            alignItems: 'center',
             }}>
            <MaterialCommunityIcons
              name="desktop-mac-dashboard"
              size={80}
              color={"#e82525"}
              onPress={() => navigation.navigate('BookLis')} // mengarahkan ke halaman book list
            />
            <Text style={{ 
              color: "black",
              fontWeight:"bold",
              fontSize: 18
             }}> Teknologi 
             </Text>
          </View>
          
          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="collage"
              size={80}
              color={"#e89c25"}
              onPress={() => navigation.navigate('BookLis')}
            />
            <Text style={{ 
                color: "black",
                fontWeight:"bold",
                fontSize: 18
             }}> Acak </Text>
          </View>
        </View>

        <View style={{
          ...styles.flexRow,
          marginTop: 24,
          justifyContent: 'space-evenly',
        }}
        >
        <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="chart-line-stacked"
              size={80}
              color={"#25e85c"}
              onPress={() => navigation.navigate('BookLis')}
            />
            <Text style={{ 
              color: "black",
              fontWeight:"bold",
              fontSize: 18
             }}> Terpopuler </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="book-plus-multiple"
              size={80}
              color={"#2585e8"}
               onPress={() => navigation.navigate('BookLis')}
            />
            <Text style={{ 
              color: "black",
              fontWeight:"bold",
              fontSize: 18
           }}>Terbaru</Text>
          </View>
      </View>
  </View>
);

export default HomeScreen;
