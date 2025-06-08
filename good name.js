//kunal pawar

console.log("today we will play a game in which we will rate you.");
console.log("");
function checkString(str) {

    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('wow!!good name.');
    }
    else if(str.startsWith('S')) {
        console.log('wow!!good name.');
    }
     else if(str.endsWith('G')) {
        console.log('wow!!good name.');
    }
    else {
        console.log('wow!!good name.');
    }
}
let string = prompt('Enter your name here: ');
checkString(string);