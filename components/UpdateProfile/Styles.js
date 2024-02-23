import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    smallView: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        margin: 10
    },
    textLabel: {
        fontSize: 20,
        backgroundColor: "whitesmoke",
        marginBottom: -10,
        width: 120,
        marginLeft: 15,
        borderRadius: 10,
        textAlign: "center",
        zIndex: 1
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 8,
        fontSize: 20,
        backgroundColor: "whitesmoke"
    },
    labelAvatar: {
        fontSize: 20,
        marginLeft: 20,
        margin: 10,
        marginTop: 14
    },
    buttonImg: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: "gray",
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10
    },
    buttonUpdate: {
        fontSize: 50,
        color: "whitesmoke",
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 2,
        borderRadius: 50,
        margin: 10,
        backgroundColor: "black"
    }
})