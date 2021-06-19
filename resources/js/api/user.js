import request from "../utils/request";

export function getCurrentUser() {
    return request({
        url: `user/current`,
        method: "get"
    });
}
