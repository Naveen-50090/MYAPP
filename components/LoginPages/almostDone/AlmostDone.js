import { View, Text,StyleSheet ,Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const AlmostDone= () => {
  return (
    <View style={{}}>
      <View style={styles.box}> 
      <Text style={styles.text}>We almost finished!</Text>
      </View>
      <View style={styles.textMail}>
        <Text>Check your email, We have sent you </Text>
      </View>
      <View  style={styles.textMail}>
        <Text>
        the necessary instructions to recover
        </Text>
      </View>
      <View  style={styles.textMail}>
        <Text>
        your password.
        </Text>
      </View>
      <View style={styles.signin2}>
      <TouchableOpacity style={styles.Skip}>
        <Text style={styles.signin}>NEXT</Text>
      </TouchableOpacity>
      </View> 
      
    </View>
  )
}

export default AlmostDone

const styles = StyleSheet.create({
    
    
    box:{
        width:285,
        height:210,
        borderWidth:2,
        borderColor:'#0000000D',
        borderRadius:50,
        backgroundColor:'white',
        top:240,
        left:45,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        top:17,
        right:6
        
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
         top:120,
       },
       textMail:{
         alignItems:'center',
         fontSize:10,
         top:90
       }
})