import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './HomeStyles';

export default function Home({navigation}: any) {
    function navToGallery(){
        navigation.navigate('Gallery');
    }
    function navToCriar(){
        navigation.navigate('Criar');
    }
    function navToServicos(){
        navigation.navigate('Servicos');
    }
    return(
        <View style={styles.container}>
            <Image style={styles.foto} source={require('../../assets/a.png')}></Image>
            <Pressable style={styles.botao} onPress={navToServicos}>
                <Text style={styles.texto}>Serviços</Text>
            </Pressable>

            <Pressable style={styles.botao} onPress={navToGallery}>
                <Text style={styles.texto}>Conta</Text>
            </Pressable>

            <Pressable style={styles.link} onPress={navToCriar}>
                <Text style={styles.textos}>Ainda não tem uma conta?</Text>
            </Pressable>
        </View>
    );
}