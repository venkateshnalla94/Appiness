import React, {useContext} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import ListItem from '../components/ListItem';
import * as data from '../data/employeInfo';
import {Context as AuthContext} from '../context/AuthContext';
const image = { uri: "https://c4.wallpaperflare.com/wallpaper/737/512/920/minimalism-abstract-blue-background-artwork-wallpaper-preview.jpg" };
const EmployeeListScree=()=>{
     const {state} = useContext(AuthContext);
     return(
          <View style={EmployeeListScreeStyles.mainView}>
               
               <Text style={EmployeeListScreeStyles.welcomeText}>Welcome {state.userName} </Text>
               <FlatList
                    data={data.default.user}
                    keyExtractor={(data)=>{return data.email}}
                    renderItem={({item})=>{
                         return <ListItem data={item}/>
                    }}
               />
               
              
          </View>
     )
}
const EmployeeListScreeStyles=StyleSheet.create({
     image:{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
     },
     mainView:{
          flex:1,
     },
     welcomeText:{
          fontSize:25,
          marginHorizontal:50,
          marginTop:60,
          textAlign:'center',
     },
     
})
export default EmployeeListScree;
