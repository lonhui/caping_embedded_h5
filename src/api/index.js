import request from "@/utils/request"
// 获取用户获得勋章情况
export function getUserMedalInfo(param) {
    return request({
        url: '/medal/getMedalListByUid',
        method: 'post',
        headers:{"Content-Type":"application/json"},
        param
    })
}