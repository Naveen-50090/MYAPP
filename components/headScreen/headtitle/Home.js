import { View, Text ,Image,TextInput} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <View style={styles.view}> 
      <TouchableOpacity>
      <Text style={styles.text1}>Home</Text>
      </TouchableOpacity> 
      <TouchableOpacity> 
      <Image style={styles.image} source={require('../../../assets/assets/Layer.png')}/>
      </TouchableOpacity> 
      </View>
      <View style={styles.view1}>
      <TouchableOpacity> 
        <Text style={styles.text2}> Psg college of arts and science</Text>
      </TouchableOpacity> 
      </View>

      <View style={styles.view3}>
       <View style={styles.view2}>
       <Image style={styles.image1} source={ require('../../../assets/assets/sreach.png')}/>
       <TextInput
        style={styles.textInput} placeholder='Sreach'/>
       <View style={styles.box}>
        <TouchableOpacity>
        <Image style={styles.image2} source={ require('../../../assets/assets/box.png')}/>
        </TouchableOpacity>
        </View>
       </View>
      </View>

      <View style={styles.storiestitleView}>
        <Text style={styles.stories}>Notices / Stories</Text>
      </View>
  
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
       <View style={{height:115.5,flexDirection:'row',marginRight:25}} >
        <TouchableOpacity>
        <View style={styles.box1}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box2}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box3}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box4}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box5}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box6}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box7}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box8}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box9}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box10}></View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.box11}></View>
        </TouchableOpacity>
        
        
       </View>  
      </ScrollView>

      <View style={styles.storiestitleView1}>
        <Text style={styles.stories1}>Posts / Feed</Text>
      </View>

      
        <View>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={styles.postProfileText}>
                    <TouchableOpacity>
                       <Text style={{fontSize:16,color:'#1B1B1B'}}>Lorem Ipsum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>STUDENT</Text>
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
          <Image style={styles.reactangle} source={ require('../../../assets/assets/rectangle.png')}/>

          <View style={styles.rectangle}>
            <TouchableOpacity>
            <Text style={{fontSize:14,color:'white',left:15,fontWeight:'bold'}}>Participate</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.source} source={ require('../../../assets/assets/markWhite.png')}/>
            </TouchableOpacity>
          </View>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',top:10}}>
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

       
       
       
       
       
        <View>
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


        <View style={{paddingTop:45,bottom:5,marginBottom:40}}>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={styles.postProfileText}>
                    <TouchableOpacity>
                       <Text style={{fontSize:16,color:'#1B1B1B'}}>Lorem Ipsum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>PRINCIPAL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={styles.profiledotImage} source={ require('../../../assets/assets/dot.png')}/>
                    </TouchableOpacity>
                </View>
          </View>
               <Text style={styles.principal}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                 sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                 sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd. Gubergren, 
                 no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                 sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                  At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>

            <View style={{flexDirection:'row',alignItems:'center',top:15}}>
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

        

        <View style={{bottom:30,marginBottom:80}}>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={styles.postProfileText}>
                    <TouchableOpacity>
                       <Text style={{fontSize:16,color:'#1B1B1B'}}>Lorem Ipsum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>PRINCIPAL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={styles.profiledotImage} source={ require('../../../assets/assets/dot.png')}/>
                    </TouchableOpacity>
                </View>
          </View>
           <Text style={styles.principal}>Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit, 
           sed do eiusmod tempor incidt magna aliqua ...see more</Text>

           <View style={styles.rectangle55}>
            <Text style={{fontSize:14,color:'white',left:15,fontWeight:'bold'}}>Yes</Text>
           </View>

           <View style={styles.rectangle57}>
            <Text style={{fontSize:14,color:'white',left:15,fontWeight:'bold'}}>No</Text>
           </View>


           <View style={styles.rectangle58}>
            <Text style={{fontSize:14,color:'white',left:15,fontWeight:'bold'}}>Don't Know</Text>
           </View>

           <View style={{flexDirection:'row',alignItems:'center',top:90}}>
            <TouchableOpacity>
             <Text style={{fontSize:10,left:35,top:3}}>121 VOTES</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{flexDirection:'row',left:20}}>
            <Image style={styles.comment} source={ require('../../../assets/assets/comment.png')}/>
            <Text style={{fontSize:10,left:35,top:3}}>123</Text>
            </TouchableOpacity>
            <Text style={{fontSize:10,left:150,top:3}}>12:01 AM</Text>
            <Text style={{fontSize:10,left:162.5,top:3}}>|</Text>
            <Text style={{fontSize:10,left:175,top:3}}>15 APR 22</Text>
          </View>



          </View>




          <View  style={{marginBottom:90,bottom:19}}>
          <View style={styles.postProfileView}>
             <TouchableOpacity>
               <View style={styles.postProfile}></View>
             </TouchableOpacity>   
                <View style={styles.postProfileText}>
                    <TouchableOpacity>
                       <Text style={{fontSize:16,color:'#1B1B1B'}}>Lorem Ipsum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={{fontSize:10,color:'#1B1B1B'}}>STUDENT</Text>
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



        </View>  
    </ScrollView>

    
  )
}

export default Home


const styles = StyleSheet.create({
    text1:{
        fontSize:34,
        color:'#00295A',
        fontWeight:'bold'
    },
    view:{
        top:35,
        left:8,
        flexDirection:'row',
    },
    text2:{
        fontSize:12,
        color:'#656F7B'
    },
    view1:{
        top:25,
        left:6
    },
    image:{
        width:27.97,
        height:28,
        left:220,
        top:8
    },
    view2:{
        flexDirection:'row',
        top:40,
        width:270,
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
       left:8
      },
      textInput:{
        fontSize:16,
        left:30, 
        width:210,
        color:'#747474'
       },
       box:{
        width:45,
        height:45,
        borderWidth:2,
        borderColor:'#00295A',
        borderRadius:20,
        backgroundColor:'#00295A',
        alignItems:'center',
        left:68,
        bottom:5
    },
    image2:{
      width:15.51,
      height:13.71,
      alignItems:'center',
      top:14.6
    },

    stories:{
      fontSize:16,
      color:'#00295A',
    },
    storiestitleView:{
      top:45,
      left:8,
     
    },

    box1:{
      width:54,
      height:55,
      borderWidth:1,
      borderColor:'#00295A',
      borderRadius:50,
      backgroundColor:'white',
      left:8,
      top:60,
     
  },
  box2:{
    width:54,
    height:55,
    borderWidth:1,
    borderColor:'#00295A',
    borderRadius:50,
    backgroundColor:'white',
    left:15,
    top:60,
   
},
box3:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:22,
  top:60,
  
},
box4:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:29,
  top:60,
  
},
box5:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:36,
  top:60,
  justifyContent:'space-between'
},
box6:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:43,
  top:60,

},
box7:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:50,
  top:60,
  
},
box8:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:57,
  top:60,

},
box9:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:64,
  top:60,
  
},
box10:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:71,
  top:60,
  
},
box11:{
  width:54,
  height:55,
  borderWidth:1,
  borderColor:'#00295A',
  borderRadius:50,
  backgroundColor:'white',
  left:78,
  top:60,
  
},
stories1:{
  fontSize:16,
  color:'#00295A',
},
storiestitleView1:{
  top:5,
  left:8,
 
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
postProfileView:{
  flexDirection:'row',
  top:35
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
reactangle:{
  width:360,
  height:323,
},
rectangle:{
  width:360,
  height:50,
  backgroundColor:'#00295A',
  alignItems:'center',
  bottom:49,
  flexDirection:'row'
},
source:{
  width:10.99,
  height:15.55,
  left:270
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
reactangle1:{
  width:360,
  height:260,
},
principal:{
  paddingTop:50,
  left:15,
  fontSize:12,
  marginRight:16
},
rectangle55:{
  width:310,
  height:40,
  alignItems:'center',
  top:30,
  flexDirection:'row',
  left:25,
  borderWidth:2,
  backgroundColor:'#012D62',
  borderColor:'#012D62',
  borderRadius:50,
},
rectangle57:{
  width:310,
  height:40,
  alignItems:'center',
  top:50,
  flexDirection:'row',
  left:25,
  borderWidth:2,
  backgroundColor:'#012D62',
  borderColor:'#012D62',
  borderRadius:50,
},
rectangle58:{
  width:310,
  height:40,
  alignItems:'center',
  top:70,
  flexDirection:'row',
  left:25,
  borderWidth:2,
  backgroundColor:'#012D62',
  borderColor:'#012D62',
  borderRadius:50,
},

})