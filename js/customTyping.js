import { storage, storage2 } from './resource.js'

// 各种打字机效果

export function typingcolor(str0 = storage.words[1]) {
    var txtbox = document.getElementById("typing-box");
    var index = 0;

    function typing() {
        if (index < str0.length) {
            txtbox.innerHTML = str0.slice(0, index++) + "|";
        } else {
            txtbox.innerHTML = str0;
            clearInterval(timer3);
        }
    }
    var timer3 = setInterval(typing(), 200);
}


export function typingcolor2() {
    const text = document.querySelector('#typing-box2');
    const txt = ["北极光之夜。", "夜越黑，星星越亮。", "答案在风中飘荡。"];
    let index = 0;
    let wordsIndex = 0;
    let flag = true;

    setInterval(function () {

        if (flag) {
            text.innerHTML = txt[wordsIndex].slice(0, ++index);
            // console.log(index);
        }
        else {
            text.innerHTML = txt[wordsIndex].slice(0, index--);
            // console.log(index);
        }

        if (index == txt[wordsIndex].length + 6) {
            flag = false;
        } else if (index < 0) {
            index = 0;
            flag = true;
            wordsIndex++;
            if (wordsIndex >= txt.length) {
                wordsIndex = 0;
            }
        }

    }, 200)
}


export function typingcolor3(rootID) {
    let index = 0;
    let wordsIndex = 0;
    let flag = true;
    setInterval(function () {
        let txt = storage.words[index];
        if (flag) {
            if (wordsIndex < txt.length) {
                createSingleWord(txt[wordsIndex++], rootID, wordsIndex);
            } else {
                wordsIndex++;
            }
        }
        else {
            if (wordsIndex > txt.length) {
                wordsIndex--;
            } else {
                removeSingleWord(rootID, wordsIndex--);
            }
        }

        if (wordsIndex >= txt.length + 6) {
            flag = false;
        } else if (wordsIndex == 0) {
            index++
            flag = true;
            if (index >= storage.words.length) {
                index = 0;
            }
        }
    }, 350)
}

let createSingleWord = function (word, id, index) {
    let span = document.createElement("span");
    span.innerHTML = word;
    if (storage.keywords.indexOf(word) != -1) {
        span.setAttribute("class", "color-blue");
    } else {
        span.setAttribute("class", "color-black");
    }
    span.setAttribute("id", "appendID" + index);
    document.getElementById(id).appendChild(span);
}

let removeSingleWord = function (id, index) {
    document.getElementById(id).removeChild(document.getElementById("appendID" + index));
}


export function typingcolor4(rootID) {
    let index = 0;
    let wordsIndex = 0;
    let flag = true;
    setInterval(function () {
        let txt = storage.words[index];
        if (flag) {
            createWord(txt.slice(0, wordsIndex++), rootID, wordsIndex);
        }
        else {
            createWord(txt.slice(0, wordsIndex--), rootID, wordsIndex);
        }

        if (wordsIndex >= txt.length + 3) {
            flag = false;
        } else if (wordsIndex == 0) {
            index++
            flag = true;
            if (index >= storage.words.length) {
                index = 0;
            }
        }
    }, 350)
}


let createWord = function (word, id) {
    let span = document.createElement("span");
    span.innerHTML = word;
    span.setAttribute("class", "color-black");
    let root = document.getElementById(id);
    if (root.childNodes.length != 0) {
        root.firstChild.remove()
    }
    root.appendChild(span);
}


export function typingcolor5(rootID) {
    let index = 0;
    let wordsIndex = 0;
    let flag = true;
    setInterval(function () {
        let txt = storage2.cite.words;
        if (flag) {
            if (wordsIndex < txt.length) {
                createSingleWord(txt[wordsIndex++], rootID, wordsIndex);
            } else {
                wordsIndex++;
            }
        }
        else {
            if (wordsIndex > txt.length) {
                wordsIndex--;
            } else {
                removeSingleWord(rootID, wordsIndex--);
            }
        }

        if (wordsIndex >= txt.length + 6) {
            flag = false;
        } else if (wordsIndex == 0) {
            index++
            flag = true;
            if (index >= storage.cite.length) {
                index = 0;
            }
        }
    }, 350)
}