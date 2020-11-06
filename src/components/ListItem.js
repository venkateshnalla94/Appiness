import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const ListItem=({data})=>{
     return(
          <View style={styles.parentView}>
               
               <View style={styles.primaryChild}>
                    <Text style={styles.employeeName}>Name of the Employee => {data.name}</Text>
                    <View style={styles.ageAndGender}>
                         <Text>Age = {data.age}</Text>
                         <Text>Gender = {data.gender}</Text>
                    </View>
                    <View style={styles.emailAndPhone}>
                         <Text style={styles.email}>Email Id = {data.email}</Text>
                         <Text>Phone = {data.phoneNo}</Text>
                    </View>
               </View>
          </View>
     )
}

const styles=StyleSheet.create({
     parentView:{
          marginHorizontal:30,
          marginTop:100,
          borderWidth:5,
          borderColor:'grey'
          
     },
     primaryChild:{
          //flexDirection:'row',
          
     },
     employeeName:{
          flexDirection: 'row',
          padding:10,
          paddingLeft:20,
          fontSize:18,
          borderWidth:5,
          borderColor:'grey'
     },
     ageAndGender:{
          flexDirection: 'row',
          justifyContent:"space-around",
          borderWidth:5,
          borderColor:'grey',
          padding:10,
     },
     emailAndPhone:{
          justifyContent:"space-around",
          borderWidth:5,
          borderColor:'grey',
          padding:10,
     },
     email:{
          marginBottom:5
     }
     
     
})

export default ListItem;
