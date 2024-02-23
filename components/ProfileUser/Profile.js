import { useContext } from "react"
import MyContext from "../../configs/MyContext"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import Styles from "./Styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import UpdateProfile from "../UpdateProfile/UpdateProfile"

const Profile = ({ navigation }) => {
  const [user,] = useContext(MyContext)
  
  //check func
  const check = () => {
    console.info(user)
  }
  //just check

  const updatePageNavigate = () => {
    navigation.navigate("Update Profile")
  }

  return (
    <View style={Styles.container}>
      <View style={{ flex: 2 }}>
        <Image source={{ uri: user.cover_image }} style={Styles.coverImage} />
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={{ uri: user.avatar }} style={Styles.avatar} />
            <Text style={Styles.fullName}>{user.first_name} {user.last_name}</Text>
            <Text style={Styles.mail}>{user.email}</Text>
          </View>

          <View>
            <TouchableOpacity onPress={updatePageNavigate}>
              <Text style={Styles.updateButton}>Update Profile</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
      <View style={{ flex: 3, backgroundColor: "gray" }}>
        <Text>POSTS HERE(Scroll View)</Text>
      </View>

    </View>

  )
}

export default Profile