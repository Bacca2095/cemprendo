import request from "../utils/request";

export function getCurrentUser() {
    return request({
        url: `user/current`,
        method: "get"
    });
}

export function getAllUsers() {
    return request({
        url: `user`,
        method: "get"
    });
}
