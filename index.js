let str = "beautiful day";

// 1. Print all other letters starting with the first one
for(let i = 0; i < str.length; i += 2){
    console.log(str[i]);
}


// 2. Print index of 'e'
console.log(str.indexOf('e'));

// 3. Print the characters that occur at even indexes
for(let index = 0; index < str.length; index++){
    if (index % 2 === 0){
        console.log(str[index]);
    }
}

// 4. Print the characters that occur at odd indexes - do it backward
// ----- ascending
// for(let j = 0; j < str.length; j++){
//     if (j % 2 === 1){
//         console.log(str[j]);
//     }
// }
// ----- descending
for(let j = str.length-1; j >= 0; j--){
    if (j % 2 === 1){
        console.log(str[j]);
    }
}

// 5. Print with each character in this format "Index of (character) is (index)"

// input: "hi"
// output:
    // "Index of h is 0"
    // "Index of i is 1"
for(let a = 0; a < str.length; a++){
    console.log("Index of ( " + str[a] + " ) is ( " + str.indexOf(str[a]) + " )");
}
// Re-do everything using another loop (`for` / `while`)
let b = 0;
while(b < str.length){
    console.log("Index of ( " + str[b] + " ) is ( " + str.indexOf(str[b]) + " )")
    b+=1;
}



let newSentence = "Today we are Saturday"

// 1. Return a new string without the vowels

 // input: "hello"
 // output: "hll"
