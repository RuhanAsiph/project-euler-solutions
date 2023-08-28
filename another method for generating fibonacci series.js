//fib sequence - sum of even fib sequence  


//generate series

function generateFibArr() {

    x = 0
    y = 1
     console.log(x)
     console.log(y)
    
     i = 0
    while ( i < 8) {
        z = x + y 
        console.log(z)
        x = y 
        y = z

        i++
    }
    
   
}



generateFibArr()



// //find even numbers from the series 
// var arrTwo = []
// var n
// var i = 1
// while (i <= fibArr.length) {
//     if ( fibArr[i] % 2 == 0 ) {
//         arrTwo.push(fibArr[i])
//     }
//     i++
// }

// console.log(arrTwo)

// //find the sum of even numbers from the series
// var sum = 0

// for (i = 0; i < arrTwo.length; i++) {
//     sum += arrTwo[i]
// }

// console.log(sum)

