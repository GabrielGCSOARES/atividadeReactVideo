import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#a49f9fff",
        justifyContent: "center",
        alignItems: "center",   
    },
    texto:{
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
    },
    foto:{
        width: 300,
        height: 300,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#000000",
        borderStyle: "solid"
    },
     botaoVoltar: {
        backgroundColor: '#6e4747ff',
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 2,
        borderColor: "#000000",
        borderStyle: "solid"
    }
})

export default styles;