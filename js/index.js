// 主函数
import { storage2 } from './resource.js'
import { testModule } from "./testModule.js";
import { customClock } from './customClock.js';
import { typingColor2 } from './customTyping.js';
import { contractMe } from './contract.js';
import { getNowHourImage } from './bgChange.js';
import { mainAlert } from './mainAlert.js';

// testModule();
customClock();
typingColor2("typing-box");
contractMe("contract-me");
mainAlert();
getNowHourImage();

