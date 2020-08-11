let str ='typescript is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.';
let splittedStr = str.split("");
let changedStr=splittedStr[0].substring(0,1).toUpperCase()+str.substr(1);
console.log(changedStr); // outputs the first character of first word as upper case.


