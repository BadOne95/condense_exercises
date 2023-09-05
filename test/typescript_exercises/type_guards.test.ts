import { test } from "tap";
import {
  isCategory,
  isProduct,
  isString,
  processData,
} from "../../src/typescript_exercises/type_guards";

test("type_guards > ", async (t) => {
  await t.test("isString true", async (t) => {
    const data = "value";
    t.equal(true, isString(data));
    t.end();
  });
  await t.test("isString true (empty string)", async (t) => {
    const data = "";
    t.equal(true, isString(data));
    t.end();
  });
  await t.test("isString false (category)", async (t) => {
    const data = { name: "value" };
    t.equal(false, isString(data));
    t.end();
  });
  await t.test("isString false (product)", async (t) => {
    const data = { category: { name: "value" } };
    t.equal(false, isString(data));
    t.end();
  });

  await t.test("isCategory true", async (t) => {
    const data = { name: "name" };
    t.equal(true, isCategory(data));
    t.end();
  });
  await t.test("isCategory true (empty string)", async (t) => {
    const data = { name: "" };
    t.equal(true, isCategory(data));
    t.end();
  });
  await t.test("isCategory false (string)", async (t) => {
    const data = "name";
    t.equal(false, isCategory(data));
    t.end();
  });
  await t.test("isCategory false (product)", async (t) => {
    const data = { category: { name: "value" } };
    t.equal(false, isCategory(data));
    t.end();
  });

  await t.test("isProduct true", async (t) => {
    const data = { category: { name: "value" } };
    t.equal(true, isProduct(data));
    t.end();
  });
  await t.test("isProduct true (empty string)", async (t) => {
    const data = { category: { name: "" } };
    t.equal(true, isProduct(data));
    t.end();
  });
  await t.test("isProduct false (string)", async (t) => {
    const data = "value";
    t.equal(false, isProduct(data));
    t.end();
  });
  await t.test("isProduct false (category)", async (t) => {
    const data = { name: "value" };
    t.equal(false, isProduct(data));
    t.end();
  });

  await t.test("processData with null", async (t) => {
    const data = null;
    t.equal(null, processData(data));
    t.end();
  });
  await t.test("processData with string", async (t) => {
    const data = "null";
    t.equal("null", processData(data));
    t.end();
  });
  await t.test("processData with category", async (t) => {
    const data = { name: "value" };
    t.equal("value", processData(data));
    t.end();
  });
  await t.test("processData with product", async (t) => {
    const data = { category: { name: "value2" } };
    t.equal("value2", processData(data));
    t.end();
  });
});
