//fib sequence - sum of even fib sequence  


//generate series
var fibArr = []
function generateFibArr() {
    i = 0 
    fibArr = [1 , 2]
    for ( i = 1; i < 20 ; i++ ) {
        fibArr[i + 1] = fibArr[i] + fibArr[i - 1]
    }
}


generateFibArr()

console.log(fibArr)

//find even numbers from the series 
var arrTwo = []
var n
var i = 1
while (i <= fibArr.length) {
    if ( fibArr[i] % 2 == 0 ) {
        arrTwo.push(fibArr[i])
    }
    i++
}

console.log(arrTwo)

//find the sum of even numbers from the series
var sum = 0

for (i = 0; i < arrTwo.length; i++) {
    sum += arrTwo[i]
}

console.log(sum)

