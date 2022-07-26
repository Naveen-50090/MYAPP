import { View, Text, ScrollView,Image ,StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Myprofile = () => {
  return (
    <View>
     <ScrollView >
        <View style={{width:430,height:20,backgroundColor:'#777575',borderWidth:1,borderColor:'#777575',right:50}}>
            <Image style={{width:46,height:10,left:340,top:4}} source={require('../../../../../assets/assets/Mask.png')}/>
        </View>
        <View>
        <Image style={{width:360,height:181}} source={require('../../../../../assets/assets/imageprofile.png')}/>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity>
        <Image style={{width:11,height:18.63,bottom:162,left:20}} source={require('../../../../../assets/assets/whitemarkreverse.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={{width:25,height:25,bottom:160,left:285}} source={require('../../../../../assets/assets/photo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity  style={ styles.add}>
            <Text style={{fontSize:30,bottom:3.6}}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center',paddingTop:20}}>
            <Text style={{fontSize:24,fontWeight:'bold',color:'#00295A'}}>Lorem Ipsum</Text>
            <Text style={{fontSize:16,color:'#1B1B1B',paddingTop:8}}>Student</Text>
            <Text style={{fontSize:12,color:'#1B1B1B',paddingTop:12}}>Physics Dept - 19BPH116</Text>
            <Text style={{fontSize:12,color:'#1B1B1B',paddingTop:10}}>Batch 2019 - 2022</Text>
        </View>
        <View style={{left:23,paddingTop:25,flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:23,height:20,resizeMode:'contain'}} source={require('../../../../../assets/assets/mailidgive.png')}/>
            <Text style={{fontSize:12,fontWeight:'bold',bottom:3,left:10}}>gokulvasa2321@gmail.com</Text>
        </View>
        <View style={{left:20,paddingTop:25,flexDirection:'row',alignItems:'center'}}>
            <Image style={{width:25,height:20,resizeMode:'contain'}} source={require('../../../../../assets/assets/contactnumber.png')}/>
            <Text style={{fontSize:12,fontWeight:'bold',bottom:1.5,left:10}}>99554 46639</Text>
        </View>
        <View style={{left:20,paddingTop:30}}>
            <Text style={{fontSize:16,color:'#00295A',fontWeight:'bold'}}>Skills</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',left:20}}>
        <View style={styles.skills}>
           <TouchableOpacity>
           <Text style={{fontSize:10,top:4.5}}>Adobe</Text>
           </TouchableOpacity> 
        </View>
        <View style={styles.skills1}>
           <TouchableOpacity>
           <Text style={{fontSize:10,top:4.5}}>Photoshop</Text>
           </TouchableOpacity> 
        </View>
        <View style={styles.skills2}>
           <TouchableOpacity>
           <Text style={{fontSize:10,top:4.5}}>Illustrator</Text>
           </TouchableOpacity> 
        </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',right:17,paddingTop:10}}>
          <View style={styles.skills3}>
           <TouchableOpacity>
           <Text style={{fontSize:10,top:4.5}}>UX</Text>
           </TouchableOpacity> 
          </View>
         <View style={styles.skills4}>
           <TouchableOpacity>
           <Text style={{fontSize:10,top:4.5}}>Web</Text>
           </TouchableOpacity> 
           <View style={{bottom:18,}}>
           <TouchableOpacity  style={ styles.add2}>
            <Text style={{fontSize:27,color:'#FEFEFF',fontWeight:'bold',bottom:3,alignItems:'center',right:0.5}}>+</Text>
           </TouchableOpacity>
           </View>
        </View>
        </View>

        
        
        </View>
     </ScrollView>
    </View>
  )
}

export default Myprofile

const styles = StyleSheet.create({
  add:{
    width:40,
    height:40,
    backgroundColor:'#FEFEFF',
    borderWidth:0.1,
    borderColor:'#00295A',
    right:50,
    borderRadius:50,
    left:120,
    alignItems:'center',
    marginTop:20
  },
  skills:{
    width:60,
    height:26,
    backgroundColor:'#FEFEFF',
    borderWidth:0.1,
    borderColor:'#00295A',
    right:50,
    borderRadius:50,
    left:30,
    alignItems:'center',
    marginTop:20
  },
  skills1:{
    width:76,
    height:26,
    backgroundColor:'#FEFEFF',
    borderWidth:0.1,
    borderColor:'#00295A',
    right:50,
    borderRadius:50,
    left:45,
    alignItems:'center',
    marginTop:20
  },
  skills2:{
    width:78,
    height:26,
    backgroundColor:'#FEFEFF',
    borderWidth:0.1,
    borderColor:'#00295A',
    right:50,
    borderRadius:50,
    left:65,
    alignItems:'center',
    marginTop:20
  },
  skills3:{
    width:30,
    height:26,
    backgroundColor:'#FEFEFF',
    borderWidth:0.1,
    borderColor:'#00295A',
    right:50,
    borderRadius:50,
    left:65,
    alignItems:'center',
    marginTop:20
  },
  skills4:{
    width:78,
    height:26,
    backgroundColor:'#FEFEFF',
    borderWidth:0.1,
    borderColor:'#00295A',
    borderRadius:50,
    left:80,
    alignItems:'center',
    marginTop:20,
  },
  add2:{
    width:30,
    height:30,
    backgroundColor:'#00295A',
    borderWidth:0.1,
    borderColor:'#00295A',
    right:50,
    borderRadius:50,
    left:70,
    alignItems:'center',
    
  },
})