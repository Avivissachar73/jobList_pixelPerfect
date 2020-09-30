export const utils = {
    getRandomInt,
    getRandomId,
    require
}


function getRandomInt(num1, num2) {
    var max = (num1 >= num2)? num1+1 : num2+1;
    var min = (num1 <= num2)? num1 : num2;
    return (Math.floor(Math.random()*(max - min)) + min);
}


// function makeId() {
//     var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
//     var id = '';
//     for (let i = 0; i < 10; i++) {
//         id += chars[getRandomInt(0, chars.length)];
//     }
//     return id;
// }

function getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = getRandomInt(1000, 9999).toString(16);
    var pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function require(path, isAsync = false) {
    var XmlReq = new XMLHttpRequest();
    XmlReq.overrideMimeType('application/json');
    XmlReq.open('GET', path, isAsync);
    const checkSuccess = () => (XmlReq.readyState === XMLHttpRequest.DONE && XmlReq.status === 200);
    const checkFailior = () => (XmlReq.readyState === XMLHttpRequest.DONE && XmlReq.status !== 200);
    const ErrorMsg = `could not load from path: ${path}`;
    if (isAsync) {
        return new Promise((resolve, reject) => {
            XmlReq.onreadystatechange = () => {
                if (checkSuccess()) resolve(JSON.parse(XmlReq.responseText));
                else if (checkFailior()) reject(ErrorMsg);
            }
            XmlReq.send(null);
        });
    } 
    XmlReq.send(null);
    if (checkSuccess()) return JSON.parse(XmlReq.responseText);
    else if (checkFailior()) throw new Error(ErrorMsg);
}