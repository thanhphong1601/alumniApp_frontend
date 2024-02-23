import { ActivityIndicator, Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import Style from "./Style"
import { Component, useContext, useState } from "react"
import MyContext from "../../configs/MyContext"
import API, { authApi, endpoinds } from "../../configs/API"
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';
import dropdownStyle from "./dropdownStyle";
import QueryString from "qs"


const Login = ({ navigation }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [state, dispatch] = useContext(MyContext)
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    var qs = require('qs');

    //async storage
    //end async storage

    //for dropdownlist
    const role = [
        {label: 'Alumni', value: 1},
        {label: 'Lecturer', value: 2},
        {label: 'Admin', value: 3},
    ]
    
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[dropdownStyle.label, isFocus && { color: 'white' }]}>
            Your Role
          </Text>
        );
      }
      return null;
    };
    
    const login = async () => {
        setLoading(true)

        try {
            let res = await API.post(endpoinds['login'], qs.stringify ({
                "username": username,
                "password": password,
                "role" : value,
                "client_id": "qzY70fk6tTqAbaQGsjff7nywCwGQLsFvzrPoVXxq",
                "client_secret": "LAVcESiVijcurMyhze6Ev9gJw7qmBLFGw5hGvGACCOsad1EWohuFOSKta6I4aanrriZqjl6DkS282wfsIh3AVrcVXMgxCDa2govw4pDpacXd3QP4rC1zrJxRH3Cq7jYF",
                "grant_type": "password"
            }))

            let user = await authApi(res.data.access_token).get(endpoinds['current-user'])
            dispatch({
                type: "login",
                payload:{
                    user: user.data,
                    accessToken: res.data.access_token
                }
            })
            console.info(user.data)
            navigation.navigate("Home")
            // if (username === 'admin' && password === '123') {
            //     dispatch({
            //         type: "login",
            //         payload: {
            //             "username": 'admin'
            //         }
            //     })
            //     navigation.navigate("Home")
            // }
        } catch (ex) {
            console.error(ex)
        } finally {
            setLoading(false)
        }

    }
    
    const registerNavigate = () => {
        navigation.navigate("Register")
    }

    return (<View style={Style.containter}>

        <View style={Style.containerSmall}>
            <Text style={Style.title}>Login</Text>
            <View style={dropdownStyle.container}>
                {renderLabel()}
                <Dropdown
                    style={[dropdownStyle.dropdown, isFocus && { borderColor: 'whitesmoke' }]}
                    placeholderStyle={dropdownStyle.placeholderStyle}
                    selectedTextStyle={dropdownStyle.selectedTextStyle}
                    inputSearchStyle={dropdownStyle.inputSearchStyle}
                    iconStyle={dropdownStyle.iconStyle}
                    data={role}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}

                />
            </View>
            <View>
                <Text style={Style.textLabel}>Username</Text>
                <TextInput value={username} onChangeText={t => setUsername(t)} style={Style.input} placeholder="Your username" maxLength={20} />
            </View>
            <View>
                <Text style={Style.textLabel}>Password</Text>
                <TextInput value={password} onChangeText={t => setPassword(t)} secureTextEntry={true} style={Style.input} placeholder="Your password" maxLength={20} />
            </View>
            {loading === true ? <ActivityIndicator /> : <>
                <TouchableOpacity onPress={login}>
                    <Text style={Style.buttonLogin} >Log in</Text>
                </TouchableOpacity>

            </>}
            <TouchableOpacity onPress={registerNavigate} style={Style.touchableOpa}>
                <Text style={Style.buttonRegister} >Register One</Text>
            </TouchableOpacity>


        </View>


    </View>
    )
}

export default Login