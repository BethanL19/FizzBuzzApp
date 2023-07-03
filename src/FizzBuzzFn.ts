type mixed = number | string;

export function FizzBuzzLogicFn(num: number): mixed {
  if (num % 5 === 0 && num % 3 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}
