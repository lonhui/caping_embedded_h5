import request from "@/utils/request"
// 获取用户获得勋章情况
export function getUserMedalInfo(params) {
    return request({
        url: '/v2/medal/getMedalListByUid',
        method: 'post',
        headers:{"Content-Type":"application/json"},
        params
    })
}