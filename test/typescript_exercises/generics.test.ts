import { test } from "tap";
import { genericsManupulation } from "../../src/typescript_exercises/generics";

test("generics > ", async (t) => {
  await t.test("exercise_input test: numbers", async (t) => {
    const numberArray = [1, 2, 3, 4, 5];
    const doubledArray = genericsManupulation(numberArray, (num) => num * 2);
    t.same(doubledArray, [2, 4, 6, 8, 10]);
    t.end();
  });

  await t.test("exercise_input test: strings", async (t) => {
    const stringArray = ["apple", "banana", "cherry"];
    const uppercasedArray = genericsManupulation(stringArray, (str) =>
      str.toUpperCase()
    );
    t.same(uppercasedArray, ["APPLE", "BANANA", "CHERRY"]);
    t.end();
  });

  await t.test("custom type test", async (t) => {
    type myType = "odd" | "even";
    const inputArray: myType[] = ["odd", "odd", "even", "odd", "even"];
    const outputArray = genericsManupulation(inputArray, (data) =>
      data === "even" ? "odd" : "even"
    );
    t.same(outputArray, ["even", "even", "odd", "even", "odd"]);
    t.end();
  });
});
