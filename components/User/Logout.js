import { useContext } from "react"
import { Button, Text } from "react-native"
import MyContext from "../../configs/MyContext"
import { TouchableOpacity } from "react-native-gesture-handler"

const Logout = () => {
    const [state, dispatch] = useContext(MyContext)

    const logout = () => {
        dispatch({
            type: "logout",
            payload: {
                user: null,
                accessToken: null
            }
        })
    }

    return (
        <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
        </TouchableOpacity>
    )
}

export default Logout