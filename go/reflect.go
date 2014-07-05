package main

import (
	"fmt"
	"reflect"
)

func main() {
	type t struct {
		N int
	}
	var n = t{42}
	fmt.Println(n.N)
	reflect.ValueOf(&n).Elem().FieldByName("N").SetInt(7)
	fmt.Println(n.N)
}
