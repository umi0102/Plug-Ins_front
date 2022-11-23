/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-20 23:03:38
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-23 16:05:51
 * @FilePath: \Plug-Ins_front\src\utils\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



const mode = 'test'
// const mode = 'online'

//默认启动页面

interface globalConfig {
    serverTarget:string
    token:any
    fetchConfig:fetchConfig

}
interface fetchConfig {
    defaultTimeout:number
}

const envTarget = {
    test:{
        target:"http://localhost:8080"
    },
    online:{
        target:"http://81.68.254.93:8080"
    },
}

export const globalConfig:globalConfig = {
    serverTarget: envTarget[mode].target,

    token:"",
    fetchConfig: {
        defaultTimeout: 3,//默认请求超时时间
    }
}
