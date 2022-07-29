import { storage2 } from "./resource.js";


// 各种打字机效果

// slice 切割字符串，不能打印特殊颜色
export function typingcolor(rootID) {
    let citeIndex = 0;
    let wordsIndex = 0;
    let flag = true;
    let citeNums = storage2.cites.length;
    setInterval(function () {
        let txt = storage2.cites[citeIndex].words[0];
        if (flag) {
            createWord(txt.slice(0, wordsIndex++), rootID, wordsIndex);
        } else {
            createWord(txt.slice(0, wordsIndex--), rootID, wordsIndex);
        }

        if (wordsIndex >= txt.length + 3) {
            flag = false;
        } else if (wordsIndex == 0) {
            index++;
            flag = true;
            if (index == citeNums) {
                index = 0;
            }
        }
    }, 350);
}

let createWord = function (word, id) {
    let span = document.createElement("span");
    span.innerHTML = word;
    span.setAttribute("class", "color-black");
    let root = document.getElementById(id);
    if (root.childNodes.length != 0) {
        root.firstChild.remove();
    }
    root.appendChild(span);
};


// 每一个字符单独创建span打印
export function typingcolor2(rootID) {
    let citeIndex = 0;
    let wordsIndex = 0;
    let flag = true;
    let citeNums = storage2.cites.length;
    setInterval(function () {
        let txt = storage2.cites[citeIndex].words[0];
        if (flag) {
            if (wordsIndex < txt.length) {
                createSingleWord(txt[wordsIndex++], rootID, wordsIndex, citeIndex);
            } else {
                wordsIndex++;
            }
        } else {
            if (wordsIndex > txt.length) {
                wordsIndex--;
            } else {
                removeSingleWord(rootID, wordsIndex--);
            }
        }

        if (wordsIndex >= txt.length + 6) {
            flag = false;
        } else if (wordsIndex == 0) {
            citeIndex++;
            flag = true;
            if (citeIndex == citeNums) {
                citeIndex = 0;
            }
        }
    }, 300);
}

let createSingleWord = function (word, id, wordsIndex, citeIndex) {
    let span = document.createElement("span");
    span.innerHTML = word;
    if (storage2.cites[citeIndex].keywords.includes(word)) {
        span.setAttribute("class", "color-blue");
    } else {
        span.setAttribute("class", "color-black");
    }
    span.setAttribute("id", "appendID" + wordsIndex);
    document.getElementById(id).appendChild(span);
};

let removeSingleWord = function (id, wordsIndex) {
    document
        .getElementById(id)
        .removeChild(document.getElementById("appendID" + wordsIndex));
};
