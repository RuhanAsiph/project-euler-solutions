//sum of all the primes below 100

//prime numbers upto 100

prime_limit = 100
prime_numbers = []
sum_of_primes = 0

for (i=2; i < prime_limit; i++){
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
                // prime_numbers.push(i)
                sum_of_primes = sum_of_primes + number_to_check
                break
            } else {
                k++
            }   
        }  
    }
}
   
console.log(sum_of_primes) //done 
