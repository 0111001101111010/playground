package main

import "fmt"

func main() {

	var x string
	x = "first "
	//declare and initalize
	y := 0
	fmt.Println(x)
	x = x + "second"
	fmt.Println(x)
	//will break, wont allow you
	fmt.Println(x + y)
}
