import { View, Text ,StyleSheet,Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const ForgetMail = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
        <Image style={styles.image} source={require('../../../assets/assets/mark.png')}/>
        </TouchableOpacity>
        <View style={styles.view}>
        <Text style={styles.container}>LOGO</Text>
        </View>
      </View>

      <View style={styles.view2}>
        <Text style={styles.Text1}>Forget your password?</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.Text3}>USER ID OR EMAIL:</Text>
      </View>

      <View style={styles.view4}>
      <TextInput
        style={styles.textInput} placeholder='User ID or E-mail Address'/>
      </View>

      <View style={styles.signin2}>
      <TouchableOpacity style={styles.Skip}>
        <Text style={styles.signin}>SUBMIT</Text>
      </TouchableOpacity>
      </View> 

    </View>
  )
}

export default ForgetMail

const styles = StyleSheet.create({
  container: {
   fontSize:20,
   fontWeight:'bold',
   position:'absolute',
   top:40,
  },
  image:{
    width:11,
    height:18,
    alignItems:'center',
    top:67,
    left:25
  },
 view:{
   alignItems:'center'
 },
 view2:{
   top:90,
   left:7
 },
 Text1:{
   fontSize:34,
   fontWeight:'bold',
 },

 view3:{
  top:125,
  left:9
},
Text3:{
  fontSize:10,
},

textInput:{
  fontSize:14,
  left:2, 
  width:330,
  color:'#747474'
 },
 view4:{
   top:150,
   width:334,
   left:9,
   borderBottomWidth:2,
   borderColor:'#0000000D',
   
 },

 signin2:{
  alignItems:'center',
  top:200,
},
Skip:{
  backgroundColor:'#00295A',
  width:104,
  height:40,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:15
 },
 signin:{
  alignItems:'center',
  color:'white',
  fontSize:14,
  fontWeight:'bold',
 },

})