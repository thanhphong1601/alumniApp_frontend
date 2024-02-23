import { useContext, useEffect } from "react"
import MyContext from "../../configs/MyContext"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import Styles from "./Styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import UpdateProfile from "../UpdateProfile/UpdateProfile"

const Profile = ({ navigation }) => {
  const [state,] = useContext(MyContext)
  
  useEffect(() => {
  }, [state.user])

  //check func
  const check = () => {
    console.info(state.user)
  }
  //just check

  const updatePageNavigate = () => {
    navigation.navigate("Update Profile")
  }

  return (
    <View style={Styles.container}>
      <View style={{ flex: 2 }}>
        <Image source={{ uri: state.user.cover_image }} style={Styles.coverImage} />
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image source={{ uri: state.user.avatar }} style={Styles.avatar} />
            <Text style={Styles.fullName}>{state.user.first_name} {state.user.last_name}</Text>
            <Text style={Styles.mail}>{state.user.email}</Text>
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