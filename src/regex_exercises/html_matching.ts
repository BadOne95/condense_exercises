/*
Create a regular expression to match and extract the content within HTML 
anchor tags (<a></a>). For example, given the input 
   <a href="https://example.com">Visit Example</a>
the regular expression should extract Visit Example as the output
*/

const regexp = /<a.*?>(?<content>.*)<\/a>/;

export const htmlMatcher = (text: string) => regexp.exec(text)?.groups.content;
