import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Style from "./Style"
import { useContext, useState } from "react"
import MyContext from "../../configs/MyContext"
import * as ImagePicker from 'expo-image-picker';
import API, { authApi, endpoinds } from "../../configs/API"





const Register = ({ navigation }) => {

    const [confirmPwd, setConfirmPwd] = useState("")
    const [user, setUser] = useState({
        "first_name": "",
        "last_name": "",
        "username": "",
        "password": "",
        "email": "",
        "avatar": "",
        "student_id": ""
    })


    const [loading, setLoading] = useState(false)
    const register = async () => {
        setLoading(true);

        if (checkPwd(user.password, confirmPwd)) {

            const form = new FormData()
            for (let key in user)
                if (key === 'avatar') {
                    form.append(key, {
                        uri: user[key].uri,
                        name: user[key].fileName,
                        type: user[key].mimeType, //'image/jpeg'
                    })
                    console.info(user[key].mimeType)
                } else
                    form.append(key, user[key])

            try {
                let res = await API.post(endpoinds['register'], form, {
                    method: 'POST',
                    body: form,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                console.info(res.data)
                navigation.navigate("Login")
            } catch (ex) {
                console.error(ex)
            } finally {
                setLoading(false)
            }
        } else {
                alert("Mật khẩu xác nhận không chính xác! Hãy nhập lại")
            }
        }


    const picker = async () => {
        let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
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


    const checkPwd = (passwd, conf_passwd) => {
        if (passwd === conf_passwd)
            return true
        return false
    }

    //test func
    let check = checkPwd(user.password, confirmPwd)
    const test = () => {
        console.info(check)
    }

    return (<View style={Style.containter}>
        <View style={Style.containerSmall_Register}>
            <Text style={Style.titleRegister}>Registration</Text>
            <TextInput value={user.first_name} onChangeText={t => change("first_name", t)} style={Style.input_Register} placeholder="First name"/>
            <TextInput value={user.last_name} onChangeText={t => change("last_name", t)} style={Style.input_Register} placeholder="Last name"/>
            <TextInput value={user.username} onChangeText={t => change("username", t)} style={Style.input_Register} placeholder="Username"/>
            <TextInput value={user.password} onChangeText={t => change("password", t)} secureTextEntry={true} style={Style.input_Register} placeholder="Password"/>
            <TextInput value={confirmPwd} onChangeText={t => setConfirmPwd(t)} secureTextEntry={true} style={Style.input_Register} placeholder="Comfirm Password"/>
            <TextInput value={user.email} onChangeText={t => change("email", t)} style={Style.input_Register} placeholder="Email"/>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={Style.txtAvatar}>Avatar</Text>
                <TouchableOpacity onPress={picker} value={user.avatar}>
                    {user.avatar ? <Image style={Style.avatar} source={{ uri: user.avatar.uri }} /> : <>
                        <Text style={Style.input_Register}>Choose a picture</Text>
                    </>}
                </TouchableOpacity>

            </View>
            

            <TextInput value={user.student_id} onChangeText={t => change("student_id", t)} style={Style.input_Register} placeholder="Student ID"/>
            <TouchableOpacity onPress={register}>
                    <Text style={Style.buttonLogin}>Register</Text>
            </TouchableOpacity>
        </View>

    </View>
)
    }

export default Register