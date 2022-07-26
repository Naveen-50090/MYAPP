import { View, Text ,TouchableOpacity,Image,StyleSheet ,TextInput} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const Comment = () => {
  return (
    
   <View style={{}}>
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
    <View>
      <View>
        <TouchableOpacity>
        <Image style={styles.image} source={require('../../../assets/assets/mark.png')}/>
        </TouchableOpacity>
        <View style={styles.view}>
        <Text style={styles.container}>Comments</Text>
        <TouchableOpacity>
            <Image style={styles.profiledotImage1} source={ require('../../../assets/assets/dot.png')}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>


    <View style={{marginBottom:40,paddingTop:60}}>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={styles.postProfileText}>
                    <TouchableOpacity>
                       <Text style={{fontSize:16,color:'#1B1B1B'}}>Lorem Ipsum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>ASSISTANT PROFESSOR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={styles.profiledotImage} source={ require('../../../assets/assets/dot.png')}/>
                    </TouchableOpacity>
                </View>
          </View>

          <View style={styles.caption}>
                <Text style={styles.fontSize}>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elitsed do eiusmod tempor incidt magna aliqua ...see more</Text>
          </View>
          <View style={{top:44}}>
          <Image style={styles.reactangle1} source={ require('../../../assets/assets/rectangle.png')}/>

          </View>


          <View style={{flexDirection:'row',alignItems:'center',top:55}}>
            <TouchableOpacity>
            <Image style={styles.like} source={ require('../../../assets/assets/like.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:10,left:19,top:3}}>123</Text>
            <TouchableOpacity>
            <Image style={styles.comment} source={ require('../../../assets/assets/comment.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:10,left:180,top:3}}>12:01 AM</Text>
            <Text style={{fontSize:10,left:190,top:3}}>|</Text>
            <Text style={{fontSize:10,left:200,top:3}}>15 APR 22</Text>
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
                    <Text style={{right:35,top:20,marginRight:40}}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.
                    </Text>
                    
                </View>
          </View>

          </View>




        <View style={{marginBottom:150,left:10,top:50}}>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={{left:30}}>
                    <TouchableOpacity>
                       <Text style={{fontSize:16,color:'#1B1B1B'}}>Lorem Ipsum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>ASSISTANT PROFESSOR</Text>
                    </TouchableOpacity>

                    <Text style={{right:35,top:20,marginRight:40}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </Text>
                    
                </View>
          </View>

          </View>

          </View>

      </ScrollView>
         
            
      <View style={{width:302,height:40,backgroundColor:'#FFFFFF',borderWidth:2,borderRadius:50,borderColor:'#0000000D',bottom:100,left:32.5,marginTop:9.6}}>
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

export default Comment


const styles = StyleSheet.create({
    container: {
     fontSize:24,
     fontWeight:'bold',
     position:'absolute',
     top:40,
     left:50
    },
    image:{
      width:11,
      height:18,
      alignItems:'center',
      top:67,
      left:25
    },
   view:{
     alignItems:'center',
     flexDirection:'row'
   },
   postProfileView:{
    flexDirection:'row',
    top:35
  },
  postProfile:{
    width:39,
    height:39,
    borderWidth:1,
    borderColor:'#00295A',
    borderRadius:50,
    left:8,
    backgroundColor:'white',
    
  },
  postProfileText:{
    left:15,
    width:230,
    borderColor:'#00295A',
    borderBottomWidth:1,
  },
  profiledotImage:{
    width:26,
    height:6,
    left:267,
    bottom:17
    },

    caption:{
        left:15,
        top:40,
        height:40,
      },
      fontSize:{
        fontSize:14,
        marginRight:16
      },
      reactangle1:{
        width:360,
        height:260,
      },
      like:{
        width:21.68,
        height:20.28,
        left:15
      },
      comment:{
        width:18.69,
        height:18.57,
        left:30
      },
      profiledotImage1:{
        width:26,
        height:6,
        top:56,
        left:320
        },
        view3:{
            alignItems:'center',
           },
          
          image1:{
            width:14.76,
            height:15.02,
            left:10,
            top:11
          },
          textInput:{
            fontSize:16,
            left:30, 
            width:200,
            color:'#747474',
           
            flexDirection:'row',
        
            width:302,
            height:40,
            borderWidth:1,
            borderRadius:50,
            borderColor:'#0000000D',
            backgroundColor:'#FEFEFF',
           },

           
})