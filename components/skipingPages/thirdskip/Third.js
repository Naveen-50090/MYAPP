import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const First = () => {
  return (
  <View style={{backgroundColor:'FEFEFF'}}>
    <View style={styles.View}>
      <Text style={styles.container}>LOGO</Text>
    </View>
    <View style={styles.View}>
      <Image source={ require('../../../assets/assets/num.png')} style={styles.image1}/>
    </View>
    <View style={styles.textView}>
      <Text style={styles.welcome}>LOREM IPSUM</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur</Text>
      <Text style={styles.text}>adipiscing elit, sed do eiusmod tempor </Text>
      <Text style={styles.text}>incididunt .</Text>
    </View>
    <View style={styles.touchableOpacityText}>
      <TouchableOpacity style={styles.Skip}>
        <Text style={styles.text3}>Let's get started</Text>
      </TouchableOpacity>
      </View>  
  </View>
  )
}

export default First

const styles = StyleSheet.create({
    container: {
     top:60,
     fontSize:20,
     fontWeight:'bold'
    },

    View: {
        alignItems:'center',
        justifyContent:'center'
       },

    image1:{
      width:336,
      height:257.46,
      top:110,
      resizeMode:'contain',
    } , 
    
    textView:{
      alignItems:'center',
      top:155,
    },

    welcome:{
      fontSize:24,
      fontWeight:'bold'
    },
   text:{
     fontSize:14,
     top:17
   },

   Skip:{
    backgroundColor:'#00295A',
    width:154,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
   },
   touchableOpacityText:{
     top:210,
     left:200
   },
   text3:{
    alignItems:'center',
    color:'white',
    fontSize:14,
    fontWeight:'bold',
   },
  })