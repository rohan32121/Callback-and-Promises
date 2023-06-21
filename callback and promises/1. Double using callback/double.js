// 1. Double using callback.

// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.


function doublearray(arr, callback){
    const doublearr = arr.map((num) =>{
        return callback(num);
    });
    return doublearr;
}

const originaarray = [1, 2, 3, 4, 5];
function callback(num){
    return num*2;
}
const doublearray = doublearray(originaarray, callback);
console.log(doublearray);