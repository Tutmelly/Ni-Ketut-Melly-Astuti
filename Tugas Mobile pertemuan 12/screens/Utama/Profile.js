import React from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BookLis from '../BookLis';
import bgprofil from '../../assets/image/bgprofil.jpg';
import penulis from '../../assets/image/profilpenulis.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  penulis: {
    width: 100,
    height: 100,
  },
  imageOuterWrapper: {
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  imageInnerWrapper: {
    zIndex: 1,
    borderRadius:50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: "white",
  },
  t1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  t2: {
    marginTop: 4,
    color: "#929292",
  },
  btn: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "#efcb35",
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  baca: {
    marginLeft: 4,
    color: "white",
  },

});

const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{ position: 'relative' }}>
      <Image
        style={styles.banner}
        source={bgprofil}
      />
      <View style={styles.imageOuterWrapper}>
        <View style={styles.imageInnerWrapper}>
          <Image
            style={styles.penulis}
            source={penulis}
          />
        </View>
      </View>
    </View>
    <ScrollView>
      <View style={{ alignItems: 'center', marginTop: 58, paddingHorizontal: 24 }}>
        <Text style={styles.t1}>Yusli Effendi</Text>
        <Text style={styles.t2}>Penulis</Text>
        <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons
          
            name="plus"
            size={24}
            color={"white"}
          />
          <Text style={styles.baca}>Daftar Bacaan </Text>
        </TouchableOpacity>
      </View>
  
      <View>
    <BookLis navigation={navigation} />
    </View>

    </ScrollView>
  </View>
);

export default ProfileScreen;
