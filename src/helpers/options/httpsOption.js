import firebaseConfig from '@/configs/firebase/index';

const option = {
    apiKey: firebaseConfig.apiKey,
    authApiBaseUrl: 'https://identitytoolkit.googleapis.com/v1/',

    emailSignIn: 'nhatnamvstt@gmail.com',
}

export const {apiKey, authApiBaseUrl, emailSignIn} = option;