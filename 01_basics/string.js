const name ="   suryansh Kumar  "
const repoCount= 50
// string interpolation
console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// new way to create a string
const gameName = new String("cricket-hello");
console.log(gameName[0]);

console.log(gameName.length);

// trim remove spaces from start and end of the string except between the string 
console.log(name.trim())

// charAt() method returns the character at a specified index (position) in a string.
console.log(gameName.charAt(5));

// indexOf return ithe index value 
console.log(gameName.indexOf("e"));

// substring method give subpart of the main string form starting to ending index(exclusive)
const newString = gameName.substring(0, 8);
console.log(newString);

// slice method same as substring but it can take negative index also
const anotherString= gameName.slice(-12,5)
console.log(anotherString);

// replace method replace which user want to replace with new string
const url= "https://suryansh.com/suryansh%20kumar"
console.log(url);
console.log(url.replace("%20","-"))

// includes method check if the string contains the given string or not and return true or false
console.log(url.includes("suryansh"))
console.log(url.includes("suryn"))

// split method divide the string into an array of substrings based on a specified separator(like a comma, space, or any other character) and returns the new array.
const str1 = "hello-world-suryansh-kumar";
console.log(str1.split("-"));

