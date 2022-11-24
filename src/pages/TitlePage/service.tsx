/*
 * @Author: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @Date: 2022-11-16 22:48:14
 * @LastEditors: fangjiwei fangjiwei6354_xm.cicdi@chinaccs.cn
 * @LastEditTime: 2022-11-24 22:29:29
 * @FilePath: \Plug-Ins_front\src\pages\TitlePage\service.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//根据token

import Request from "../../utils/request";


export function getUserinfo() {
    return Request.post("/api/userinfo",{})
}
