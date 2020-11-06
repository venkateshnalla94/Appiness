import React, {useContext} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const profilePic={uri:'https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-employee-icon-vector-illustration-in-glyph-style-for-any-purpose-png-image_998315.jpg'}

const ListItem=({data})=>{
     
     return(
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
                         <Text style={styles.ageAndGenderText}>{data.phoneNo}</Text>
                    </View>
               </View>
          </View>
     )
}

const styles=StyleSheet.create({
     parentView:{
          flexDirection:'row',
          marginHorizontal:30,
          marginTop:20,
     },
     profile:{
          flex:.4,
          justifyContent:"center",
          backgroundColor:"gold",
          paddingRight:5
     },
     primaryChild:{
          flex:.75,
          borderWidth:5,
          borderColor:'gold',
          
     },
     employeeName:{
          flexDirection: 'row',
          padding:5,
          fontWeight:'bold',
          fontFamily: "Telugu Sangam MN",
          fontSize:22,
     },
     ageAndGender:{
          flexDirection: 'row',
          justifyContent:"space-between",
          padding:5,
          
     },
     ageAndGenderText:{
          fontSize:18,
          fontWeight: '200'
     },
     emailAndPhone:{
          justifyContent:"space-around",
          padding:5,
     },
     email:{
          marginBottom:5,
          fontSize:18,
          fontWeight: '200'
     },
     userImage:{
          width:100,
          height:100,
          borderRadius: 100/ 2,
          marginLeft: 8
     }
     
     
})

export default ListItem;
