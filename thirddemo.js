var input;
input = 'TypeScript is a front-end language that is an alternative to JavaScript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.';
var specificword = "is";
var specificchar = "i";
var word_count = 0;
var char_count = 0;
var splitStrr = input.split(' ');
splitStrr.forEach(function (s, i) {
    if (s == specificword) {
        word_count++;
    }
});
var charArr = input.split('');
charArr.forEach(function (s, i) {
    if (s == specificchar) {
        char_count++;
    }
});
console.log("Word count is " + word_count);
console.log("Word count is " + char_count);
