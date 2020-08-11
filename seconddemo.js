var strr;
strr = 'TypeScript is a front-end language that is an alternative to JavaScript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.';
var splitStr = strr.split(' ');
splitStr.forEach(function (s, i) {
    splitStr[i] = s.charAt(0).toUpperCase() + s.substring(1);
});
var newstr = splitStr.join(' ');
console.log(newstr);
