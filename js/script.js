// symboll
// const id=Symbol(`id`)
// const obj = {
//     name: "Yodgor",
//     age: 25,
//     [id]: 12345
// };

// const normal = Object.keys(obj);
// console.log("Oddiy xususiyatlar:", normal);

// const symboll = Object.getOwnPropertySymbols(obj);
// console.log("Symbo xususiyatlar:", symboll);

// rekursiv funksiya
// 1-misol
// function sum(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n + sum(n - 1);
// }

// console.log(sum(5));
// 2-misol
// function sum(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * sum(n - 1);
// }

// console.log(sum(5));
// 3-MISOL
// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6));
// class
// 1-misol
// class Car {
//     constructor(name,year,color) {
//         this.name=name,
//        this.year=year,
//         this.color=color
//     }
// }
// const res= new Car(`BMW`,2023,`black`)
// console.log(res);

// 2-misol
// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     getArea() {
//         return this.length * this.width;
//     }
// }

// const rectangle = new Rectangle(5, 3);
// console.log("To'rtburchakning maydoni:", rectangle.getArea());

// String metodlariga oid.

//                                                  charAt
// 1-misol
// function CharAtIndex(str, index) {
//     if (index >= str.length) {
//         return '';
//     }
//     return str.charAt(index);
// }

// console.log(CharAtIndex("Salom", 2));

// 2-misol
// function length(str) {
//     return str.charAt(str.length - 1);
// }

// console.log(length("Salom"));

// 3-misol
// function res(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str.charAt(i));
//     }
// }

//charCodeAt
// 1-misol

// res("Salom");
// function charCodeAt(str, index) {
//     return str.charCodeAt(index);
// }

// console.log(charCodeAt("Salom", 2));
// 2-misol
// function charCodeAt(str) {
//   const unicode = [];
//   for (let i = 0; i < str.length; i++) {
//     unicode.push(str.charCodeAt(i));
//   }
//   return unicode;
// }

// console.log(charCodeAt("Salom"));
// // 3-misol
// function charCodeAt(str, index) {
//     for (let i = index + 1; i <= index + 3 && i < str.length; i++) {
//         console.log(str.charCodeAt(i));
//     }
// }

// charCodeAt("Salom", 1);
//       AT
//1-misol
// function at(str, index) {
//     return str.at(index);
// }
// console.log(at("Salom", 2));

// //2-misol
// function at(str) {
//     return str.at(-1);
// }
// console.log(at("Salom")); 

//3-misol
// function at(str, index) {
//     return str.at(index);
// }
// console.log(at("Salom", -3)); 


// 4. slice
// 1-misol
// function slice(str) {
//     return str.slice(2, 4); 
// }
// console.log(slice("Salom"));

// 2-misol
// function sice(str) {
//     return str.slice(0, 3);
// }
// console.log(slice("Salom")); 

// 3-misol
// function sliceLastFiveChars(str) {
//     return str.slice(-5); 
// }
// console.log(sliceLastFiveChars("Assalomu alaykum")); 


// 5. substring
// 1-misol
// function substring(str, start, end) {
//     return str.substring(start, end);
// }
// console.log(substring("Salom", 1, 4)); 
// 2-misol
// function substring(str) {
//     return str.substring(0, 4);
// }
// console.log(substring("Salom")); 

// 3-misol
// function substring(str) {
//     return str.substring(4);
// }
// console.log(substring("Salom"));


// 6. substr
// 1-misol
// function substr(str, start) {
//     return str.substr(start, 3);
// }
// console.log(substr("Salom", 1)); 

// 2-misol
// function substr(str) {
//     return str.substr(2, 5);
// }
// console.log(substr("Salom!")); 

// 3-misol
// function substr(str) {
//     return str.substr(-4);
// }
// console.log(substr("Assalomu alaykum"));


// 7. trim, trimStart, trimEnd
// 1-misol
// function trim(str) {
//     return str.trim();
// }
// console.log(trim("  Salom  ")); 

// 2-mislo
// function trimStart(str) {
//     return str.trimStart();
// }
// console.log(trimStart("  Salom  ")); 
// 3-misol.
// function trimEnd(str) {
//     return str.trimEnd();
// }
// console.log(trimEnd("  Salom  ")); 


// 8. padEnd, padStart
// 1-misol
// function padEnd(str) {
//     return str.padEnd(10, '!');
// }
// console.log(padEnd("Salom"));

// 2-misol
// function padStart(str) {
//     return str.padStart(15, '*');
// }
// console.log(padStart("Salom")); 

// 3-misol
// function padStart(phoneNumber) {
//     return phoneNumber.padStart(8, '0');
// }
// console.log(padStart("12345"));


// 9. repeat
// 1-misol
// function repeat(str) {
//     return str.repeat(3);
// }
// console.log(repeat("Salom")); 

// 2-misol
// function repeat(str) {
//     let result = '';
//     for (let char of str) {
//         result += char.repeat(2);
//     }
//     return result;
// }
// console.log(repeat("Salom")); 

// 3-misol
// function repeat(str) {
//     return str.repeat(5).split('').join(',');
// }
// console.log(repeat("S")); 


// 10. replace
// 1-misol
// function replace(str, oldChar, newChar) {
//     return str.replace(oldChar, newChar);
// }
// console.log(replace("Salom", "a", "o")); 

// 2-misol
// function replaceFirstWord(str, oldWord, newWord) {
//     return str.replace(oldWord, newWord);
// }
// console.log(replaceFirstWord("Salom, dunyo!", "dunyo", "olam"));

// 3-misol
// function replace(str) {
//     return str.replace(/\d/, '*');
// }
// console.log(replace("salom,12345"));


// 11. replaceAll
// 1-misol
// function replaceAll(str) {
//     return str.replaceAll('a', 'o');
// }
// console.log(replaceAll("Salom, alaykum!"));

// 2-misol
// function replaceAll(str, oldWord, newWord) {
//     return str.replaceAll(oldWord, newWord);
// }
// console.log(replaceAll("Salom Salom", "Salom", "Salomlar")); 

// 3-misol
// function replaceAll(str) {
//     return str.replaceAll(/\d/g, '*');
// }
// console.log(replaceAll("12345")); 


// 12. split
// 1-misol
// function split(str) {
//     return str.split(',');
// }
// console.log(split("Salom,Dunyo")); 

// 2-misol

// function split(str) {
//     return str.split(''); 
// }

// console.log(split("Salom")); 

// 3-misol
// function split(str) {
//     return str.split(' '); 
// }

// console.log(split("Salom Dunyoda"));


// 13. `indexOf`

// 1-misol
// function indexOf(str, char) {
//     return str.indexOf(char); 
// }


// console.log(indexOf("Salom", "o"));

// // 2-misol
// function indexOf(str, word) {
//     return str.indexOf(word);
// }


// console.log(indexOf("Salom Dunyoda", "Dunyo")); 

// 3-misol
// function indexOf(str, char) {
//     return str.indexOf(char); 
// }

// console.log(indexOf("Salom", "l")); 


// 14. `lastIndexOf`

// 1-misol
// function lastIndex(str, char) {
//     return str.lastIndexOf(char); 
// }

// console.log(lastIndex("Salom", "o")); 

// 2-misol
// function lastIndex(str) {
//     return str.lastIndexOf(' '); 
// }


// console.log(lastIndex("Salom Dunyoda")); 

// 3-misol
// function lastIndex(str) {
//     return str.lastIndexOf('0'); 
// }


// console.log(lastIndex("1234567890")); 


// 15. `includes`

// 1-misol
// function includes(str, char) {
//     return str.includes(char); 
// }


// console.log(includes("Salom", "o")); 

// 2-misol
// function includes(str) {
//     return /\d/.test(str); 
// }

// console.log(includes("Salom123")); 

// 3-misol
function containsLetters(str) {
    return typeof test(str)===`number`; 
}

// Misol uchun foydalanish
console.log(containsLetters("12345")); // false
console.log(containsLetters("Salom")); // true



