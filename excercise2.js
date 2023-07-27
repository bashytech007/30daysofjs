//1
let quotedString='The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(quotedString)
//2
let quotedString2 =
  "Love is not patronizing and charity \isn't\ about pity, it is about love. Charity and love are the same -- with charity you give love, so \don't\ just give money but reach out your hand instead.";
  console.log(quotedString2)
  //3
  let num='10'
  let numComparison=typeof(num) === 10

  console.log(numComparison)
  

  let numInt=parseInt(num)
//   console.log(numInt)
  console.log(numInt===10)//answer
  //4
  
  let floatingNumber=parseFloat('9.8')
  let floatingComparison= typeof(floatingNumber) === 10
  console.log(floatingComparison)

  let floatNum=floatingNumber + 0.2
  // console.log(floatNum)
  console.log(floatNum===10)//answer return true 

//5
  let Python='python'
  let pythonStr=Python.includes('on')

  console.log(pythonStr)//answer true
  let jargon ='jargon'
  let jargonStr=jargon.includes('on')
console.log(jargonStr) //answer true
//6
let jargonSentence = "I hope this course is not full of jargon";
let jargonSentenceStr=jargonSentence.includes('jargon')
console.log(jargonSentenceStr);//returns true
//7
const numBtwZeroAndHundred=Math.floor(Math.random() * 101)
console.log(numBtwZeroAndHundred)//returns number btw o and 100 inclusive
//8 
const numBtwFiftyAndHundred=Math.floor(Math.random()* 51)+ 50;
console.log(numBtwFiftyAndHundred)
//9
const numBtwZeroAnd255=Math.floor(Math.random() * 256)
console.log(numBtwZeroAnd255)
//10
let randomStr='Javascript'
let computeRandomStr=Math.floor(Math.random() * randomStr.length)
console.log(computeRandomStr)//not sure this is correct but the index shouldn't be more than 9
 //11
 console.log('\t1\t1\t1\t1\t1')
 console.log("\t2\t1\t2\t4\t8");
 console.log("\t3\t1\t3\t9\t27");
 console.log('\t4\t1\t4\t16\t64');
 console.log('\t5\t1\t5\t25\t125');

  //12
  let becauseStr =
    "You cannot end a sentence with because because because is a conjunction";
    console.log(becauseStr.substr(31,23))