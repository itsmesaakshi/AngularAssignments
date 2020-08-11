let input : string;
input = 'TypeScript is a front-end language that is an alternative to JavaScript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.';
let specificword="is";
let specificchar="i";
let word_count=0;
let char_count=0;

let splitStrr=input.split(' ');

splitStrr.forEach((s,i)=>{
if(s==specificword){
    word_count++;
}
});

let charArr = input.split('');
charArr.forEach((s,i)=>{
    if(s==specificchar){
        char_count++;
    }
    });

console.log(`Word count is ${word_count}`);
console.log(`Word count is ${char_count}`);

