var arr = [4,-5,-6,4,5,6,7 ]
var y= 5
// //1. print 1-255
function printAll() {
    for( var i = 1; i <= 255; i++){
        console.log(i)
    }
}
printAll();

//2. print odds 1-255
function printOdds () {
    for (var i = 1; i <= 255; i++){
        if( i%2==1)
        console.log(i)
    }
}
printOdds();

//3.print ints and sum 0-255
var sum = 0
function fibiSum () {
    for(var i = 0; i <= 255; i++ ){
        sum = sum + i;
        console.log(i, "+", sum);
    }

}
fibiSum()

// 4. iterate and print array
function iterateArr(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
iterateArr([4,5,6,7 ]);

// 5. find and print Max
var arr = [4,5,6,7 ]

function findMax (arr) {
    var max = arr[0]
    for ( var i = 0; i < arr.length;i++ ){
        if  (max < arr[i]){
            max = arr[i]
        }
    }
    console.log(max);
}
findMax(arr)

// 6. get and print average
function findAvg (arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum / arr.length)
}
findAvg(arr)

// 7. Array with odd.
var pushArr = []
function oddArray (pushArr) {
    for (var i = 1; i <= 255; i++){
        if ( i % 2 == 1 )
        pushArr.push(i)
    }
    console.log(pushArr) 
}
oddArray(pushArr);

// 8. square the value
var arr = [-4,-5,-6,4,5,6,7 ]
function squareVal(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i]=arr[i] * arr[i]
    }
    console.log (arr)
}
squareVal(arr);

// 9. Greater than y
function greaterY(arr, y){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y ){
            count++;
        }
    }
    console.log(count)
}
greaterY(arr,y)

// 10. zero out negative numbers
function zeroNum(arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < 0)[
            arr[i] = 0
        ]
    }
    console.log(arr);
}
zeroNum(arr)

//  11. Max, Min, Average
function minMaxAvg(arr) {
    var max = 0;
    var min = 0;
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if  (arr[i] > max) {
            max = arr[i];
        }    
            if  (arr[i]<min) {
            min = arr[i];
        }
    var average = sum / arr.length;
    }
    console.log(min, max, average);
}
minMaxAvg(arr);

// 12. Shift Array Values
function shiftArr(arr) {
    arr.shift();
    arr.push(0);
    console.log(arr)
}
shiftArr(arr)

// 13. swap string for array negative values
function swapArr(arr) {
    for(i=0;i<arr.length; i++) {
        if (arr[i] <0){
            arr[i] = "dojo"
        }
    }
    console.log(arr)
}
swapArr(arr)