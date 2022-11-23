/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-23 14:33:12
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-23 16:13:03
 * @FilePath: \Plug-Ins_front\src\route\router.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { notification } from 'antd'
import { useEffect } from 'react'
import { Routes, Route, Link, useParams, Outlet, BrowserRouter, useNavigate, Router } from 'react-router-dom'
import MainLogin from '../pages/MainLogin'
import { checkToken } from '../pages/MainLogin/service'
import MainPage from '../pages/TitlePage'
import { globalConfig } from '../utils/config'
type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface notification {
    content: string,
    type: NotificationType;
}

const NavigationRoute: React.FC = () => {

    let navigate = useNavigate()

    //验证token，单点登录
    globalConfig.token = localStorage.getItem("token")
    useEffect(() => {

        if (!globalConfig.token) {
            navigate("/login")
            return
        }
        checkToken(globalConfig.token).then((res: any) => {
            if (res.code == 200) {
                navigate("/")
                openNotification({
                    content: "登录成功",
                    type: "success"
                })
                return
            } else {
                openNotification({
                    content: "当前登录已经失效,请重新登陆",
                    type: "warning"
                })
                localStorage.removeItem("token")
                navigate("/login")
                return
            }
        })

    }, [])
 
    const [api, globalMessage] = notification.useNotification();
    const openNotification = (e: notification) => {
        api[e.type]({
            message: "Notification Title",
            description: e.content,
        });
    };
    return (
        <div>
            {globalMessage}
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/login" element={<MainLogin />}></Route>
            </Routes>


        </div>

    )

}
export default NavigationRoute