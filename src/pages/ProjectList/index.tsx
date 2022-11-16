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