import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Style from "./Style"
import { useContext, useState } from "react"
import MyContext from "../../configs/MyContext"
import * as ImagePicker from 'expo-image-picker'; 





const Register = ({navigation}) => {

    const [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "username": "",
        "password": "",
        "avatar": ""
    })
    const [loading, setLoading] = useState(false)


    const register = () => {

    }

    const picker = async () => {
        let {status} = ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status !== 'granted') {
            alert("Permission Denied!");
        } else {
            let res = await ImagePicker.launchImageLibraryAsync();
            if (!res.canceled) {
                change("avatar", res.assets[0])
            }
        }
    }

    const change = (field, value) => {
        setUser(current => {
            return {...current, [field]: value}
        })
    }

    return (<View style={Style.containter}>
        <View style={Style.containerSmall}>
            <Text style={Style.titleRegister}>Registration</Text>
            <TextInput value={user.first_name} onChangeText={t => change("first_name", t)} style={Style.input} placeholder="First name"/>
            <TextInput style={Style.input} placeholder="Last name"/>
            <TextInput secureTextEntry={true} style={Style.input} placeholder="Password"/>
            <TextInput secureTextEntry={true} style={Style.input} placeholder="Comfirm Password"/>
            <TextInput style={Style.input} placeholder="Email"/>
            <View style={{flexDirection: "row"}}>
                <Text style={Style.txtAvatar}>Avatar</Text>
                <TouchableOpacity onPress={picker}>
                    <Text>Choose a picture</Text>
                </TouchableOpacity>
            </View>
            {user.avatar?<Image source={{uri: user.avatar.uri}}/>:""}

            <TextInput style={Style.input} placeholder="Student ID"/>
            <TouchableOpacity>
                <Text style={Style.buttonLogin}>Register</Text>
            </TouchableOpacity>
        </View>

    </View>
)}

export default Register