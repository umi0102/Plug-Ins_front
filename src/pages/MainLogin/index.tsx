/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-15 16:00:16
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-16 17:03:03
 * @FilePath: \bugfixer\src\pages\MainLogin\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import "./index.css";
import { Button, Input, Tabs } from 'antd';
import { json } from 'stream/consumers';
import { requestjson } from '../../utils/request';

const MainLogin: React.FC = () => {
    const [phoneStr, setPhone] = useState(0)

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
                        <div className='rightItem'>
                            <div className='loginType'>
                                <div className='dlText'>
                                    <h1 className='loginTextName'>登录</h1>
                                </div>
                                <Tabs className='loginTypeContainer' defaultActiveKey="1">
                                    <Tabs.TabPane className='pwdContainer' tab="密码登录" key="1">
                                        <Input className='pwdItem' placeholder='邮箱/手机号' onChange={(e) => {
                                            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(e.target.value))) {
                                                setPhone(1)
                                            } else {
                                                setPhone(0)
                                            }
                                        }}></Input>
                                        <Input className='pwdItem' type='password' placeholder='密码' suffix={<div onClick={() => {
                                            console.log("3312123");

                                        }}>忘记密码</div>}></Input>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane className='pwdContainer' tab="验证码登录" key="2">
                                        Content of Tab Pane 2
                                    </Tabs.TabPane>
                                </Tabs>
                                <div className='warningTextContainer'>
                                    <div className='warningText'>{phoneStr == 0 ? "" : "请输入格式正确的手机号"}</div>
                                </div>

                                <Button className='loginButton' onClick={() => {
                                    requestjson({
                                        url:"/api/user/projects",
                                        data:{
                                            
                                        },
                                        method:"get"
                                    }).then(res=>{
                                        console.log(res);
                                        
                                    })
                                    

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