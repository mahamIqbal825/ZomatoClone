


// import { AuthHeader, RefreshToken } from './getAuthHeader'
// import { RenewToken } from './RenewTokenService'
import axios from 'axios';
import { Alert } from 'react-native';
import { getToken } from './StorageService'
// import * as RootNavigation from '../RootNavigation';
// import { SetUserData, getDecodedJWT } from './UserMaster'
// import store from './Redux/store'
// import { BASE_RUL } from 'kibsons/KibsonsApis'
// import { locale } from 'kibsons/global'


//const baseURL ='https://api.zainexpress.ae/api'
const baseURL = 'http://localhost:5000/api'

const axiosInstance = axios.create({
    baseURL,
    timeout: 30000,
});

axiosInstance.interceptors.request.use(request => {
    return request;
}, function (error) {
    return error
}
)

axiosInstance.interceptors.response.use(response => {
    return response.data;
}, async error => {
    console.log('error', error );
    if (error.request && error.request.status === 401) {

        return error

        // let failedRequest = error.config;

        // const _refreshToken = RefreshToken();
        // const _accessToken = AuthHeader();

        // if (!_refreshToken || _refreshToken === '') {
        //    RootNavigation.login();
        //    return
        // }

        // const body = { AccessToken: _accessToken, RefreshToken: _refreshToken }
        // const token = await RenewToken(BASE_RUL, body);
        // const { status } = token

        // if (status === 0) {
        //   RootNavigation.login();
        //     return
        // }

        // const { accessToken, refreshToken } = token.data
        // await SetUserData(accessToken, refreshToken)
        // const payload = await getDecodedJWT();
        // store.dispatch({ type: 'UPDATE_USER_MASTER', payload: payload });

        // axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + accessToken;
        // failedRequest.headers['Authorization'] = 'Bearer ' + accessToken;
        // return await axiosInstance.request(failedRequest);

    }
    return error;
});


async function API(path, body, method) {
    const token = await getToken()
    
//    console.log(token);
    
    const authheader = {
        Accept: 'accept',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
    
    //const ___body = { ...body, language: 'en' }
    let options =
    {
        path,
        method,
        headers: authheader,
        url: path,
        timeout: 60000,
    }

    if(method !== 'GET'){
        options = Object.assign({}, options, { data: JSON.stringify(body) })
    }
    return await axiosInstance.request(options);

}

export async function API_SERVICE(path, data, method='POST') {
    try {
        const _result = await API(path, data, method)
        //console.log(_result);
        const { status, message } = _result ? _result : {}
        if (status === 1) {
            return _result
        }
        if (status === 0) {
            Alert.alert('Error', message)
            return undefined
        }
    } catch (e) {
        console.log('API_SERVICE', e);
    }

}

export async function SILENT_API_SERVICE(path, data, method='POST') {
    try {
        return await API(path, data, method)
    } catch (e) {
        console.log('API_SERVICE', e);
    }

}






