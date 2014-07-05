package main

import "fmt"

func main() {
	principal := 0.0
	interest := 0.0
	fmt.Println("Principal?")
	fmt.Scanf("%f", &principal)

	fmt.Println("Interest? (In percentage format)")
	fmt.Scanf("%f", &interest)
	output := principal * percentage(interest)

	fmt.Println(output)
}

func percentage(input float64) float64 {
	return 1.0 + input
}
