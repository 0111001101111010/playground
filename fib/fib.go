package main

// import (
// 	"fmt"
// )

//Initial Function
func main() {
	print(eu1(1000))
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
func eu1(size int) int {
	sum := 0
	for num := 0; num < size; num++ {
		if (num%5 == 0) || (num%3 == 0) {
			sum += num
		}
	}

	return sum
}
