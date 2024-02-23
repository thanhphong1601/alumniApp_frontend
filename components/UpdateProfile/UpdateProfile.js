import { useContext, useState } from "react"
import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import MyContext from "../../configs/MyContext"
import { TextInput } from "react-native-gesture-handler"
import Styles from "./Styles"
import * as ImagePicker from 'expo-image-picker';
import API, { authApi, endpoinds } from "../../configs/API"
import axios, { Axios } from "axios"


const UpdateProfile = ({navigation}) => {
    const [state, ] = useContext(MyContext)
    const [user_, setUser] = useState({
        "first_name": state.user.first_name,
        "last_name": state.user.last_name,
        "email": state.user.email,
        "avatar": "",
        "cover_image": ""
    })
    const [loading, setLoading] = useState("false")

    //test func
    const check = () => {
        console.info(state.user.id)
    }
    //test

    //color picker
    const pickerAvatar = async () => {
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
    const pickerCoverImg = async () => {
        let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status !== 'granted') {
            alert("Permission Denied!");
        } else {
            let res = await ImagePicker.launchImageLibraryAsync();
            if (!res.canceled) {
                change("cover_image", res.assets[0])
            }
        }
    }
    //done color picker

    //handle update event
    const handleUpdate = async () => {
        setLoading(true)
    
        const form = new FormData()
        for (let key in user_)
            if (key === 'avatar' || key === 'cover_image') {
                form.append(key, {
                    uri: user_[key].uri,
                    name: user_[key].fileName,
                    type: user_[key].mimeType, //'image/jpeg'
                })
            } else
                form.append(key, user_[key])

        try {
            let res = await authApi(state.accessToken).patch(endpoinds['user-update'](state.user.id), form, {
                method: 'PATCH',
                body: form,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.info(res.data)
        } catch (ex) {
            console.error(ex)
        } finally {
            setLoading(false)
        }

        navigation.navigate("Account Profile")

    } 

    const change = (field, value) => {
        setUser(current => {
            return {...current, [field]: value}
        })
    }
    //done handle update event

    return (
        <View style={Styles.container}>
            <View style={Styles.smallView}>
                <Text style={Styles.textLabel}>First Name</Text>
                <TextInput value={user_.first_name} onChangeText={t => change("first_name", t)} style={Styles.input}/>
                <Text style={Styles.textLabel }>Last Name</Text>
                <TextInput value={user_.last_name} onChangeText={t => change("last_name", t)} style={Styles.input} />
                <Text style={Styles.textLabel}>Email</Text>
                <TextInput value={user_.email} onChangeText={t => change("email", t)} style={Styles.input} />
                <View style={{flexDirection: "row"}}>
                    <Text style={Styles.labelAvatar}>Avatar</Text>
                    <TouchableOpacity onPress={pickerAvatar} value={user_.cover_image}>
                    {user_.avatar ? <Image style={Styles.img} source={{ uri: user_.avatar.uri }} /> : <>
                            <Text style={Styles.buttonImg}>Choose a picture</Text>
                    </>} 
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={Styles.labelAvatar}>Cover Image</Text>
                    <TouchableOpacity onPress={pickerCoverImg} value={user_.avatar}>
                    {user_.cover_image ? <Image style={Styles.img} source={{ uri: user_.cover_image.uri }} /> : <>
                            <Text style={Styles.buttonImg}>Choose a picture</Text>
                    </>} 
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={handleUpdate}>
                    <Text style={Styles.buttonUpdate}>Update</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default UpdateProfile