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
      <Image source={ require('../../../assets/assets/com.png')} style={styles.image1}/>
    </View>
    <View style={styles.textView}>
      <Text style={styles.welcome}>WELCOME</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur</Text>
      <Text style={styles.text}>adipiscing elit, sed do eiusmod tempor </Text>
      <Text style={styles.text}>incididunt .</Text>
    </View>
    <View style={styles.touchableOpacityText}>
      <TouchableOpacity style={styles.Skip}>
        <Text style={styles.text3}>SKIP</Text>
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
      width:290.5419921875,
      height:295,
      top:110
    } , 
    
    textView:{
      alignItems:'center',
      top:140,
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
    width:82,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
   },
   touchableOpacityText:{
     top:185,
     left:250
   },
   text3:{
    alignItems:'center',
    color:'white',
    fontSize:14,
    fontWeight:'bold',
   },
  })