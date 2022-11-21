/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-15 16:00:16
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-18 21:42:29
 * @FilePath: \bugfixer\src\pages\MainLogin\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Request from "../../utils/request"

//账号密码登陆
export function LoginByPhonePwd(phoneStr: any, pwdStr: any) {
    return  Request.post(
        "/user/login",
        {
            data:{
                phone: phoneStr.toString(),
                password: pwdStr.toString()
            }

        },
    )
}
//发送验证码
export function SendCode(phoneStr: any) {
    return Request.post("/user/sendcode",
        {
            data:{
                phone: phoneStr
            }
        },
    )
}

//验证码登陆
export function LoginByCode(phoneStr: any, checkStr: any) {
    return Request.post("/user/loginbycode",
        {
            data:{
                phone: phoneStr,
                code: checkStr
            }

        },
    )
}

//忘记密码登陆
export function LoginByForget(phoneStr: any, checkStr: any, pwdStr: any) {
    return Request.post("/user/loginbycode",
        {
            data:{
                phone: phoneStr,
            code: checkStr,
            password: pwdStr
            }
            
        },
    )
}
//注册发送验证码

export function LoginByRegCheck(phoneStr:any) {
    return Request.post(
        "/user/sendcode",
        {
            data:{
                phone: phoneStr,
            }
            
        },)
}
//注册
export function Register(phoneStr:any,code:any,pwd:any,name:any) {
    return Request.post(
        "/user/regist",
        {
            data:{
                phone: phoneStr,
                code:code,
                password:pwd,
                name:name
            }
            
        },
    )
}

//验证手机号码是否可用
export function CheckPhone(phoneStr:any) {
    return Request.post(
        "/user/regist",
        {
            data:{
                phone: phoneStr,
            }
        },
    )
}