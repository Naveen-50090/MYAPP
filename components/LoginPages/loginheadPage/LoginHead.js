import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'

const LoginHead = () => {
  return (
    <View>
      <View style={styles.view1}>
        <Text style={styles.container}>LOGO</Text>
      </View>
      <View style={styles.view1}>
        <Text style={styles.container1}>Log in to your account</Text>
      </View>
      <View style={styles.view3}>
       <View style={styles.view2}>
       <Image style={styles.image1} source={ require('../../../assets/assets/profile.png')}/>
       <TextInput
        style={styles.textInput} placeholder='User ID or E-mail Address'/>
       </View>
      </View>
      <View style={styles.view3}>
       <View style={styles.view4}>
       <Image style={styles.image2} source={ require('../../../assets/assets/lock.png')}/>
       <TextInput
        style={styles.textInput} placeholder='Password'/>
       </View>
      </View>
      
      <View>
        <TouchableOpacity style={styles.viwe5}>
        <Image style={styles.image3} source={ require('../../../assets/assets/Group.png')}/>
        <Text style={styles.text3}>Remember me!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signin2}>
      <TouchableOpacity style={styles.Skip}>
        <Text style={styles.signin}>SIGN IN</Text>
      </TouchableOpacity>
      </View> 

      <View >
        <TouchableOpacity style={styles.forget}>
        <Text>Forget your password?</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default LoginHead


const styles = StyleSheet.create({
  container: {
   fontSize:30,
   fontWeight:'bold',
   position:'absolute',
   top:150,
  },
  view1:{
    alignItems:'center',
  },

  container1: {
    fontSize:20,
    fontWeight:'bold',
    position:'absolute',
    top:220,
   },
   textInput:{
    fontSize:12,
    left:30, 
    width:230,
    color:'#747474'
   },
   view2:{
     flexDirection:'row',
     top:300,
     width:302,
     height:40,
     borderWidth:1,
     borderRadius:50,
     borderColor:'#0000000D',
     backgroundColor:'FEFEFF',
   },
   image1:{
     width:14.76,
     height:15.02,
     left:10,
     top:11
   },
   view3:{
    alignItems:'center'
   },
   view4:{
    flexDirection:'row',
    top:320,
    width:302,
    height:40,
    borderWidth:1,
    borderRadius:50,
    borderColor:'#0000000D',
    backgroundColor:'FEFEFF',
  },
  image2:{
    width:14.56,
    height:19.88,
    left:10,
    top:9,
    resizeMode:'contain'
  },

  viwe5:{
    flexDirection:'row',
    top:360,
    left:230,
  },
  text3:{
    alignItems:'center',
    left:4,
    bottom:3
  },
  image3:{
    width:14.56,
    height:19.88,
    
  },

  signin:{
    alignItems:'center',
    color:'white',
    fontSize:14,
    fontWeight:'bold',
   },

   Skip:{
    backgroundColor:'#00295A',
    width:82,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
   },

   signin2:{
     alignItems:'center',
     top:420,
   },

   forget:{
     alignItems:'center',
     top:440
   },

   font:{
     fontSize:12
   }

})