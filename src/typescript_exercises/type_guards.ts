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

export const isString = (
  data: Product | Category | string | null
): data is string => {
  return data?.constructor === String;
};

export const isCategory = (
  data: Product | Category | string | null
): data is Category => {
  return (data as Category)?.name !== undefined;
};

export const isProduct = (
  data: Product | Category | string | null
): data is Product => {
  return (data as Product)?.category?.name !== undefined;
};

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
