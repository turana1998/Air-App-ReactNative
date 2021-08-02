import React from 'react';
import { View, Text, ImageBackground, Pressable, StatusBar } from 'react-native';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FastImage from 'react-native-fast-image'

const Home = () => {
    return (
        <View >


            <ImageBackground
                source={require('../../../assets/images/bg.jpg')}
                style={styles.image}>

<Pressable style={styles.search}
                onPress={() => console.warn("press")}>
                <Fontisto name="search" size={24} color={'#f15454'}></Fontisto>
                <Text style={styles.searchText} >Explore more </Text>
            </Pressable>
               <View style={styles.cont}>
               <Text style={styles.title}>Go Near</Text>
               <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stassys</Text>
        </Pressable>
               </View>
               
            </ImageBackground>
        </View>
    )
}

export default Home;