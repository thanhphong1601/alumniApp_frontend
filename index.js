import { registerRootComponent } from 'expo';


import App from './App';
import DropdownComponent from './components/User/DropdownComponent';
import Login from './components/User/Login';
import Register from './components/User/Register';


//import Login from './components/User/Login';
//import Logout from './components/User/Logout';

//registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Register);
