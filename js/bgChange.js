


export function getNowHourImage() {
    let bg = document.getElementsByClassName('shade-bg')[0];
    let now = new Date();
    let hour = now.getHours();
    if( hour >= 8 && hour <= 19){
        bg.style.backgroundImage = "url('../res/mountain.png')";
    }else{
        bg.style.backgroundImage = "url('../res/rose3.png')";
    }
    return ;
}

