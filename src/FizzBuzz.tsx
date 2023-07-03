import { useState } from "react";
import { FizzBuzzLogicFn } from "./FizzBuzzFn";

type Mixed = number | string;

export function FizzBuzz(): JSX.Element {
  const [CounterFromCurrentRender, queueRerenderWithNewCounter] =
    useState<number>(1);
  const [NumberFromCurrentRender, queueRerenderWithNewNumber] =
    useState<Mixed>(1);
  const [StoredNumFromCurrentRender, queueRerenderWithNewStoredNumber] =
    useState<Mixed[]>([NumberFromCurrentRender]);

  const outputData = (placeNumber: number): Mixed =>
    FizzBuzzLogicFn(placeNumber);

  const handleNext = () => {
    const nextCounter = CounterFromCurrentRender + 1;
    const nextNumber = outputData(nextCounter);
    queueRerenderWithNewCounter(nextCounter);
    queueRerenderWithNewNumber(nextNumber);
    queueRerenderWithNewStoredNumber([
      ...StoredNumFromCurrentRender,
      nextNumber,
    ]);
  };

  return (
    <>
      <h1>Fizz Buzz Game ✌️</h1>
      <h3>{StoredNumFromCurrentRender.map((num) => num + ", ")}</h3>
      <button onClick={handleNext}>NEXT</button>
    </>
  );
}
