import { useContext } from "react"
import { Text, View } from "react-native"
import MyContext from "../configs/MyContext"


const Home = ({route}) => {
    const [state, dispatch] = useContext(MyContext)

    return (
        <View>
            {state.user === null ? <>

                <Text>Hello! This is Home page</Text>

            </> : <>
                <Text>Hello {state.user.first_name} {state.user.last_name}`</Text>
            </>}
        </View>
        
        
    )
}

export default Home