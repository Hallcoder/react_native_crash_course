import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
 
const CardComponent = ({post,commentPage}) => {
  const [user,setUser] = useState({name:""});
  const router = useRouter();
const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    axios.get(`${process.env.EXPO_PUBLIC_API_URL}/users/${post.userId}`).then(d =>{
      setUser(d.data);
    }).catch(err =>{
      Toast.show({
        type:'error',
        text1:"Something went wrong!",
        text2:err.message
      })
    }).finally(()=>{
    setLoading(false);
    })
  },[])
  const goToPostDetails = () =>{
router.push(`/post-details/${post.id}`);
  }
    {return !loading ?<View className="p-2 cursor-pointer border shadow-md flex flex-col gap-2  border-gray-200">
      <Text className="font-semibold text-sm">{post.title}</Text>
      <Text className="text-xs">{post.body}</Text>
     <Text className="my-2 mx- text-xs">Post created by <Text className='font-semibold'>{user.name}</Text></Text>
      {!commentPage && <Pressable onPress={goToPostDetails} className="m-auto bg-gray-700 p-2 w-11/12 rounded-md"><Text className="text-white text-center">View Details</Text></Pressable>}
    </View>:<Text>user...</Text>}
};


export default CardComponent;