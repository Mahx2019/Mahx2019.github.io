

export function mainAlert() {
    let insd0 = document.createElement("div");
    insd0.setAttribute("class", "begin-alert");
    insd0.setAttribute("id", "begin-alert");
    document.getElementById("second-bg").appendChild(insd0);
    let insd1 = document.createElement("div");
    insd1.innerHTML = "显示错误的话</br>可以刷新一下哦";
    insd1.setAttribute("class", "begin-alert-text");
    document.getElementById("begin-alert").appendChild(insd1);

    anime({
        targets: '#begin-alert',
        translateY: 300,
        easing: 'spring(2, 80, 90, 0)',
        direction: 'alternate',
    });
}
