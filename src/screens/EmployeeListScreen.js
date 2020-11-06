import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from '../components/ListItem';
import * as data from '../data/employeInfo';

const EmployeeListScree=()=>{
     return(
          <View>
               
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
export default EmployeeListScree;
