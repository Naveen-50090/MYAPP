import { View, Text ,StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native'
import React from 'react'

const AfterChangeLogin = () => {
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
        <Text style={styles.Text1}>Login to your account</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.Text3}>USER ID OR EMAIL:</Text>
      </View>
     
      <View style={styles.view4}>
      <TextInput
        style={styles.textInput} placeholder='User ID or E-mail Address'/>
      </View>

      <View style={styles.view5}>
        <Text style={styles.Text6}>NEW PASSWORD:</Text>
      </View>

     <View style={styles.view7}>
      <TextInput
        style={styles.textInput1} placeholder='Password'/>
      </View>

      <View>
        <TouchableOpacity style={styles.viwe90}>
        <Image style={styles.image90} source={ require('../../../assets/assets/Group.png')}/>
        <Text style={styles.text90}>Remember me!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signin2}>
      <TouchableOpacity style={styles.Skip}>
        <Text style={styles.signin}>SIGN IN</Text>
      </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity style={styles.forget}>
        <Text style={styles.font}>Forget your password?</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default AfterChangeLogin



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
    top:110,
    left:7
  },
  Text1:{
    fontSize:34,
    fontWeight:'bold',
  },

  view3:{
    top:140,
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

   view5:{
    top:185,
    left:9
  },
  Text6:{
    fontSize:10,
  },
   
  textInput1:{
    fontSize:14,
    left:2, 
    width:330,
    color:'#747474'
   },
   view7:{
     top:197,
     width:334,
     left:9,
     borderBottomWidth:2,
     borderColor:'#0000000D',
     
   },

   signin2:{
    alignItems:'center',
    top:260,
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


   viwe90:{
    flexDirection:'row',
    top:230,
    left:230,
  },
  text90:{
    alignItems:'center',
    left:4,
    bottom:3
  },
  image90:{
    width:14.56,
    height:19.88,
    
  },
  

  forget:{
    alignItems:'center',
    top:278
  },

  font:{
      fontSize:14
  }
  
})