import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center"   
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
        borderWidth: 1,
        borderColor: "#000000",
        borderStyle: "solid"
    }
})

export default styles;