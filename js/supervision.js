


var date = new Date();
let cip = "";
let cname = "";

try {
    cip = returnCitySN["cip"];
} catch (error) {
    cip = "proxy";
}

try {
    cname = returnCitySN["cname"];
} catch (error) {
    cname = "proxy";
}


export function supervision(){

    let st = {
        location:{
            cip:cip,
            cname:cname,
        },
        ua:{
            browser:navigator.userAgent.split(" ")[1].split("(")[1],
            device:navigator.userAgent.split(" ")[10],
            screenWidth:document.body.clientWidth,
            screenHeight:document.body.clientHeight,
        },
        vTime:formatDate(date),
    };
    // console.log(st);
    // console.log(JSON.stringify(st));

    let httpRequest = new XMLHttpRequest();
    // let url = "http://localhost:12109";
    // let url = "https://121.43.98.103:12109";
    let url = "https://tspoty.com:12109";
    httpRequest.open("POST", url, true);
    httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // httpRequest.send(st);
    httpRequest.send(JSON.stringify(st));

    httpRequest.onreadystatechange = ()=>{
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            // var data = JSON.parse(httpRequest.responseText);
            // console.log(data);
            // console.log("ok");
        }
    }

}

//将时间戳转换为时间
function formatDate(now) {
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return {
        zTotal:year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second,
        year:year,
        month:month,
        date:date,
        hour:hour,
        minute:minute,
        second:second,
    }
}
