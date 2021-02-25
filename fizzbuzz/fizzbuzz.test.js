// Schreibe eine Funktion, die die Zahlen von 1 bis 100 zurückgibt. Manche Zahlen sollen dabei allerdings übersetzt werden [1]:

// Für Vielfache von 3 gibt „Fizz“ aus.
// Für Vielfache von 5 gib „Buzz“ aus.
// Für Vielfache von 3 und 5 gib „FizzBuzz“ aus.

let fizzbuzz = (number) => {
  if(number % 15 === 0){
    return "FizzBuzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  return number;
}
Given
When
Then

test('InputIs1Returns1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('InputIs2Returns2', () => {
  expect(fizzbuzz(2)).toBe(2);
});

test('InputIs3ReturnsFizz', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});

test('InputIs5ReturnsBuzz', () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});

test('InputIs6ReturnsFizz', () => {
  expect(fizzbuzz(6)).toBe("Fizz");
});

test('InputIs10ReturnsBuzz', () => {
  expect(fizzbuzz(10)).toBe("Buzz");
});

test('InputIs15ReturnsFizzBuzz', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});

test('InputIs30ReturnsFizzBuzz', () => {
  expect(fizzbuzz(30)).toBe("FizzBuzz");
});
