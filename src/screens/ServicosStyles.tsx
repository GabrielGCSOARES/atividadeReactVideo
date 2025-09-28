import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a49f9fff",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
        borderRadius: 10,
    },
    botao: {
        backgroundColor: '#6e4747ff',
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "#000000",
        borderStyle: "solid"
    },
    botaoVoltar: {
        backgroundColor: '#333333',
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "#000000",
        borderStyle: "solid"
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullScreenVideo: {
        width: '100%',
        height: '80%',
    },
    closeButton: {
        backgroundColor: '#6e4747ff',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    closeText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;