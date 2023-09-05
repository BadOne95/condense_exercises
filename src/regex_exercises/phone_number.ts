/*
Given a string that contains various text, including phone numbers in the format (123) 456-7890, 
write a regular expression to extract all the phone numbers from the string. Use the following 
snippet as a test case:

My phone number is (039) 02-121212 # => (039) 02-121212
None of my 32 friends has a phone. One of them gave me the number 123-123123 but it isn't valid # => no match
Phone numbers cannot have letters. Numbers like (800) STAR-121212 are not valid # => no match
Every country has its own rules for phone numbers. Even a number like (1) 1-2 can be a valid phone number
*/

const regex = /\(\d+\)\s\d+\-\d+/g;

export const phoneNumberFinder = (text: string) => text.match(regex);
