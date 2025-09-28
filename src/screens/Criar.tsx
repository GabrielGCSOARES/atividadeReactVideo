import { View, Text, Image } from "react-native";
import styles from './CriarStyles';


export default function Criar() {
    return(
        <View style = {styles.container}>
            <Image style = {styles.foto} source = {require('../../assets/cassio.png')}></Image>
            <Text style = {styles.texto}>Felca</Text>
        </View>
    );
}