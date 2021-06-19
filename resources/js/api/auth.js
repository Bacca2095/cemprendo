import request from "../utils/request";

export function loginRequest(data) {
    return request({
        url: `auth/login`,
        method: "post",
        data
    });
}

export function logoutRequest(data) {
    return request({
        url: `auth/logout`,
        method: "post",
        data
    });
}
