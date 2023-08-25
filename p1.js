// Find the sum of all the multiples of 3 or 5 below 1000

var arrOne = []
n = 12
i = 1 
//multiples of three and 5
while (i <= n) {
    if (i % 3 == 0 || i % 5 == 0 ) {
        arrOne.push(i)
        console.log(i)
    }
    i++
} 


var sum = 0;
for (i = 0; i < arrOne.length; i++) {
    sum += arrOne[i]
    
}

console.log(sum)
