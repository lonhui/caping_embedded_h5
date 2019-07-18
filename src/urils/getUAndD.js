import { setCookie,getCookie } from "./Cookie.js";

const getUAndDByUrl = () => {
    let user = {
        uid : undefined,
        did : undefined
    }
    const url = window.location.href
    let uid = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9]+)/)
    let did = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9A-Z]+)/)
    if(uid && uid.length >= 2){
      user.uid = uid[1]
      setCookie("uid",uid[1],1)
    }
    
    if(did && did.length >= 2){
      user.deviceId = did[1]
      setCookie("did",did[1],1)
    }

    return user
}

const getUAndDByCookie = () => {
    let user = {
        uid : undefined,
        did : undefined
    }
    let uid = getCookie("uid")
    let did = getCookie("did")
    if(uid !== undefined || uid !== null && uid.length > 0){
        user.uid = uid
    }
    if(did !== undefined || did !== null && did.length > 0){
        user.did = did
    }

    return user
}

export { getUAndDByUrl, getUAndDByCookie }