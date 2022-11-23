/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-10-28 11:01:42
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-23 23:13:10
 * @FilePath: \bugfixer\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavTop from './pages/TitlePage';
import 'antd/dist/antd.min.css'
import reportWebVitals from './reportWebVitals';

import NavigationRoute from './route/router';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.Fragment>
    <BrowserRouter>
    <NavigationRoute />
    </BrowserRouter>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
