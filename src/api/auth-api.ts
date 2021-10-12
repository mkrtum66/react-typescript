import {instance, ResultCodeEnum, ResultForCaptcha, APIResponseType} from "./api";

type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodeEnum | ResultForCaptcha>>(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
