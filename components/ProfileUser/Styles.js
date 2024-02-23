import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    coverImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginTop: -50, // Để avatar chồng lên cover image
      borderWidth: 2,
      borderColor: 'white',
      marginLeft: 10
    },
    fullName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 1,
      paddingLeft: 10,
    },
    mail: {
      fontSize: 16,
      color: 'gray',
      marginLeft: 8
    },
    updateButton: {
        fontSize: 15,
        fontWeight: "bold",
        borderWidth: 2,
        padding: 8,
        marginTop: 10,
        marginLeft: 110,
        borderRadius: 20, 
    }
  });

