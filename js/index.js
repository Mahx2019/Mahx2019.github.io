// 打开网页时右下角弹出提示框
function showTips() {
    var tips = document.getElementById("tips");
    tips.style.display = "block";
    setTimeout(function () {
        tips.style.display = "none";
    }, 3000);
}

// 打开网页时
window.onload = function () {
    // showTips();
}