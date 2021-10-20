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

export function getUser(id) {
    return request({
        url: `user/${id}`,
        method: "get"
    });
}

export function storeUser(data) {
    return request({
        url: `user`,
        method: "post",
        data
    });
}

export function updateUser(id, data) {
    return request({
        url: `user/${id}`,
        method: "put",
        data
    });
}

export function deleteUser(id) {
    return request({
        url: `user/${id}`,
        method: "delete"
    });
}
