let str = "beautiful day";

// 1. Print all other letters starting with the first one

// for loop
for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        console.log(str[i]);
    }
}

// while loop
let i = 0

 while(i < str.length) {
    if (i % 2 === 0) {
        console.log(str[i]);
    }
    i += 2;
 }


// 2. Print index of 'e'

console.log(str.indexOf('e'))

// 3. Print the characters that occur at even indexes

for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        console.log(str[i])
    }
}

// 4. Print the characters that occur at odd indexes - do it backward

for (let i = str.length - 1; i > 0; i--) {
    if (i % 2 === 1) {
        console.log(str[i])
    }
}

// 5. Print with each character in this format "Index of (character) is (index)"

for (let i = 0; i < str.length; i++) {
    console.log(`Index of ${str[i]} is ${i}`);
}

// 6. Return a new string without the vowels

let newSentence = "Today we are Saturday"

let sentenceWithoutVowels = ''
 
 for (let i = 0; i < newSentence.length; i++) {
     // transform all characters to lower case
     let char = newSentence[i].toLowerCase();
     if (char !== "a" &&  char !== "e" && char !== "i" && char !== "o" && char !== "u") {
         sentenceWithoutVowels += newSentence[i];
     }
 }
 console.log(sentenceWithoutVowels)