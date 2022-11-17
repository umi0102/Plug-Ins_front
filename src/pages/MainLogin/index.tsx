/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-15 16:00:16
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-17 18:53:12
 * @FilePath: \bugfixer\src\pages\MainLogin\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import { Button, Input, Tabs } from 'antd';
import { requestjson } from '../../utils/request';

const MainLogin: React.FC = () => {
    const [phoneStr, setPhone] = useState(0)
    const [pwdStr, setPwd] = useState<any>()
    const [checkStr, setCheck] = useState<any>()
    const [loginType, setLogin] = useState<any>("1")
    const [newpwd,setNewPwd] = useState<any>(0)
    const timerCount = 60
    const [count, setCount] = useState(timerCount)
    const timerRef = useRef(null)
    const cutCount = () => {
        setCount((prevState) => prevState - 1)
    }
    const sendCode = () => {
        cutCount()
        //@ts-ignore
        timerRef.current = setInterval(cutCount, 1000)
    }
    useEffect(() => {
        if (count === 0) {
            //@ts-ignore
            clearInterval(timerRef.current)
            setCount(timerCount)
        }
    }, [count])

    //账号密码登陆
    function LoginByPhonePwd(params: any) {
        requestjson({
            url: "/user/login",
            data: {
                phone: phoneStr.toString(),
                password: pwdStr.toString()
            },
            method: "post"
        }).then((res: any) => {
            if (res.code == 200) {
                let userGlobalData: any = {
                    phone: phoneStr.toString(),
                    token: res.data
                }
                window.localStorage.setItem("userGlobalData", JSON.stringify(userGlobalData))
            }
        })
    }

    return (
        <div className='container'>
            <img className='back' src={require("./back.png")}></img>
            <div className='content'>
                <div className='contentItems'>
                    <div className='logoNameContainer'>
                        <img className='logoImg' src={require('./logo.png')}></img>
                        <div className='logoText'>协创</div>
                    </div>
                    <div className='centerContainer'>
                        <div className='leftContainer'>
                            <div className='leftItem'>设计， 1 + 1 {">"} 2！</div>
                            <div className='leftBottom'>高效设计联调平台，产品经理用 RP，UI设计师用 DT</div>
                        </div>
                        <div className={newpwd==0?"rightItem":"rightItemMax"}>
                            <div className='loginType'>
                                <div className='dlText'>
                                    <h1 className='loginTextName'>登录</h1>
                                </div>
                                <Tabs className='loginTypeContainer' activeKey={loginType} onTabClick={(e)=>{
                                    setLogin(e.toString())
                                    setNewPwd(0)
                                }}>
                                    <Tabs.TabPane className='pwdContainer' tab="密码登录" key="1">
                                        <Input className='pwdItem' placeholder='邮箱/手机号' onChange={(e) => {
                                            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.target.value))) {
                                                setPhone(0)
                                            } else {
                                                setPhone(Number(e.target.value))
                                            }
                                        }}></Input>
                                        <Input className='pwdItem' type='password' placeholder='密码' suffix={<div onClick={() => {
                                            setLogin("2")
                                            setNewPwd(1)
                                            console.log("dada");

                                        }}>忘记密码</div>} onChange={(e) => {
                                            if (e.target.value.length < 7) {
                                                setPwd(0)
                                            } else {
                                                setPwd(e.target.value)
                                            }
                                        }}></Input>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane className='pwdContainer' tab="验证码登录" key="2">
                                        <Input className='pwdItem' placeholder='邮箱/手机号' onChange={(e) => {
                                            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.target.value))) {
                                                setPhone(0)
                                            } else {
                                                setPhone(Number(e.target.value))
                                            }
                                        }}></Input>
                                        <Input className='pwdItem' placeholder='验证码' suffix={<div onClick={() => {
                                            sendCode()
                                        }}>{count === timerCount ? "发送验证码" : `还剩${count}秒`}</div>} onChange={(e) => {
                                            setCheck(e.target.value)
                                        }}></Input>
                                        <Input className={newpwd=="0"?'none':"pwdItem"} type='password' placeholder='输入新密码' onChange={(e) => {
                                            if (e.target.value.length < 7) {
                                                setPwd(0)
                                            } else {
                                                setPwd(e.target.value)
                                            }

                                        }}></Input>
                                    </Tabs.TabPane>
                                </Tabs>
                                <div className='warningTextContainer'>
                                    <div className='warningText'>
                                        {phoneStr != 0 ? pwdStr != 0 ? "" : "请输入格式正确的密码" : "请输入格式正确的手机号"}
                                    </div>
                                </div>

                                <Button className='loginButton' onClick={(e) => {
                                    if(loginType == "1"){
                                        //正常登陆                                       
                                        LoginByPhonePwd(e) 
                                    }else if(loginType == "2"&&newpwd!=1){
                                        console.log("yzm");
                                        //验证码登陆
                                    }else if(newpwd==1){
                                        console.log("wjmm");
                                        //忘记密码验证码登陆，
                                    }else{
                                        return
                                    }
                                }} type="primary" size='large'>登录</Button>
                                <div className='noPhoneContainer'>
                                    <div className='nophoneText'>没有账号？</div>
                                    <div className='loginText'>立即注册</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MainLogin;