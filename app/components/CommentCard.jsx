import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import avatar from "../../assets/person.jpg";
import axios from 'axios';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
 
const CommentCard = ({comment}) => {
 const [loading,setLoading] = useState(false);
 const [user,setUser] = useState({name:""});
 useEffect(() =>{
    setLoading(true);
   axios.get(`${process.env.EXPO_PUBLIC_API_URL}/users/${comment.userId}`).then(d =>{
    setUser(d.data);
   }).catch(err =>{
    console.log(err)
   }).finally(()=>{
    setLoading(false);
   })
 },[])
   return !loading ? <View className="flex flex-row p-2 cursor-pointer border shadow-md border-gray-200">
       <View>
       <Image source={avatar} height={30} width={30} className="m-1 h-10 rounded-full w-10"/>
       </View>
      <View className="flex flex-col">
       <Text className="font-semibold text-sm">@{comment.email}</Text>
       <Text>{comment.body}</Text>
      </View>
    </View>:<Text>user...</Text>
};


export default CommentCard;