import React from "react";
import { View, Text, Image } from "react-native";
import styles from './GalleryStyles';


export default function Gallery() {
    return(
        <View style = {styles.container}>
            <Image style = {styles.foto} source={require('../../assets/FelcaBase.jpg')}></Image>
            <Text style = {styles.texto}>Sidinei</Text>
        </View>
    );
}