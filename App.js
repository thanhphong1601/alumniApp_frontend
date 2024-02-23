import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyContext from './configs/MyContext';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Login from './components/User/Login';
import MyUserReducer from './reducers/MyUserReducer'
import Logout from './components/User/Logout';
import Register from './components/User/Register';
import Profile from './components/ProfileUser/Profile';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';


const Drawer = createDrawerNavigator()

export default function App() {
  const [user, dispatch] = useReducer(MyUserReducer, null)

  return (
    <MyContext.Provider value={[user, dispatch]}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login' drawerContent={MyDrawerItem}>
          <Drawer.Screen name="Home" component={Home} />
          {user===null?<>
            <Drawer.Screen name="Login" component={Login} options={{drawerIcon: null}} />
            <Drawer.Screen name="Register" component={Register}/>
          </>:<>
            <Drawer.Screen name="Account Profile" component={Profile} />
            <Drawer.Screen name="Update Profile" component={UpdateProfile} options={{drawerItemStyle:{
              display: "none"
            }}}/>
          </>}

        </Drawer.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
    
    
  );
}

const MyDrawerItem = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label={Logout}/>
    </DrawerContentScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
