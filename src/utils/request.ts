/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-16 15:46:20
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-17 14:40:19
 * @FilePath: \bugfixer\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IuWdpOWdpGRkIiwiSXNBZG1pbiI6ZmFsc2UsImV4cCI6MTY2ODU5MjcwMX0.yW08h8TDwTgQUwYnEg6U6wqkP8c4MmjXGbGxsLkB3F0"

import { globalConfig } from "./config";


enum Content_Type {
    application$json = "application/json",
    application$x_www_form_urlencoded = "application/x-www-form-urlencoded"
}

interface reqheaders {
    Content_Type?: Content_Type,
    Authorization?: string,

}

interface requestjson {
    parems?: any,
    data?: any,
    headers?: reqheaders,
    timeout?: number
}
// let token = localStorage.getItem("userGlobalData")
const Request = (function() {
    return {
        Content_Type: Content_Type,
        config: {
            host: globalConfig.serverTarget,
            headers: {
                Content_Type: Content_Type.application$json,
                // Authorization:globalConfig.userinfo.token
            },
            timeout: globalConfig.fetchConfig.defaultTimeout*1000
        },
        __getBody(Content_type:string, data: any){
            if (Content_type.indexOf("application/x-www-form-urlencoded") != -1) {
                let body = [];
                for (const key in data) {
                    if (Object.prototype.hasOwnProperty.call(data, key)) {
                        const value = data[key];
                        body.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                    }
                }
                return body.join('&');
            } else if (Content_type.indexOf("application/json") != -1) {
                return JSON.stringify(data);
            }
        },
        __ajax(method: string, url: string, parems: object|undefined|any, data: object|undefined, headers: HeadersInit|undefined|any, timeout:number|undefined) {
            return new Promise<void>((resolve, reject) => {
                let headers0 = Object.assign(this.config.headers, headers)
                headers0['Content-Type'] = headers0.Content_Type;
                delete headers0.Content_Type;
                
                
                let fetch_data:any = {
                    headers: headers0,
                    method: method
                }
                if (data && method == 'post') {
                    let Content_type = headers0["Content-Type"];
                    console.log(Content_type,"1");
                    console.log(data,"2");

                    console.log(fetch_data.body,"3");
                    
                    fetch_data.body = this.__getBody(Content_type==(null||undefined)?"application/json":Content_type, data);
                }
                url = this.config.host + url;
                url = url.split("#")[0];
                if (parems){
                    if (url.indexOf("?") == -1) {
                        url += "?";
                    } else {
                        url += "&";
                    }
                    let body = [];
                    for (const key in parems) {
                        if (Object.prototype.hasOwnProperty.call(data, key)) {
                            const value = parems[key];
                            body.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                        }
                    }
                    url += body.join('&');
                }
                
                if (!timeout) {
                    timeout = this.config.timeout;
                }
                Promise.race([
                    fetch(url, fetch_data),
                    new Promise((resolve, reject) => {
                        setTimeout(()=>{reject(new Error("request timeout"))}, timeout)
                    })
                ]).then((res:any) => {
                    return resolve(res.json())
                })
                
            })
        },
        get(url: string, data?: requestjson){
            return this.__ajax('get', url, data&&data.parems, data&&data.data, data&&data.headers, data&&data.timeout);
        },
        post(url: string, data?: requestjson){
            return this.__ajax('post', url, data&&data.parems, data&&data.data, data&&data.headers, data&&data.timeout);
        }
        
    };
})();
export default Request;




