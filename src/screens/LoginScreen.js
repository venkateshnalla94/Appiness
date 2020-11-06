import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
     const [userName, setUserName] = useState('');
     const [password, setPassword] = useState('');
     const {state, login_reducer,access} = useContext(AuthContext);
     
     React.useEffect(() => {
          if (state.allow === 'fail') {
               InCorrectCreds();
               console.log('Error should be here last');
               access();
          }
     }, [state.allow]);
     
     /**
      * Validation
      * @param userName -user name of the user
      * @param password -password associated to the user name
      */
     const checkValidations = (userName, password) => {
          if (checkUsername(userName) && checkPassword(password)) {
               login_reducer({userName, password, navigation});
               if (state.allow === 'fail') {
                    InCorrectCreds();
                    console.log('Error should be here last');
               }
          }
     };
     
     const checkUsername = (userName) => {
          if (userName.indexOf(' ') >= 0 || (!userName.includes('@gmail.com'))) {
               createAlert('Username');
               return false;
          } else {
               return true;
          }
          
     };
     const checkPassword = (password) => {
          if (!password) {
               createAlert('Password');
               return false;
          } else if (password.length <= 7) {
               minimumLengthOfPassword('Password');
               return false;
          } else {
               return true;
          }
     };
     
     const createAlert = (inputType) =>
          Alert.alert(
               'Please Check ' + inputType,
               [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
               ],
               {cancelable: false},
          );
     
     const minimumLengthOfPassword = (inputType) =>
          Alert.alert(
               inputType + ' cannot be less than 8 characters',
               [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
               ],
               {cancelable: false},
          );
     
     const InCorrectCreds = () =>
          Alert.alert(
               'Incorrect username or Password',
               [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
               ],
               {cancelable: false},
          );
     
     
     return (
          <View style={styles.parent}>
               <Text style={styles.loginFont}>LoginScreen</Text>
               <View style={styles.childView}>
                    <Input
                         autoCapitalize={'none'}
                         autoCorrect={false}
                         label={'Email'}
                         value={userName}
                         onChangeText={setUserName}
                    />
                    <Input
                         secureTextEntry={true}
                         autoCapitalize={'none'}
                         autoCorrect={false}
                         label={'Password'}
                         value={password}
                         onChangeText={setPassword}
                    />
                    <Button title={'Login'} onPress={() => {
                         checkValidations(userName, password, navigation);
                    }}/>
               
               </View>
          
          </View>
     );
};

const styles = StyleSheet.create({
     parent: {
          flex: 1,
          justifyContent: 'center',
     },
     loginFont: {
          fontSize: 30,
          marginHorizontal: 100,
          marginBottom: 10,
     },
     childView: {
          margin: 20,
     },
     
});

export default LoginScreen;
