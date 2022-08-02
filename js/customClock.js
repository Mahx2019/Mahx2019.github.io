// 时间显示模块


export function customClock() {
    let v_clock = document.getElementById("v-clock");
    function setTime(obj) {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var riqi = date.getDate();
        if (riqi < 10) {
            riqi = "0" + riqi;
        }
        var hour = date.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        var minute = date.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        var second = date.getSeconds();
        if (second < 10) {
            second = "0" + second;
        }
        var str = `${year}-${month}-${riqi} ${hour}-${minute}-${second}`
        obj.innerHTML = str;
    }
    setTime(v_clock);
    var timer = setInterval(function () {
        setTime(v_clock);
    }, 1000)
}

