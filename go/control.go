package main

import "fmt"

func main() {
	x := []int{
		48, 96, 86, 68,
		57, 82, 63, 70,
		37, 34, 83, 27,
		19, 97, 9, 17,
	}

	for _, key := range x {
		fmt.Printf("The number is %v\n", key)
	}
	highest := 0
	for _, key := range x {
		if key > highest {
			highest = key
		}
	}
	//long form
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)

	//shortform
	sum := 1
	for sum < 1000 {
		fmt.Println(sum)
		sum += sum
	}
	fmt.Println(sum)
	//short short
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
	fmt.Printf("The highest number is %v\n", highest)
}
