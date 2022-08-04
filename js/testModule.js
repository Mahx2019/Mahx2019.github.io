// 测试模块
// 上线时不使用


import { storage2 } from "./resource.js";


export function testModule() {
    console.log("web宽度:", document.body.clientWidth)
    console.log("web高度:", document.body.clientHeight)
    anime({
        targets: '.line-drawing-demo .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
}
