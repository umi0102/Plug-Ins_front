/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-16 15:46:20
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-17 00:16:02
 * @FilePath: \bugfixer\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let target = "http://localhost:8080"
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWdpOWdpGRkIiwiSXNBZG1pbiI6ZmFsc2UsImV4cCI6MTY2ODU5MjcwMX0.yW08h8TDwTgQUwYnEg6U6wqkP8c4MmjXGbGxsLkB3F0"

interface requestjson{
    url:string
    method:string
    data:any
}

//请求json数据
export function requestjson(config:requestjson) {
    return new Promise<void>((resolve, reject) => {
        if(config.method == "post"){
            fetch(target+config.url,{
                headers:{
                    "Content-Type":"application/json; charset=utf-8",
                    'Authorization':token
                },
                method:config.method,
                //@ts-ignore
                body:JSON.stringify(config.data)
            }).then(res=>{
                return res.json()
            }).then(res=>{
                    //做一些全局退出操作,待开发
            },(err)=>{
                reject(err)
            })
        }else if(config.method == "get"){
            fetch(target+config.url,{
                headers:{
                    "Content-Type":"application/json; charset=utf-8",
                    'Authorization':token
                },
                method:config.method,
            }).then(res=>{
                return res.json()
            }).then(res=>{
                    //做一些token失效，全局退出操作,待开发
                return resolve(res.json())
            },(err)=>{
                reject(err)
            })
        }
    })
}
//请求mp4，image。。。。