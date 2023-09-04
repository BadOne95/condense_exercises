import { test } from "tap";
import { htmlMatcher } from "../../src/regex_exercises/html_matching";

const inputs: Record<string, string> = {
  '<a href="https://example.com">Visit Example</a>': "Visit Example",
};

test("html_matching > ", async (t) => {
  await t.test("exercise_input tests", async (t) => {
    for (let key of Object.keys(inputs)) {
      t.equal(htmlMatcher(key), inputs[key]);
    }
    t.end();
  });

  await t.test("non-match test", async (t) => {
    const input = '<a href="https://example.com"Visit Example</a>';
    const expectedResult = undefined;
    t.equal(htmlMatcher(input), expectedResult);
    t.end();
  });

  await t.test("other tags #1", async (t) => {
    const input = '<a <p> href="https://example.com">Visit Example</a>';
    const expectedResult = undefined;
    t.equal(htmlMatcher(input), expectedResult);
    t.end();
  });

  await t.test("other tags #2", async (t) => {
    const input = '<a href="https://example.com"><p>Visit Example</p></a>';
    const expectedResult = "<p>Visit Example</p>";
    t.equal(htmlMatcher(input), expectedResult);
    t.end();
  });
});
