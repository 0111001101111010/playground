package main

import (
	"fmt"
)

func main() {
	i := 0
	for {
		fmt.Printf("%s\n", "welcome patrick")
		if i%5 == 0 {
			fmt.Printf("%s\n", "high five!!")
		}
		i++
	}
}
