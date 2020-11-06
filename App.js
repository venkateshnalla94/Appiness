import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen';
import EmployeeListScreen from './src/screens/EmployeeListScreen';
import {Provider as AuthProvider} from "./src/context/AuthContext";

const navigator=createSwitchNavigator({
    Login: LoginScreen,
    EmployeeList:EmployeeListScreen
  },{
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'Login'
    }
})

const App = createAppContainer(navigator);

export default () => {
  return <AuthProvider>
       <App/>
  </AuthProvider>
};

