//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

//sum of the squares upto 100

sum_of_squares = 0
square_of_sums = 0

for (i = 0; i <= 100; i++) {
    n = i
	sum_of_squares = sum_of_squares + (n**2)	
}
console.log("sum of squares = ", sum_of_squares)
sum = 0

for (i = 0; i <= 100; i++){
    sum = sum + i
    square_of_sums = sum**2
}

console.log("square of sums = ", square_of_sums)

difference = square_of_sums - sum_of_squares
console.log(difference)
