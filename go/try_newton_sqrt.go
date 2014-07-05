package main

import (
	"fmt"
	"math"
)

func Sqrt(x float64) float64 {
	z, delta := 1.0, 1.0

	for delta > 1e-4 {
		z0 := z
		z = z0 - ((z0*z0 - x) / 2 * z0)
		delta = math.Abs(z - z0)
	}
	return z
}

func main() {
	fmt.Println(Sqrt(2))
}
