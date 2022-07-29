import { storage1 } from './resource.js'


export function contractMe(rootID) {
    let mainContract = document.getElementById(rootID);
    mainContract.innerHTML=storage1.about[0];
}
