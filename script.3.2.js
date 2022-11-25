add = function(arr) {
    return arr.reduce((a, b) => a + b);
};
 
let arr = [1, 2, 3, 4, 5, 6, 7, 8] ;

let sum = add(arr);
console.log(sum);

console.log(sum / arr.length);
