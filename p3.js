//largest prime factor of a given number suppose 800

//find prime factors upto n 


// k = 2

// number_to_check = 23

// while ( k < number_to_check) {
//     if (number_to_check % k == 0) {
//         console.log("number is not prime")
//         k = number_to_check + 1
//     } 
//     else {
//         // k++ until k = 13
//         //if it reaches 13 we have a prime number
//         if ( k == (number_to_check - 1) && number_to_check % (number_to_check -1) !== 0) {
//             console.log("prime number")
//             break
//         } else {
//             k++
//         }   
//     }  
// }
  

//prime numbers upto 1000

prime_limit = 1000
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
   
console.log(prime_numbers)

// smallest prime factors of 800
prime_factor_of = 98
prime_factors = []

function largest_prime_factor() {
    i = 0 
    while (i < 100) {
        
        if (prime_factor_of % prime_numbers[i] == 0 ) {
            if (prime_factor_of !== 1) {
                prime_factor_of = prime_factor_of/prime_numbers[i]
                prime_factors.push(prime_numbers[i])
                
            } else if (prime_factor_of == 1) {
                i = 500
            }
        } else {
            i++
        }
    }


console.log(prime_factors)



//check greatest number in an array
greatest_number = 0
for (i = 0; i < prime_factors.length; i++) {
    for (k = 0; k < prime_factors.length; k++) {
        if (prime_factors[i] > prime_factors[k]) {
            greatest_number = prime_factors[i]
        } 
    }
}

console.log(greatest_number)


    // if (prime_factor_of % prime_numbers[0]  == 0) {
    //     prime_factors.push(prime_numbers[0])
    //     prime_factor_of = prime_factor_of/prime_numbers[0]
    //     // console.log(prime_factor_of)
    //     // console.log(prime_numbers[0])
    // } else if  (prime_factor_of % prime_numbers[1]  == 0) {
    //     prime_factors.push(prime_numbers[1])
    //     prime_factor_of = prime_factor_of/prime_numbers[1]
    //     // console.log(prime_factor_of)
    //     // console.log(prime_numbers[1])
    // } 
}


largest_prime_factor()











