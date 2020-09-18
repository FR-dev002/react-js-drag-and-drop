import Axios from "axios";
import {ResponseInterface} from "../../interfaces/response/errorInterface";
import {PostRequestInterface} from "../../interfaces/dataSource";
import _ from "lodash";
const PostDataSource = () => {
	const callAPIPost = async ({url, headers, payload}: PostRequestInterface) => {
		const response = await Axios.post(url, payload, {headers})
			.then((response) => {
				if (response.status === 200) {
					const data: ResponseInterface = {
						status: response.status,
						data: response.data,
						message: response.statusText,
					};
					return data;
				}
			})
			.catch(async ({response}) => {
				console.log(response);
				if (response.status === 422) {
					const data: ResponseInterface = {
						status: response.status,
						data: response.data,
						message: response.statusText,
					};
					return data;
				}
			});

		return response;
	};

	return {callAPIPost};
};

export default PostDataSource;
