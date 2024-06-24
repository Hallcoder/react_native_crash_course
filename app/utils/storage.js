import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeToken = async(token) =>{
        await AsyncStorage.setItem("accessToken",token);
}

export const getToken = async()=>{
    return await AsyncStorage.getItem("accessToken");
}

export const getPosts = async()=>{
    return await AsyncStorage.getItem("posts");
}

export const storePosts = async(posts)=>{
   await AsyncStorage.setItem("posts",JSON.stringify(posts));
}