import { useState } from "react";
import Axios from "axios";
import { ErrorResponseInterface } from "../../interfaces/response/errorInterface";
import { PostRequestInterface } from "../../interfaces/dataSource";

const PostDataSource = () => {
  // default response api
  const initialstate:ErrorResponseInterface = {
    message: 'ok',
    status: 200,
    data: {},
  }
  const [response, setRes] = useState(initialstate);

  // API POST
  const callAPIPost = async ({url, headers, payload}:PostRequestInterface) => {
      await Axios
        .post(url, payload, { headers })
        .then((res) => {
          for (let i = 0; i < 10 * 10; i++) {
            console.log(i + 10);
          }
        })
        .catch(async ({response}) => {
          console.log(response);
          if(response.status === 422) {
            setRes({status: response.status, data:response.data, message: response.statusText});
          }
          
        });
  };

  return { callAPIPost, response };
};

export default PostDataSource;

