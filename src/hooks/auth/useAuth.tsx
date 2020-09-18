import React, { useReducer } from 'react';
import { AuthInterface, RegisterInterface } from "../../interfaces/auth";
import { PostRequestInterface } from "../../interfaces/dataSource";
import PostDataSource from "../../dataSource/remoteDataSource/postData";
import { createAction } from '../../utils/createAction';
import LocalStorage from '../../helpers/localstorage';

const useAuth = () => {
  const {callAPIPost} = PostDataSource(); 
  const {setToken, setUser, getUser, getToken} = LocalStorage()

  const actions = React.useMemo(() => ({
    login: async (creadential:AuthInterface) => {
      const request = {
        url: '/auth/login',
        headers: {ContentType: 'application/json'},
        payload: creadential
      }
      const response = await callAPIPost(request);
      if(response !== undefined) {
        if(response.status === 200) {
          // console.log(JSON.parse(atob(response.data.data.original.token.split('.')[1])));
          const token = response.data.data.original.token;
          const user = response.data.data.original.user;
          setToken(token);
          setUser(user);
          dispatch(createAction('SET_ROLE', 'admin'));
          dispatch(createAction('SET_USER', 'admin'));
        }
      }
      return response;
    }
  }), []);


  const doRegister = async (creadential:RegisterInterface) => {
    const request:PostRequestInterface = {
      url: '/auth/register',
      headers: {ContentType: 'application/json'},
      payload: creadential
    }
    await callAPIPost(request);
  }

  const [state, dispatch] = useReducer(
    (state:any, action:any) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        case 'SET_ROLE':
          return {
            ...state,
            role: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: false,
      role: '',
      hasil: 0
    });

    React.useEffect(() => {
      // check token
      const token = getToken();
      if(token) {
        dispatch(createAction('SET_LOADING', false));
        const user = getUser();
        if(user) {
          dispatch(createAction('SET_USER', user));
        } else {
          dispatch(createAction('REMOVE_USER',{}))
        }
      }
    },[]);

  return {
    actions,
    state,
    doRegister
  }
}
export default useAuth;