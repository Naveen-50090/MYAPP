import { View, Text, ScrollView ,StyleSheet,Image,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Profile = () => {
  return (
    <View style={{marginBottom:50}}>
    <ScrollView style={{marginBottom:45}} showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Image style={styles.reactangle1} source={ require('../../../assets/assets/rectangle.png')}/>
          <View style={{bottom:290,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity>
            <Image  style={styles.markWhite} source={ require('../../../assets/assets/whitemarkreverse.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image  style={styles.whitedot} source={ require('../../../assets/assets/whitedot.png')}/>
            </TouchableOpacity>
          </View>
          <View style={{bottom:140,alignItems:'center'}}>
          <Image  style={styles.scrollwhitedot} source={ require('../../../assets/assets/scrollwhitedot.png')}/>
          </View>
          <View style={styles.box}>

          </View>

          <View>
            <View style={{alignItems:'center'}}>
              <Text style={styles.txt}>Lorem Ipsum</Text>
              <Text style={styles.student}>STUDENT</Text>
            </View>
            <View style={{alignItems:'center'}}>
            <Text style={styles.studenttxt}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit,</Text>
                <Text style={styles.studenttxt}> sed do eiusmod tempor incidt magna aliqua elit, sed do </Text>
                <Text style={styles.studenttxt}>eiusmod tempor incidt magna aliqua </Text>
            </View>
          </View>

          
          <View style={{flexDirection:'row',left:115,top:30}}>
            <TouchableOpacity>
            <Image style={styles.like} source={ require('../../../assets/assets/bluelike.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:16,top:8,left:6}}>123</Text>
            <TouchableOpacity>
            <Image style={styles.comment} source={ require('../../../assets/assets/comment.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:16,top:8,left:46}}>23</Text>
            
          </View>
          <View style={{flexDirection:'row',marginBottom:100,top:50,right:50}}>
          <Text style={{fontSize:10,left:169,top:3}}>12:01 AM</Text>
            <Text style={{fontSize:10,left:190,top:3}}>|</Text>
            <Text style={{fontSize:10,left:210,top:3}}>15 APR 22</Text>
          </View>


        </View>


        <View style={{marginBottom:100}}>
        <View style={{left:10,}}>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={{left:30}}>
                    <TouchableOpacity>
                       <Text style={{fontSize:14,color:'#1B1B1B',fontWeight:'bold'}}>Gokulnaath M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>STUDENT</Text>
                    </TouchableOpacity>
                    <Text style={{right:0,top:20,marginRight:40}}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.
                    </Text>
                    
                </View>
                
                <View style={{flexDirection:'row',marginBottom:100,top:35,right:140}}>
                    <TouchableOpacity>
                    <Text style={{fontSize:10,left:169,top:3,color:'#1B1B1B',fontWeight:'bold'}}>LIKE</Text>
                   </TouchableOpacity>
                     <Text style={{fontSize:10,left:190,top:3,color:'#1B1B1B',fontWeight:'bold'}}>|</Text>
                     <TouchableOpacity>
                     <Text style={{fontSize:10,left:210,top:3,color:'#1B1B1B',fontWeight:'bold'}}>REPLY</Text>
                     </TouchableOpacity>
                </View>

          </View>

          </View>
          </View>

  



          <View style={{marginBottom:150,left:10,bottom:120}}>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={{left:30}}>
                    <TouchableOpacity>
                       <Text style={{fontSize:16,color:'#1B1B1B',fontWeight:'bold'}}>Lorem Ipsum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>ASSISTANT PROFESSOR</Text>
                    </TouchableOpacity>

                    <Text style={{top:20,marginRight:40}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </Text>
                    <View style={{flexDirection:'row',marginBottom:100,top:30,right:168}}>
                    <TouchableOpacity>
                    <Text style={{fontSize:10,left:169,top:3,color:'#1B1B1B',fontWeight:'bold'}}>LIKE</Text>
                   </TouchableOpacity>
                     <Text style={{fontSize:10,left:190,top:3,color:'#1B1B1B',fontWeight:'bold'}}>|</Text>
                     <TouchableOpacity>
                     <Text style={{fontSize:10,left:210,top:3,color:'#1B1B1B',fontWeight:'bold'}}>REPLY</Text>
                     </TouchableOpacity>
                </View>
                    
                </View>
          </View>

          </View>

        


      </View>
    </ScrollView>


    <View style={{width:302,height:40,backgroundColor:'#FFFFFF',borderWidth:2,borderRadius:50,borderColor:'#0000000D',bottom:51,left:32.5,marginTop:9.6}}>
      <View 
      style={{flexDirection:'row',alignItems:'center',left:15,top:3}}>
        <TextInput
        style={{fontSize:14,left:20,width:200,color:'#747474'}} placeholder='Leave your comment'/>
        <TouchableOpacity>
        <Text style={{fontSize:14,color:'#00295A',left:30}}>POST</Text>
        </TouchableOpacity>
      </View>
      </View>  

    </View>
  )
}

export default Profile


const styles = StyleSheet.create({
reactangle1:{
  width:360,
  height:350,
},
markWhite:{
  
  width:15,
  height:24,
  left:25
},
whitedot:{
  width:40,
  height:9,
  left:280,
  

},
scrollwhitedot:{
  width:40,
  height:9,
  
},
box:{
  width:80,
  height:80,
  borderWidth:4,
  borderColor:'white',
  borderRadius:40,
  backgroundColor:'#737171',
  bottom:75,
  left:140
},
txt:{
  fontSize:20,
  fontWeight:'bold',
  bottom:45
},
student:{
  fontSize:10,
  bottom:38,
  color:'#1B1B1B'
},
studenttxt:{
  fontSize:14,
  bottom:10,
  color:'#1B1B1B',
  alignItems:'center'
},
like:{
  width:34,
  height:35,
  resizeMode:'contain',
  bottom:6
},
comment:{
  width:31.88,
  height:30.63,
  left:39,
  resizeMode:'contain'

},



})