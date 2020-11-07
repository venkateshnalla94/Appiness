import React, {useContext} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import ListItem from '../components/ListItem';
import * as data from '../data/employeInfo';
import {Context as AuthContext} from '../context/AuthContext';

const image = { uri: "https://i.pinimg.com/originals/51/fe/ff/51feff92c452732f587b330d7ef3ee7a.jpg" };
/**
 * @author Venkatesh Nalla
 * Employee List
 * @returns {*}
 * @constructor
 */
const EmployeeListScree=()=>{
     const {state} = useContext(AuthContext);
     return(
          <View style={EmployeeListScreeStyles.mainView}>
               <ImageBackground source={image}
                                style={EmployeeListScreeStyles.image}>
               <Text style={EmployeeListScreeStyles.welcomeText}>Welcome {state.userName} </Text>
               <View>
                    
                         <FlatList
                              data={data.default.user}
                              keyExtractor={(data)=>{return data.email}}
                              renderItem={({item})=>{
                                   return <ListItem data={item}/>
                              }}
                         />
                    
               </View>
               </ImageBackground>
               
              
          </View>
     )
}
const EmployeeListScreeStyles=StyleSheet.create({
     image:{
          flex:1,
          resizeMode: "cover",
          justifyContent: "center"
     },
     mainView:{
          flex:1,
     },
     welcomeText:{
          fontSize:25,
          marginHorizontal:50,
          marginTop:20,
          textAlign:'center',
          color:'#f5f5f5',
     },
     
})
export default EmployeeListScree;
