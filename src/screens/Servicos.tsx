import React, { useState } from 'react';
import { View, Image, Pressable, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import styles from './ServicosStyles';
import WebView from 'react-native-webview';

export default function Servico() {
    const [mediaVisible, setMediaVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Hana.png')} style={styles.image}/>
            
            <Pressable style={styles.botao} onPress={() => setMediaVisible(true)}>
                <Text style={styles.texto}>Assistir Vídeo</Text>
            </Pressable>

            <Modal visible={mediaVisible} animationType="slide" onRequestClose={() => setMediaVisible(false)}>
                <View style={styles.modalContainer}>
                    <iframe width="500" height="500" src="https://www.youtube.com/embed/nlUxwOw5pfY" frameBorder="0" allowFullScreen></iframe>
                    
                    <Pressable style={styles.closeButton} onPress={() => setMediaVisible(false)}>
                        <Text style={styles.closeText}>Fechar Vídeo</Text>
                    </Pressable>
                </View>
            </Modal>

            <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                <Text style={styles.texto}>Voltar para Home</Text>
            </Pressable>
        </View>
    );
}