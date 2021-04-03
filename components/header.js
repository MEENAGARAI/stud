import React, { Component } from 'react';
import { Button, View, Text,TouchableOpacity,StyleSheet} from 'react-native';

class Header extends Component{
  render(){
    return(
      <View style={{backgroundColor:'#acddde'}}>
      <Text style={styles.textstyles}>Student Attendance</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  textstyles:{
    color:'red',
    fontSize:30,
 fontWeight:'bold',
 textAlign:"center",
 padding:20
  }
})
export default Header