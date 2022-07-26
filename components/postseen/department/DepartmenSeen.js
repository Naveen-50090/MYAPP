import { View, Text,StyleSheet ,Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Everyone= () => {
  return (
    <View style={{}}>
      <View style={styles.box}> 

        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.text}>Everyone can see</Text>
            <TouchableOpacity>
            <Image style={styles.Skip} source={require('../../../assets/assets/click.png')}/>
            </TouchableOpacity>
        </View>
        <View style={{width:230,
        borderColor:'#1C2D41',
        borderBottomWidth:2,
        top:30,
        left:0,
        alignItems:'center'}}>

        </View>
        <View style={{flexDirection:'row',alignItems:'center',top:20}}>
            <Text style={styles.text}>Within your dept.</Text>
            <TouchableOpacity>
            <Image style={styles.Skip} source={require('../../../assets/assets/clickwhite.png')}/>
            </TouchableOpacity>
        </View>
      
      </View> 
      
    </View>
  )
}

export default Everyone

const styles = StyleSheet.create({
    
    
    box:{
        width:285,
        height:131,
        borderWidth:2,
        borderColor:'#0000000D',
        borderRadius:50,
        backgroundColor:'white',
        top:300,
        left:45,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        top:20,
        right:20
        
    },
    signin:{
        alignItems:'center',
        color:'black',
        fontSize:14,
        fontWeight:'bold',
       },
    
       Skip:{
        width:30,
        height:30,
        top:18,
        left:30
    
       },
    
       signin2:{
         alignItems:'center',
         top:120,
       },
       textMail:{
         alignItems:'center',
         fontSize:10,
         top:90
       },
})