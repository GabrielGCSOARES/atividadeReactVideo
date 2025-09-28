import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from './GalleryStyles';
import { useNavigation } from '@react-navigation/native';

export default function Gallery() {
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            <Image style = {styles.foto} source={require('../../assets/FelcaBase.jpg')}></Image>
            <Text style = {styles.texto}>Sidinei</Text>
            <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.texto}>Voltar para Home</Text>
            </Pressable>
        </View>
    );
}