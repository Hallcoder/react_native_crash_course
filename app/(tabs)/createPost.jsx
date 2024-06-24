import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import InputWithIcon from '../components/inputWithIcon';
import { ErrorMessage, Formik } from 'formik';
import { Button } from 'react-native-paper';
import axios from 'axios';
import { useRouter } from 'expo-router';
import * as Yup from "yup";
const Checkout = () => {
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const createPost = (values) =>{
    setLoading(true)
    axios.post(`${process.env.EXPO_PUBLIC_API_URL}/posts`,values).then(d =>{
      console.log(d.data);
      router.push("Posts");
    }).catch(err =>{
      console.log(err);
    }).finally(()=>{
      setLoading(false);
    })
  }
  const validationSchema = Yup.object({
    title:Yup.string().required(),
    body:Yup.string().required()
  })
  return (
    <View className="bg-gray-700 h-fit">
      <View className="bg-white min-h-screen mt-[20vh] rounded-lg">
        <Text className="text-3xl font-semibold mx-auto mt-20 mb-8">Create new post</Text>
        <Formik
        validationSchema={validationSchema}
     initialValues={{ title: '',body:"" }}
     onSubmit={values => createPost(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
       <View>
          <TextInput
         placeholder='Title...'
         className="border-2 w-10/12  m-auto p-2 rounded-md border-gray-200 my-2"
           onChangeText={handleChange('title')}
           onBlur={handleBlur('title')}
           value={values.title}
         />
        {errors.title && touched.title && <Text className='text-red-600 text-sm mt-1 mx-10'>{errors.title}</Text>}
          <TextInput
          placeholder='Body...'
          className="border-2 w-10/12 m-auto p-2 rounded-md border-gray-200 my-2"
           onChangeText={handleChange('body')}
           onBlur={handleBlur('body')}
           value={values.body}
         />
        {errors.body && touched.body && <Text className='text-red-600 text-sm mt-1 mx-10'>{errors.body}</Text>}
         <Pressable onPressIn={handleSubmit} className="p-2 rounded-md bg-gray-700 text-white w-10/12 m-auto mt-4">
          <Text className="text-center text-white">{loading ? "Loading...":"Create post"}</Text>
         </Pressable>
       </View>
     )}
   </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Checkout;