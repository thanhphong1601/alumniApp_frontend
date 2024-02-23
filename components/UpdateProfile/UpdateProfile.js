import { useContext, useState } from "react"
import { Button, Text, TouchableOpacity, View } from "react-native"
import MyContext from "../../configs/MyContext"
import { TextInput } from "react-native-gesture-handler"
import Styles from "./Styles"

const UpdateProfile = () => {
    const [user, ] = useContext(MyContext)
    const [user_, setUser] = useState({
        "id": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "avatar": "",
        "cover_image": ""
    })
    const check = () => {
        console.info(user.id)
        console.info(user_.id)
    }

    user_.id = user.id

    return (
        <View style={Styles.container}>
            <View style={Styles.smallView}>
                <Text style={Styles.textLabel}>First Name</Text>
                <TextInput style={Styles.input}/>
                <Text style={Styles.textLabel}>Last Name</Text>
                <TextInput style={Styles.input}/>
                <Text style={Styles.textLabel}>Email</Text>
                <TextInput style={Styles.input}/>
                <View style={{flexDirection: "row"}}>
                    <Text style={Styles.labelAvatar}>Avatar</Text>
                    <TouchableOpacity>
                        <Text style={Styles.buttonImg}>Choose a picture</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={Styles.labelAvatar}>Cover Image</Text>
                    <TouchableOpacity>
                        <Text style={Styles.buttonImg}>Choose a picture</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity>
                    <Text style={Styles.buttonUpdate}>Update</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default UpdateProfile