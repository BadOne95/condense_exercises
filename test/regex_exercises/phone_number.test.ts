import tap from "tap";
import { phoneNumberFinder } from "../../src/regex_exercises/phone_number";

const inputs: Record<string, string> = {
  "My phone number is (039) 02-121212": "(039) 02-121212",
  "None of my 32 friends has a phone. One of them gave me the number 123-123123 but it isn't valid":
    "no_match",
  "Phone numbers cannot have letters. Numbers like (800) STAR-121212 are not valid":
    "no_match",
  "Every country has its own rules for phone numbers. Even a number like (1) 1-2 can be a valid phone number":
    "(1) 1-2",
};

tap.test("naive_url", async (t) => {
  await t.test("exercise_input tests", async (t) => {
    for (let key of Object.keys(inputs)) {
      const res = inputs[key] === "no_match" ? null : [inputs[key]];
      t.same(phoneNumberFinder(key), res);
    }
    t.end();
  });

  await t.test("free_test", async (t) => {
    const url =
      "My phone numbers are (039) 02-121212 and (800) STAR-121212 but on sunday you will only find me at (123) 456-7890";
    const res = ["(039) 02-121212", "(123) 456-7890"];

    t.same(phoneNumberFinder(url), res);
    t.end();
  });
});
