// 封装的函数传入参数
//element -----> 被操作元素
//json -----> 目标值数据
//fn -----> 回调函数
function animate(element, json, fn) {
    //每调用一次函数就清除一次定时器，这里是为了解决多次点击之后速度更变的问题。
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true; //假设全部动画操作已经到达目标值
        for (var attr in json) {
            // 遍历json数据取到各个属性的目标值
            if (attr == "zIndex") {
                // 如果是层级
                element.style[attr] = json[attr];
            } else if (attr == "backgroundColor") {
                // 如果是背景颜色
                element.style[attr] = json[attr];
                // 加上美美的颜色变化过渡就perfect啦
                element.style.transition = "background-color 2s";
            } else if (attr == "opacity") {
                // 如果是透明度
                //获取当前透明度  （getStyle函数）也自己封装
                //因为透明度的值都是小数，为了方便计算我们先乘以100
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var step = (target - current) / 10; //每一次的变化步数
                // 如果是正值那么步数向上取整，是负值那么步数向下取整，以便能达到目标值
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step; // 每次的步数叠加
                element.style[attr] = current / 100; // 到达目标值再重新除以100
            } else {
                // 其他带px的属性值
                // 获取当前div的位置或者大小
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            // 如果还有没有到达目标的动画操作，则把标志flag置为false
            if (current != target) {
                flag = false;
            }
        }
        // 直到所有动画操作都执行完毕才放行，清除定时器终止操作
        if (flag) {
            clearInterval(element.timeId);
            // 并且如果有传入回调函数就运行回调函数
            if (fn) {
                fn();
            }
        }
    }, 60); // 定时器每10毫秒运行一次，就实现了current值一直叠加直到达到目标
}

// getStyle函数，即获取元素对应的属性值
function getStyle(element, attr) {
    // 如果浏览器支持window.getComputedStyle,不支持则element.currentStyle[attr];
    return window.getComputedStyle
        ? window.getComputedStyle(element, null)[attr]
        : element.currentStyle[attr];
}

export { animate };