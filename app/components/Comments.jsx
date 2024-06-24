import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import CommentCard from './CommentCard';
 
const Comments = ({comments}) => {
  const [user,setUser] = useState({name:""});
  const router = useRouter();
const [loading,setLoading] = useState(false);
  const deletePost = ()=>{
    axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/delete/${comments[0].postId}`).then(()=>{
        Toast.show({
            type:'success',
            text1:"Deleted successfully!"
        })
    }).catch(err =>{
        Toast.show({
            type:'error',
            text1:'Something went wrong!',
            text2:err.message
        })
    })
  }
  const goToPostDetails = () =>{
router.push(`/post-details/${post.id}`);
  }
    {return !loading ? <View className="p-2 cursor-pointer border shadow-md border-gray-200">
      <Text className="font-semibold text-sm mt-4">Comments</Text>
     {comments.map(c =>{
        return <CommentCard comment={c}/>
     })}
     <Pressable onPress={deletePost} className="p-2 w-11/12 rounded-md bg-red-600 ">
        <Text className="text-white">Delete</Text>
     </Pressable>
    </View>:<Text>user...</Text>}
};


export default Comments;