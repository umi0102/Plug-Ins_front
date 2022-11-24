/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-16 22:48:14
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-23 23:26:37
 * @FilePath: \Plug-Ins_front\src\pages\ProjectList\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import "./index.css";

const ProjectList: React.FC = () => {

    return (
        <div className='contanier'>
            <div className='nav-right'>
            <div className='itemcontanier'>
                    <img className='shutdownIcon' src={require("./shutdown.png")} alt="none"></img>
                    <img className='itemImage' src={require("./projectImage.png")} alt="none"></img>
                    <div className='itemText'>原神</div>
                </div>
                <div className='itemcontanier'>
                    <img className='shutdownIcon' src={require("./shutdown.png")} alt="none"></img>
                    <img className='itemImage' src={require("./projectImage.png")} alt="none"></img>
                    <div className='itemText'>原神</div>
                </div>
                <div className='itemcontanier'>
                    <img className='shutdownIcon' src={require("./shutdown.png")} alt="none"></img>
                    <img className='itemImage' src={require("./projectImage.png")} alt="none"></img>
                    <div className='itemText'>原神</div>
                </div>
                <div className='itemcontanier'>
                    <img className='shutdownIcon' src={require("./shutdown.png")} alt="none"></img>
                    <img className='itemImage' src={require("./projectImage.png")} alt="none"></img>
                    <div className='itemText'>原神</div>
                </div>
            </div>
        </div>

    );
};

export default ProjectList;