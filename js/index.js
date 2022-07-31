// 主函数
import { storage2 } from './resource.js'
import { customClock } from './customClock.js';
import { typingColor2 } from './customTyping.js';
import { contractMe } from './contract.js';
import { supervision } from './supervision.js';

customClock();
typingColor2("typing-box");
contractMe("contract-me");

var _h;
(function () {
    mt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?56f82fb5d6e79ebcd1cd1a3e089648a1";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

// console.log("web宽度:",document.body.clientWidth)
// console.log("web高度:",document.body.clientHeight)

// 打开网页时
window.onload = function () {
    // supervision();
}
