import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import book1 from '../assets/image/b1.jpg';
import book2 from '../assets/image/b2.jpg';
import book3 from '../assets/image/b3.jpg';

const styles = StyleSheet.create({

  judul: {
    fontSize: 15,
    fontWeight:"bold",
    textAlign:"center",
  },
  clickimg: {
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: 12,
  },
  penulis: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 15,
    color:"#2585e8",
    flexDirection: 'row',
    marginBottom:20
  },

});

const BookLisScreen = ({ navigation }) => (
  <View style={{ marginBottom: 24,
  marginTop:40,
  padding:20 }}>
    <ScrollView>    
      <Text style={styles.judul}>GOLOKALISASI</Text>   
    <TouchableOpacity
      style={styles.clickimg}
      onPress={() => navigation.navigate('Details')}>
      <Image
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
        }}
        source={book1}/>
    </TouchableOpacity>
    <View>
    <View style={{ flexDirection: 'row',}}>
    <Text style={{ 
        color: "black", 
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 15,
        }}>
        Penulis :
      </Text>
      <Text style={styles.penulis}> Yusli Effendi, dkk</Text> 
      </View>
    </View>


    <Text style={styles.judul}>101+ BIKIN MAHIR IT</Text>  
    <TouchableOpacity
      style={styles.clickimg}
      onPress={() => navigation.navigate('Details')}>
      <Image
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
        }}
        source={book2}/>
    </TouchableOpacity>
    <View>
    <View style={{ flexDirection: 'row',}}>
    <Text style={{ 
        color: "black", 
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 15,
        }}>
        Penulis :
      </Text>
      <Text style={styles.penulis}> Feri Sulianta</Text> 
      </View>
    </View>


    <Text style={styles.judul}>MENERANGI SEMESTA DENGAN ILMU PENGETAHUAN </Text>
    <TouchableOpacity
      style={styles.clickimg}
      onPress={() => navigation.navigate('Details')}>
      <Image
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
        }}
        source={book3}/>
    </TouchableOpacity>
    <View>
    <View style={{ flexDirection: 'row',}}>
    <Text style={{ 
        color: "black", 
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 15,
        }}>
        Penulis :
      </Text>
      <Text style={styles.penulis}> Junior High School 2 of Jonggol</Text> 
      </View>
      </View>
    </ScrollView>  
  </View>

);
export default BookLisScreen;
