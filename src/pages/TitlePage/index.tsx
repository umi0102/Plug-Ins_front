import { Button, Dropdown } from 'antd';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import "./index.css"
import {  
    useNavigate,
} from 'react-router-dom';


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
        children: [
          {
            label: 'Option 1',
            key: '/o',
          },
          {
            label: 'Option 2',
            key: '/two',
          },
        ],
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
const NavTop: React.FC = () => {

  const [current, setCurrent] = useState('mail');
  let navigate = useNavigate()

  const [isLogin, setLogin] = useState(0)
  function onClick(e:any) {
    console.log(e);
    setCurrent(e.key);
    navigate(e.key)
  }
function Login() {
  setLogin(1)
}

return (
  <div>
    <div className='naviContainer'>
    <div className='menuItem'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} ></Menu>
    </div>
    <div className='imgContainer' onClick={Login}>
      <img className='loginImg' src={isLogin === 1 ? require("./logined.png") : require("./notLogin.png")} alt="err"></img>
      <div className='loginName'>{isLogin === 1 ? "联调大师" : "未登录"}</div>
    </div>
    
  </div>
    
  </div>
  
);
};

export default NavTop;