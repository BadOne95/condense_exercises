/*

Create a regular expression to validate URLs. The URLs should start with http:// or https:// and can contain 
letters, numbers, periods, hyphens, and slashes. Use the following snippet as a test case:

http://condense.tech # => OK
ftp://condense.tech # => NO
http:condense.tech # => NO
http//condense.tech # => NO
http:/condense.tech # => NO
http://asdadajksdad.1231239-asdasd # => OK
http://asdasd   asdasdad # => NO
http://cond,com # => NO

*/

export const urlValidator = (url: string) => {
  const reg = /^https?:\/\/[0-9a-zA-Z\.\-\/]*$/;
  return reg.test(url);
};
