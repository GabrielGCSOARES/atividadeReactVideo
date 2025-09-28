import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#d9d9d9",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
        
    },
    texto:{
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    },
    botao:{
        backgroundColor: "#6e4747ff",
        height: 50,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
        
    },
    link:{
        marginTop: 20
    },
    textos:{
        color: "#000000",
        fontSize: 16
    },
    foto:{
        width: 300,
        height: 300,
        borderRadius: 8,
    },
   
})

export default styles;