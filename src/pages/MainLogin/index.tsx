/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-15 16:00:16
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-18 21:42:29
 * @FilePath: \bugfixer\src\pages\MainLogin\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import { Button, Input, Tabs } from 'antd';
import { requestjson } from '../../utils/request';
import { LoginByCode, LoginByForget, LoginByPhonePwd, SendCode } from './service';
import Modal from 'antd/lib/modal/Modal';
import { message, Space } from 'antd';

const MainLogin: React.FC = () => {

    const [PageState, setPageState] = useState<any>({
        AllowClick: false,
        PhoneCheck: false,
        PwdCheck: false,
        LoginType: "账号登陆",
        UserPhone: "",
        UserPwd: "",
        Code:""
    })

    const timerCount = 60
    const [count, setCount] = useState(timerCount)
    const timerRef = useRef(null)
    //控制弹出层
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const cutCount = () => {
        setCount((prevState) => prevState - 1)
    }
    const sendCode = () => {
        //发送验证码
        SendCode(PageState.UserPhone).then((res: any) => {
            if (res.code == "FP00000") {
                CodeSuccess()
            }else{
                CodeError()
            }
        })
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

    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: '登陆成功',
        });
    };
    const CodeSuccess = () => {
        messageApi.open({
            type: 'success',
            content: '验证码发送成功',
        });
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: '用户名或密码不正确',
        });
    };

    const CodeError = () => {
        messageApi.open({
            type: 'error',
            content: '验证码发送失败，请联系管理员',
        });
    };

    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: '请输入正确的用户名或密码',
        });
    };
    
    const codeCheckerror = () => {
        messageApi.open({
            type: 'error',
            content: '验证码错误',
        });
    };
    return (
        <div className='container'>
            <img className='back' src={require("./static/back.png")}></img>
            <div className='content'>
                <div className='contentItems'>
                    <div className='logoNameContainer'>
                        <img className='logoImg' src={require('./static/logo.png')}></img>
                        <div className='logoText'>协创</div>
                    </div>
                    <div className='centerContainer'>
                        <div className='leftContainer'>
                            <div className='leftItem'>设计， 1 + 1 {">"} 2！</div>
                            <div className='leftBottom'>高效设计联调平台，产品经理用 RP，UI设计师用 DT</div>
                        </div>
                        <div className={PageState.LoginType == "忘记密码登陆" ?  "rightItemMax":"rightItem"}>
                            <div className='loginType'>
                                <div className='dlText'>
                                    <h1 className='loginTextName'>登录</h1>
                                </div>
                                <Tabs className='loginTypeContainer' activeKey={PageState.LoginType == "账号登陆" ? "1" : "2"} onTabClick={(e) => {
                                    setPageState(Number(e) == 1 ? { ...PageState, LoginType: "账号登陆" } : { ...PageState, LoginType: "验证码登陆" })
                                }}>
                                    <Tabs.TabPane className='pwdContainer' tab="密码登录" key="1">
                                        <Input className='pwdItem' placeholder='邮箱/手机号' onChange={(e) => {
                                            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.target.value))) {
                                                setPageState({ ...PageState, PhoneCheck: false })
                                                return
                                            }
                                            setPageState({ ...PageState, UserPhone: e.target.value, PhoneCheck: true })
                                        }}></Input>
                                        <Input className='pwdItem' type='password' placeholder='密码' suffix={<div onClick={() => {
                                            setPageState({ ...PageState, LoginType: "忘记密码登陆" })
                                        }}>忘记密码</div>} onChange={(e) => {
                                            if (e.target.value.length < 7) {
                                                setPageState({ ...PageState, PwdCheck: false})
                                                return
                                            }
                                            setPageState({ ...PageState, PwdCheck: true, UserPwd: e.target.value })

                                        }}></Input>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane className='pwdContainer' tab="验证码登录" key="2">
                                        <Input className='pwdItem' placeholder='邮箱/手机号' onChange={(e) => {
                                            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.target.value))) {
                                                setPageState({ ...PageState, PhoneCheck: false })
                                            } else {
                                                setPageState({ ...PageState, UserPhone: e.target.value, PhoneCheck: true })
                                            }
                                        }}></Input>
                                        <Input className='pwdItem' placeholder='验证码' onChange={(e)=>{
                                            setPageState({ ...PageState, Code: e.target.value})
                                        }} suffix={<div onClick={() => {
                                            if (PageState.PhoneCheck) {
                                                sendCode()
                                            }
                                            return
                                        }}>{count === timerCount ? "发送验证码" : `还剩${count}秒`}</div>}></Input>
                                        <Input className={PageState.LoginType == "忘记密码登陆" ? 'pwdItem' : "none"} type='password' placeholder='输入新密码' onChange={(e) => {
                                            if (e.target.value.length < 7) {
                                                setPageState({ ...PageState, PwdCheck: false, })
                                            } else {
                                                setPageState({ ...PageState, PwdCheck: true,UserPwd: e.target.value})
                                            }

                                        }}></Input>
                                    </Tabs.TabPane>
                                </Tabs>
                                <div className='warningTextContainer'>
                                    <div className='warningText'>
                                        {PageState.PhoneCheck ? PageState.PwdCheck ? "" : "请输入格式正确的密码" : "请输入格式正确的手机号"}
                                    </div>
                                </div>
                                {contextHolder}
                                <Button className='loginButton' onClick={(e) => {
                                    if (PageState.LoginType == "账号登陆" && PageState.PhoneCheck && PageState.PwdCheck) {
                                        //正常登陆              
                                        LoginByPhonePwd(PageState.UserPhone, PageState.UserPwd).then((res: any) => {
                                            if (res.code == 200) {
                                                let userGlobalData: any = {
                                                    phone: PageState.UserPhone.toString(),
                                                    token: res.data
                                                }
                                                window.localStorage.setItem("userGlobalData", JSON.stringify(userGlobalData))
                                                return success()
                                            }
                                            error()

                                        })
                                    } else if (PageState.LoginType  == "验证码登陆"&& PageState.PhoneCheck ) {
                                        console.log("yzm");
                                        LoginByCode(PageState.UserPhone, PageState.Code).then((res: any) => {
                                            if (res.code == 200) {
                                                return success()
                                            }
                                            codeCheckerror()
                                        })
                                    } else if (PageState.LoginType  == "忘记密码登陆"&& PageState.PhoneCheck&& PageState.PwdCheck) {
                                        console.log("wjmm");
                                        LoginByForget(PageState.UserPhone, PageState.Code, PageState.UserPwd)
                                    } else {
                                        return warning()
                                    }
                                }} type="primary" size='large'>登录</Button>
                                <div className='noPhoneContainer'>
                                    <div className='nophoneText'>没有账号？</div>
                                    <div className='loginText' onClick={showModal}>立即注册</div>
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

