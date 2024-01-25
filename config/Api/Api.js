import axios from 'axios';
import ApiConstants from './apiConstants';

export const GetCall = (url) => {
    return axios.get(ApiConstants.BASE_URL + url);
}


export const PostWithAuth = (url, token, data) => {
    return axios.post(ApiConstants.BASE_URL + url, data, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
}

export const GetWithAuth = (url, token) => {
    return axios.get(ApiConstants.BASE_URL + url, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
}

export const MultipartPost =(url,token,data)=>{
    return axios.post(ApiConstants.BASE_URL+url,data,{

        headers:{

            'Authorization':'Bearer'+ token,
        }
    })

}

