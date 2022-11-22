/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-10-28 11:01:42
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-17 10:16:35
 * @FilePath: \bugfixer\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavTop from './pages/TitlePage';
import 'antd/dist/antd.min.css'
import reportWebVitals from './reportWebVitals';

import {  
  Route, 
    Routes, 

    BrowserRouter
} from 'react-router-dom';
import B from './pages/ProjectList/test1';
import C from './pages/ProjectList/test2';
import ProjectList from './pages/ProjectList';
import MainLogin from './pages/MainLogin';



const root = ReactDOM.createRoot(

  document.getElementById('root') as HTMLElement
);

root.render(
  
  <React.Fragment>
    {/* <BrowserRouter>
    <NavTop></NavTop>
    <Routes>
					<Route path='/one' element={<ProjectList />} />
					<Route path='/two' element={<MainLogin />} />
					<Route path='/two' element={<C />} />
				</Routes>
    </BrowserRouter> */}
    <MainLogin></MainLogin>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
