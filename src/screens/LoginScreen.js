import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Alert, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
const image = { uri: "https://cdn.wallpapersafari.com/31/92/JKaC2A.jpg" };
const user={uri:"https://img.icons8.com/bubbles/2x/user-male.png"}
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
               <ImageBackground
                    source={image}
                    style={styles.image}
               >
                    <Image
                         source={user}
                         style={styles.userimage}
                    ></Image>
                    <View
                         elevation={10}
                         style={styles.primaryChildView}>
                         <Text style={styles.companyProfile}>Appiness</Text>
                         <Text style={styles.loginFont}>LoginScreen</Text>
                         <View style={styles.childView}>
                              <Input
                                   style={styles.inputStyle}
                                   autoCapitalize={'none'}
                                   autoCorrect={false}
                                   label={'Email'}
                                   value={userName}
                                   onChangeText={setUserName}
                              />
                              <Input
                                   style={styles.inputStyle}
                                   secureTextEntry={true}
                                   autoCapitalize={'none'}
                                   autoCorrect={false}
                                   label={'Password'}
                                   value={password}
                                   onChangeText={setPassword}
                              />
                              <TouchableOpacity
                                   style={styles.loginButton}
                                   color="white"
                                   title={'Login'}
                                   type="outline"
                                   onPress={() => {checkValidations(userName, password, navigation);}}>
                                   <Text style={styles.loginText}>
                                        Login
                                   </Text>
                              </TouchableOpacity>
                         </View>
                    </View>
               </ImageBackground>
          
          </View>
     );
};

const styles = StyleSheet.create({
     parent: {
          flex: 1,
          justifyContent: 'center',
     },
     companyProfile:{
          fontSize: 45,
          marginHorizontal: 80,
          color:'white',
          marginBottom: 50,
          fontWeight:'200'
     },
     loginFont: {
          fontSize: 25,
          marginHorizontal: 100,
          marginBottom: 10,
          color:'white',
          fontWeight:'200'
     },
     childView: {
          margin: 20,
     },
     image:{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
     },
     userimage:{
          flex: .25,
          width:100,
          marginBottom:30,
          marginHorizontal:140
     },
     inputStyle:{
          color:'white',
          fontWeight:'700'
     },
     loginButton:{
          paddingTop:20,
     },
     loginText:{
          fontSize:30,
          color:'white',
          textAlign:'center',
          fontWeight:'200'
     },
     primaryChildView:{
          borderColor:'grey',
          borderWidth:2,
          borderRadius:5,
          padding:10,
          marginHorizontal:10
     }
     
     
});

export default LoginScreen;
