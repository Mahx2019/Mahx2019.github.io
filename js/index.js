// 主函数
import { storage2 } from './resource.js'
import { customClock } from './customClock.js';
import { typingColor2 } from './customTyping.js';
import { contractMe } from './contract.js';
import { supervision } from './supervision.js';

customClock();
typingColor2("typing-box");
contractMe("contract-me");



// console.log("web宽度:",document.body.clientWidth)
// console.log("web高度:",document.body.clientHeight)

// 打开网页时
window.onload = function () {
    // supervision();
}
