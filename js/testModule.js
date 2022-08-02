// 测试模块
// 上线时不使用


import { storage2 } from "./resource.js";


export function testModule() {
    console.log("web宽度:", document.body.clientWidth)
    console.log("web高度:", document.body.clientHeight)
    console.log(storage2);
    console.log(storage2.cites.length);
    console.log(Math.floor(Math.random() * storage2.cites.length));

    window.onscroll = () => {
        // 窗口高度
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 页面高度
        let documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        // 滚动条位置
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if ((windowHeight + scrollTop + 20) >= documentHeight) {
            console.log('页面滚动到达底部');
            anime({
                targets: '#main-after',
                opacity: ['0%', '100%'],
                easing: 'easeInOutQuad',
            });
        }
    }

}
