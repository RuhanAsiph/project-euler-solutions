//10001st prime number

//10001st prime number

prime_limit = 100
prime_numbers = [2]

for (i=2; i <= prime_limit; i++){
    number_to_check = i
    k = 2
    while ( k < number_to_check) {
        if (number_to_check % k == 0) {
           // console.log("number is not prime")
            k = number_to_check + 1
        } 
        else {
            // k++ until k = 13
            //if it reaches 13 we have a prime number
            if ( k == (number_to_check - 1) && number_to_check % (number_to_check -1) !== 0) {
                //console.log("prime number")
                prime_numbers.push(i)
                break
            } else {
                k++
            }   
        }  
    }
}
   
console.log(prime_numbers[21]) //done 
