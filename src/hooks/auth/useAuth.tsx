import { useState } from "react";
import { AuthInterface } from "../../interfaces/auth";
import { PostRequestInterface } from "../../interfaces/dataSource";
import PostDataSource from "../../dataSource/remoteDataSource/postData";

const useAuth = () => {
  const {callAPIPost, response} = PostDataSource(); 


  const doLogin = async (creadential:AuthInterface) => {
    const request:PostRequestInterface = {
      url: '/auth/login',
      headers: {ContentType: 'application/json'},
      payload: creadential
    }
    await callAPIPost(request);
  }

  return {
    doLogin,
    response
  }
}


export default useAuth;