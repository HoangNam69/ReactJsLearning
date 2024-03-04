var infoArray = [["name", "HoangNam"], ["age", 23], ["address", "Hồ Chí Minh"]];

var arrToObj = function (arr) {
    console.log(arr.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {}))
};

arrToObj(infoArray);

var arr01 = ["js"];
var arr02 = ["react"];

console.log([...arr01, ...arr02]);

// =========================================================== module===========================================
import logger from './logger.js';
// import biến với destructuring 
import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constant.js";
// import biến không dùng destructuring
import * as constant from './constant.js';

// sử dụng module đã tạo được export từ logger.js và được import vào với tên là logger
// test với export default function
logger("Đây là nội dung test import và export module", "warn")
// test với export biến dùng destructuring để lấy các biến được export bên module
logger("test với export biến dùng destructuring để lấy các biến được export bên module", TYPE_LOG)
logger("test với export biến dùng destructuring để lấy các biến được export bên module", TYPE_WARN)
logger("test với export biến dùng destructuring để lấy các biến được export bên module", TYPE_ERROR)

logger("test với export biến dùng destructuring để lấy các biến được export bên module", constant.TYPE_WARN)