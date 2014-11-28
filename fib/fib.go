package main

// import (
// 	"fmt"
// )

func main() {
	print(eu1(5))
}

/*
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
func eu1(num int) bool {
	sum := 0

	if num%5 == 0 {
		return true
	} else {
		return false
	}
}
