import axios from "axios";
import { usePathname, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CommentCard from "../components/CommentCard";
import Comments from "../components/Comments";


const PostDetails = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const [loading,setLoading] = useState(false);
  const [comments,setComments] = useState([]);
  useEffect(()=>{
    setLoading(true);
   axios.get(`${process.env.EXPO_PUBLIC_API_URL}/posts/${id}/comments`).then(d =>{
    setComments(d.data);
  }).finally(()=>{
    setLoading(false)
   })
  },[])
{  return !loading ?
    <View className="flex flex-col justify-center">
     <Comments comments={comments} />
    </View>:<Text className="mx-auto mt-[40vh]">Loading...</Text>}
};

export default PostDetails;
