let arr = [1, 2, 3, 4, 5]

var max = arr[0]

for( var i =0 ; i < arr.length; i++) {
    if(arr[i] >= max){
        max = arr[i];
    }
}
console.log(max)

var min = arr[0]

for( var i =0 ; i < arr.length; i++) {
    if(arr[i] <= max){
        max = arr[i];
    }
}
console.log(min)