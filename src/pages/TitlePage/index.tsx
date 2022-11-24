import { Button, Dropdown } from 'antd';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import React, { useMemo, useState } from 'react';
import "./index.css"
import {  
    useNavigate,
} from 'react-router-dom';
import { globalConfig } from '../../utils/config';
import { getUserinfo } from './service';


const items: MenuProps['items'] = [
  {
    label: '项目列表',
    key: '/one',
  },
  {
    label: '处理中心',
    key: '/two',
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        // children: [
        //   {
        //     label: 'Option 1',
        //     key: '/o',
        //   },
        //   {
        //     label: 'Option 2',
        //     key: '/two',
        //   },
        // ],
      },

    ],
  },

];
const list: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
const MainPage: React.FC = () => {
  useMemo(()=>{
    getUserinfo().then((res:any)=>{
      setUserinfo(res.data)
    })
  },[])
  
  const [userinfo,setUserinfo] = useState<any>({userinfo_name: '未登录', userinfo_phone: '未登录', userinfo_usericon: "require(`./notLogin.png`)"})
  const [current, setCurrent] = useState('mail');
  let navigate = useNavigate()

  // if(globalConfig.userInfo)
  function onClick(e:any) {
    console.log(e);
    setCurrent(e.key);
    navigate(e.key)
  }


return (
  <div>
    <div className='naviContainer'>
    <div className='menuItem'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} ></Menu>
    </div>
    <div className='imgContainer' >
      <img className='loginImg' src={userinfo.userinfo_usericon} alt="err"></img>
      <div className='loginName'>{userinfo.userinfo_name}</div>
    </div>
    
  </div>
    
  </div>
  
);
};

export default MainPage;

