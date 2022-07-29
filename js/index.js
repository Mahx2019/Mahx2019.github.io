// 主函数
import { storage, storage2 } from './resource.js'
import { customClock } from './customClock.js';
import { typingcolor, typingcolor2, typingcolor3, typingcolor4, typingcolor5 } from './customTyping.js';

customClock();
typingcolor3("typing-box3");
// typingcolor4("typing-box3");
// typingcolor5("typing-box3");


// 打开网页时
window.onload = function () {
    // showTips();
}
const st = storage2;

function showWords() {
    var count = 0;
    var timer2 = setInterval(function () {
        if (count <= storage.words.length - 1) {
            createWords("p", "main", storage.words[count]);
            count++;
        } else {
            clearInterval(timer2);
        }
    }, 2000)
}





