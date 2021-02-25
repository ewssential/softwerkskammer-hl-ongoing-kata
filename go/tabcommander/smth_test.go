// You can edit this code!
// Click here and start typing.
package main

import "fmt"
import "testing"

func main() {
	fmt.Print(Hello())
}

func Hello() string {
	return "Hello, world"
}

func TestHello(t *testing.T) {
	got := Hello()
	want := "Hello, world"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
