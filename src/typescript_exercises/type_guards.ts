/*
Problem: You have a function extractCategoryName that can either return a string or null 
depending on the input type. Write the type guards isProduct and isString. Here’s a 
starting point for your code:

interface Category {
  name: string;
}

interface Product {
  category: Category;
}

function processData(input: Category | string | null): string | null {
  if (isCategory(input)) {
    return input.name;
  } else if (isString(input)) {
    return input;
  }
  return null;
}
*/

interface Category {
  name: string;
}

interface Product {
  category: Category;
}

export const isString = (data: unknown): data is string =>
  data?.constructor === String;

export const isCategory = (data: unknown): data is Category =>
  typeof (data as Category)?.name === "string";

export const isProduct = (data: unknown): data is Product =>
  typeof (data as Product)?.category === "object" &&
  isCategory((data as Product).category);

export function processData(
  input: Product | Category | string | null
): string | null {
  if (isCategory(input)) {
    return input.name;
  } else if (isString(input)) {
    return input;
  } else if (isProduct(input)) {
    return input.category.name;
  }
  return null;
}
