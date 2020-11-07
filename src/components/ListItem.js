import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const profilePic={uri:'https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-employee-icon-vector-illustration-in-glyph-style-for-any-purpose-png-image_998315.jpg'};
/**
 * @author Venkatesh Nalla
 * To render the list of employess
 * @param data
 * @returns {*}
 * @constructor
 */
const ListItem=({data})=>{
     return(
          <TouchableOpacity
          onPress={()=>{
               console.log("Will provide More information about the  user"+data.name)
               
          }}
          >
               <View style={styles.parentView}>
                    <View style={styles.profile}>
                         <Image
                              source={profilePic}
                              style={styles.userImage}
                         ></Image>
                    </View>
                    <View style={styles.primaryChild}>
                         <Text style={styles.employeeName}>{data.name.charAt(0).toUpperCase()+data.name.slice(1)}</Text>
                         <View style={styles.ageAndGender}>
                              <Text style={styles.ageAndGenderText}>Age = {data.age}</Text>
                              <Text style={styles.ageAndGenderText}>Gender = {data.gender}</Text>
                         </View>
                         <View style={styles.emailAndPhone}>
                              <Text style={styles.email}>{data.email}</Text>
                              <Text style={styles.email}>{data.phoneNo}</Text>
                         </View>
                    </View>
               </View>
          </TouchableOpacity>
     )
}

const styles=StyleSheet.create({
     parentView:{
          flexDirection:'row',
          marginHorizontal:30,
          marginTop:20,
     },
     profile:{
          flex:.35,
          justifyContent:"center",
          paddingRight:5
     },
     primaryChild:{
          flex:.75,
     },
     employeeName:{
          flexDirection: 'row',
          padding:5,
          fontWeight:'bold',
          fontFamily: "Helvetica Neue",
          fontSize:22,
          color:'#f5f5f5',
          paddingTop:10
     },
     ageAndGender:{
          flexDirection: 'row',
          justifyContent:"space-between",
          padding:5,
          
     },
     ageAndGenderText:{
          fontSize:18,
          fontWeight: '400',
          color:'#f5f5f5',
     },
     emailAndPhone:{
          flexDirection:'row',
          justifyContent:"space-between",
          paddingVertical:5,
          paddingLeft:5,
          color:'#f5f5f5',
     },
     email:{
          marginBottom:5,
          fontSize:12,
          fontWeight: '300',
          color:'#f5f5f5',
     },
     userImage:{
          width:86,
          height:86,
          borderRadius: 86/ 2,
          marginLeft: 8
     }
})

export default ListItem;
