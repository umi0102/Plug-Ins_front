


// const mode = 'test'
const mode = 'online'

//默认启动页面



const envTarget = {
    test:{
        target:"http://localhost:8080"
    },
    online:{
        target:"http://81.68.254.93:8080"
    },
}

export const globalConfig = {
    serverTarget: envTarget[mode].target,

    token:"",
    fetchConfig: {
        defaultTimeout: 3,//默认请求超时时间
    }
}
