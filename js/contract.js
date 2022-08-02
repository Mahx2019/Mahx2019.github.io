// 底部联系模块


import { storage1 } from './resource.js'


export function contractMe(rootID) {
    let mainContract = document.getElementById(rootID);
    mainContract.innerHTML = storage1.about[0];
}


// 联系方式逐渐显示动画
export function contractScrollAnime() {
    window.onscroll = () => {
        // 窗口高度
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 页面高度
        let documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        // 滚动条位置
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let baseAim = document.getElementById("main-after").offsetTop;
        if ((windowHeight + scrollTop - baseAim) > -50) {
            document.getElementById("main-after").style.opacity =  (windowHeight + scrollTop - baseAim)/(200);
        }
    }
}
