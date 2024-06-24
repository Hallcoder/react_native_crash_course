import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import CommentCard from './CommentCard';
import CardComponent from './CardComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
const Comments = ({comments}) => {
  const [post,setPost] = useState({postId:""});
  console.log("Comment at 0",comments[0])
const [loading,setLoading] = useState(false);
const [deleting,setDeleting] = useState(false);

 useEffect(()=>{
  setLoading(true);
  if (comments.length > 0 && comments[0].postId) {
    axios.get(`${process.env.EXPO_PUBLIC_API_URL}/posts/${comments[0].postId}`).then(d =>{
      setPost(d.data);
    }).catch(err =>{
      Toast.show({
        type:'error',
        text1:"Something went wrong!",
        text2:err.message
      })
    }).finally(()=>{
    setLoading(false);
    })
  } else {
   Toast.show({
    type:"error",
    text1:"Something went wrong!"
   })
  }
 },[comments]);

  const deletePost = ()=>{
    setDeleting(true)
    axios.delete(`${process.env.EXPO_PUBLIC_API_URL}/posts/${comments[0].postId}`).then((d)=>{
        Toast.show({
            type:'success',
            text1:"Deleted successfully!"
        });
        console.log(d);
    }).catch(err =>{
        Toast.show({
            type:'error',
            text1:'Something went wrong!',
            text2:err.message
        });
    }).finally(() =>{
      setDeleting(false);
    })
  }

    {return !loading ? <SafeAreaView>
     <ScrollView className="p-2 cursor-pointer shadow-md border-gray-200">
      <Toast />
      <Text className="text-2xl mb-2">Post {post.postId}</Text>
      <CardComponent post={post} commentPage/>
      <Text className="font-semibold text-sm mt-4">Comments</Text>
     {comments.map(c =>{
        return <CommentCard comment={c} key={c.id}/>
     })}
     <Pressable onPressIn={deletePost} className="p-2 mb-10 mx-auto w-11/12 rounded-md bg-red-600 ">
        <Text className="text-white text-center">{deleting ? 'Deleting...':"Delete"}</Text>
     </Pressable>
    </ScrollView></SafeAreaView>:<Text>user...</Text>}
};


export default Comments;