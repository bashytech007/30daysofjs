 //1
 let challenge = "30 Days Of JavaScript";
 //2
 console.log(challenge)
 //3
 console.log(challenge.length)
 //4
 console.log(challenge.toUpperCase())
 //5
 console.log(challenge.toLowerCase())
 //6
 console.log(challenge.substr(3,4))
 //7
 console.log(challenge.slice(3))
 //8
 console.log(challenge.includes('Script'))//true
 //9
 console.log(challenge.split())
 //10
 console.log(challenge.split(' '))
 //11
 let bigTech = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
 console.log(bigTech.split(','))
//12
 let replaceString = "30 Days Of JavaScript";
 console.log(replaceString.replace('JavaScript','Python'))
//13
 let charString = "30 Days Of JavaScript";
 console.log(charString.charAt(15));
 //14
 const strj = "30 Days Of JavaScript";
 const charCodeOfJ = strj.charCodeAt(11); // 'J' is at index 11

 console.log(charCodeOfJ);
 //15
 let firstIndex = "30 Days Of JavaScript";
 console.log(firstIndex.indexOf('a'))
 //16
 let lastIndex = "30 Days Of JavaScript";
 console.log(lastIndex.lastIndexOf('a'))
 //17
 let becauseString ="You cannot end a sentence with because because because is a conjunction";
console.log(becauseString.indexOf('because'))
//18
console.log(becauseString.lastIndexOf('because'))
//19
console.log(becauseString.search('because'))
//20
let trimString=' 30 Days Of Javascript '
console.log(trimString)
//answer
console.log(trimString.trim())
//21
let str='30 Days Of JavaScript'
console.log(str.startsWith('30'))//true
//22
console.log(str.endsWith('JavaScript'))//true with
//23
let matchString = "30 Days Of JavaScript";
console.log(matchString.match('a'));
//24
let firstString='30 Days of'
let secondString=' Javascript'
let singleString=firstString.concat(secondString)
console.log(singleString)
//25
let repeatString = "30 Days Of JavaScript ";
let repeatStringTwice=repeatString.repeat(2)
console.log(repeatStringTwice)


