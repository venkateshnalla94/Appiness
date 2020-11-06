import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from '../components/ListItem';
import * as data from '../data/employeInfo';
import {Context as AuthContext} from '../context/AuthContext';

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
     mainView:{
          flex:1,
     },
     welcomeText:{
          fontSize:25,
          marginHorizontal:50,
          marginTop:60,
          textAlign:'center',
     }
})
export default EmployeeListScree;
