import request from "@/util/request"
// 获取用户获得勋章情况
export function getUserMedalInfo(data) {
    return request({
        url: '/choose/getProblems',
        method: 'post',
        headers:{"Content-Type":"application/json"},
        data
    })
}