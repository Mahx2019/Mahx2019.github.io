// 测试模块
// 上线时不使用


import { storage2 } from "./resource.js";


export function testModule() {
    console.log("web宽度:", document.body.clientWidth)
    console.log("web高度:", document.body.clientHeight)
    console.log(storage2);
    console.log(storage2.cites.length);
    console.log(Math.floor(Math.random() * storage2.cites.length));
}
