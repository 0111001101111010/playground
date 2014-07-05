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
	fmt.Printf("The highest number is %v\n", highest)
}
