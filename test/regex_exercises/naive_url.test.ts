import tap from "tap";
import { urlValidator } from "../../src/regex_exercises/naive_url";

const inputs: Record<string, "OK" | "NO"> = {
  "http://condense.tech": "OK",
  "ftp://condense.tech": "NO",
  "http:condense.tech": "NO",
  "http//condense.tech": "NO",
  "http:/condense.tech": "NO",
  "http://asdadajksdad.1231239-asdasd": "OK",
  "http://asdasd   asdasdad": "NO",
  "http://cond,com": "NO",
};

tap.test("naive_url", async (t) => {
  await t.test("exercise_input tests", async (t) => {
    for (let key of Object.keys(inputs)) {
      const res = inputs[key] === "OK";
      t.equal(urlValidator(key), res);
    }
    t.end();
  });

  await t.test("free_test", async (t) => {
    const url = "https://condense/Foo/slash.tech";
    const res = true;

    t.equal(res, urlValidator(url));
    t.end();
  });
});
