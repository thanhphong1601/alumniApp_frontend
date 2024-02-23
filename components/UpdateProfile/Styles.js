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
        backgroundColor: "whitesmoke",
        borderColor:"#4482C1"
    },
    labelAvatar: {
        fontSize: 20,
        marginLeft: 20,
        margin: 10,
        marginTop: 30
    },
    buttonImg: {
        fontSize: 20,
        margin: 5,
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: "#C0C0F2",
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        position: "relative",
        
    },
    buttonUpdate: {
        fontSize: 50,
        color: "whitesmoke",
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: 50,
        margin: 10,
        marginTop: 5,
        padding: 5,
        backgroundColor: "#2A547E"
    },
    img: {
        width: 100,
        height: 100,
        margin: 10
    }
})