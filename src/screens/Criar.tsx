import { View, Text, Image, Pressable } from "react-native";
import styles from './CriarStyles';
import React from "react";
import { useNavigation } from '@react-navigation/native';


export default function Criar() {
    const navigation = useNavigation();
    return(
        <View style = {styles.container}>
            <Image style = {styles.foto} source = {require('../../assets/cassio.png')}></Image>
            <Text style = {styles.texto}>Felca</Text>
            <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.texto}>Voltar para Home</Text>
            </Pressable>
        </View>
    );
}