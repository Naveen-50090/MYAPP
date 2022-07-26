import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import First from '../components/skipingPages/firstskip/First';
import Second from '../components/skipingPages/secondSkip/Second';
import Third from '../components/skipingPages/thirdskip/Third';
import LoginHead from '../components/LoginPages/loginheadPage/LoginHead';
import ForgetMail from '../components/LoginPages/forgetMailpage/ForgetMail';
import PasswordChangePage from '../components/LoginPages/changepage/PasswordChangePage';
import AfterChangeLogin from '../components/LoginPages/afterChangePasswodLogin/AfterChangeLogin';
import ChoosePage from '../components/LoginPages/choosePage/ChoosePage';
import AlmostDone from '../components/LoginPages/almostDone/AlmostDone';
import Home from '../components/headScreen/headtitle/Home';
import PostAndFeed from '../components/headScreen/post/PostAndFeed';
import Comment from '../components/headScreen/comment/Comment';
import Profile from '../components/headScreen/profile/Profile';
import Everyone from '../components/postseen/everyone/Everyone'
import DepartmenSeen from '../components/postseen/department/DepartmenSeen';
import Myprofile from '../components/headScreen/profile/personal/personalpages/Myprofile';



const HomeScreen = () => {
  return (
    <View>
       < Myprofile/>
    </View>
  )
}

export default HomeScreen

