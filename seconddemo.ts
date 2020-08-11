let strr : string;

strr = 'TypeScript is a front-end language that is an alternative to JavaScript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.';
let splitStr=strr.split(' ');
splitStr.forEach((s,i) => {
    splitStr[i]= s.charAt(0).toUpperCase()+s.substring(1);
    
});

let newstr=splitStr.join(' ');
console.log(newstr);

 
