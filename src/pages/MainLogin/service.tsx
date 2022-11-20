/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-15 16:00:16
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-18 21:42:29
 * @FilePath: \bugfixer\src\pages\MainLogin\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { requestjson } from "../../utils/request"


//账号密码登陆
export function LoginByPhonePwd(phoneStr: any, pwdStr: any) {
    return  requestjson({
        url: "/user/login",
        data: {
            phone: phoneStr.toString(),
            password: pwdStr.toString()
        },
        method: "post"
    })
}
//发送验证码
export function SendCode(phoneStr: any) {
    return requestjson({
        url: "/user/sendcode",
        data: {
            phone: phoneStr
        },
        method: "post"
    })
}
//验证码登陆
export function LoginByCode(phoneStr: any, checkStr: any) {
    return requestjson({
        url: "/user/loginbycode",
        data: {
            phone: phoneStr,
            code: checkStr
        },
        method: "post"
    })
}
//忘记密码登陆
export function LoginByForget(phoneStr: any, checkStr: any, pwdStr: any) {
    return requestjson({
        url: "/user/loginbycode",
        data: {
            phone: phoneStr,
            code: checkStr,
            password: pwdStr
        },
        method: "post"
    }).then((res: any) => {
        if (res.code == 200) {

        }
    })
}
//注册发送验证码

export function LoginByRegCheck(phoneStr:any) {
    return requestjson({
        url: "/user/sendcode",
        data: {
            phone: phoneStr,
        },
        method: "post"
    })
}
//注册
export function Register(phoneStr:any,code:any,pwd:any,name:any) {
    return requestjson({
        url: "/user/regist",
        data: {
            phone: phoneStr,
            code:code,
            password:pwd,
            name:name
        },
        method: "post"
    })
}

//验证手机号码是否可用
export function CheckPhone(phoneStr:any) {
    return requestjson({
        url: "/user/regist",
        data: {
            phone: phoneStr,
        },
        method: "post"
    })
}