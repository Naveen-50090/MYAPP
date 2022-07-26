import { View, Text,StyleSheet ,Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const ChoosePage = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Choose Instituition</Text>
      <View style={styles.view1}>
      <View style={styles.view}>
      <Image style={styles.image2} source={ require('../../../assets/assets/sreach.png')}/>
       <TextInput
        style={styles.textInput} placeholder='Choose your college'/>
      </View>
      </View>
      <View style={styles.view3}>
      <View style={styles.view2}>
          <TouchableOpacity>
          <Text style={styles.text1}>Psg college of arts and science</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.text2}>x</Text>
          </TouchableOpacity>
      </View>
      </View>

      <View style={styles.view4}>
      <View style={styles.view2}>
          <TouchableOpacity>
          <Text style={styles.text1}>Psg college of engineering</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.text3}>x</Text>
          </TouchableOpacity>
      </View>
      </View>

      <View style={styles.signin2}>
      <TouchableOpacity style={styles.Skip}>
        <Text style={styles.signin}>OKAY</Text>
      </TouchableOpacity>
      </View> 
      
    </View>
  )
}

export default ChoosePage

const styles = StyleSheet.create({
    
    box:{
        width:268,
        height:258,
        borderWidth:2,
        borderColor:'#0000000D',
        borderRadius:50,
        backgroundColor:'white',
        top:210,
        left:45,
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        top:17,
        left:20
    },
    view:{
        flexDirection:'row',
        top:30,
        width:236,
        height:37,
        borderWidth:1,
        borderRadius:50,
        borderColor:'#0000000D',
        backgroundColor:'FEFEFF',
        flexDirection:'row'
      },
      view1:{
          alignItems:'center'
      },
      image2:{
        width:14.56,
        height:19.88,
        left:10,
        top:7,
        resizeMode:'contain',
      },
      textInput:{
          left:25,
          width:180
      },
      text1:{
          fontSize:11,
      },
      view2:{
          flexDirection:'row',
      },
      text2:{
          fontSize:11,
          left:80
      },
      view3:{
          left:24,
          top:45
      },
      view4:{
        left:24,
        top:60
    },
    text3:{
        fontSize:11,
        left:96
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
         top:100,
       },
})