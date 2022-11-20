/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-16 15:46:20
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-17 14:40:19
 * @FilePath: \bugfixer\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWdpOWdpGRkIiwiSXNBZG1pbiI6ZmFsc2UsImV4cCI6MTY2ODU5MjcwMX0.yW08h8TDwTgQUwYnEg6U6wqkP8c4MmjXGbGxsLkB3F0"

//设置服务器地址
let target = "http://localhost:8080"
// let target = "http://localhost:8080"


interface requestjson {
    url: string
    method: string
    data: any
}





//请求json数据
export function requestjson(config: requestjson) {
    return new Promise<void>((resolve, reject) => {
        if (config.method == "post") {
            fetch(target + config.url, {
                headers: {
                    "Content-Type": "application/json",
                    // 'Authorization':token
                },
                method: config.method,
                //@ts-ignore
                body: JSON.stringify(config.data)
            }).then(res => {
                return resolve(res.json())
            })

        } else if (config.method == "get") {
            fetch(target + config.url, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset:utf-8",
                    // 'Authorization':token
                },
                method: config.method,
            }).then(res => {
                return resolve(res.json())
            })
        }
    })
}
//请求mp4，image。。。。userinfo_phone="%s"
