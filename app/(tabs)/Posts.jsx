import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import CardComponent from '../components/CardComponent';
import { getPosts, storePosts } from '../utils/storage';

const Posts = () => {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    axios.get(`${process.env.EXPO_PUBLIC_API_URL}/posts`).then(d => {
      setPosts(d.data);
    }).finally(()=>{
      setLoading(false);
    });
  },[]);
  return (
    <ScrollView >
      {!loading ?
      posts.map(p =>{
        return<CardComponent post={p} key={p.id}/>
      }):<Text>Loading Posts...</Text>
    }
    </ScrollView>
  );
};



export default Posts;