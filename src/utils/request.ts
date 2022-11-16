/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-16 15:46:20
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-16 22:10:58
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
console.log("424234");

export function requestjson(config:requestjson) {

    return new Promise<void>((resolve, reject) => {
            fetch(target+config.url,{
                headers:{
                    "Content-Type":"application/json; charset=utf-8",
                    'Authorization':token
                },
                method:config.method,
                //@ts-ignore
                config.method=="post"?{body:JSON.stringify(config.data)}:""
            }).then(res=>{
                resolve(res.json())
            }).catch(err=>{
                reject(err)
            })
       
       
        
    })
    
}