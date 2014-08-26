package main

import "fmt"

func main() {
	ch := make(chan int)
	go fibs(ch)
	for i := 0; i < 20; i++ {
		fmt.Println(<-ch)
		//i comes out of
	}
}

func fibs(ch chan int) {
	i, j := 0, 1
	for {
		ch <- j
		i, j = j, i+j
		//j goes-inta
	}
}

//left pulling out and right pulling in
