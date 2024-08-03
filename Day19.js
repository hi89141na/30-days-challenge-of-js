//! Day 19: Regular Expressions
//! Tasks/Activities:
//todo Activity 1: Basic Regular Expressions
//* Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches. 
let regex = /JavaScript/g;
let str = "Hello JavaScript, welcome to JavaScript series";
console.log(str.match(regex));
//* Task 2: Write a regular expression to match all digits in a string. Log the matches.
regex = /\d/g;
str = "I bought 3 notebooks, 5 pencils, 3 pens and 2 bags";
console.log(str.match(regex));
//todo Activity 2: Character Classes and Quantifiers
//* Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches. 
regex = /\b[A-Z][a-z]* \b/g;
str = "Hi this is Hina Nadeem student of Software Engineering";
console.log(str.match(regex));
//* Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
regex = /\d+/g;
str = "The numbers are 123, 4567, and 89. Also, check 0 and 99999.";
console.log(str.match(regex));

//todo Activity 3: Grouping and Capturing
//* Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
regex = /\((\d{3})\) (\d{3})-(\d{4})/g;
str = "(123) 456-7890) (123) 456-7890) (123) 456-7890)";
console.log(str.match(regex));

//* Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
regex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-z0-9]{2,})/g;
str = "user@example.com anotheruser@domain.org";
console.log([...str.matchAll(regex)]);

//todo Activity 4: Assertions and Boundaries
//* Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
regex = /^abc/;
str = "abcd abcrgd cbs abc";
console.log(str.match(regex));

//* Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
regex = /abc$/;
str = "abcd abcrgd cbs abc";
console.log(str.match(regex));

//todo Activity 5: Practical Applications
//* Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
regex = /(^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)){8,}/g;
str = "abcd_234%A";
regex.test(str) ? console.log(`${str} is a valid password`) : console.log(`${str} is an invalid password`);

//* Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
regex = /^(https?:\/\/)?(www\.)?[a-zA-z0-9]+\.[a-zA-z]{2,}(\/[a-zA-z0-9#]+\/?)*$/;
str = "www.google.com";
console.log(str.match(regex));
