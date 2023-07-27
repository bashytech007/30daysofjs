//1
let love='Love is the best thing in this world. Some found their love and some are still looking for their love'
let loveStr=love.match(/love/g);
console.log(loveStr)//love we use the g flag for all occurence of the word love so its two
//2
let because='You cannot end a sentence with because because because is a conjunction'
let becauseStr=because.match(/because/g)
console.log(becauseStr)
//3
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo#bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";


const cleanText = sentence.replace(/[^\w\s]/g, "").replace(/\d+/g, "");


const lowerCaseText = cleanText.toLowerCase();


const words = lowerCaseText.split(/\s+/);


const wordCount = {};
words.forEach((word) => {
  if (word.length > 1) {
    // Skip words with length 1
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
});

// Finding the most frequent word
let mostFrequentWord = "";
let maxFrequency = 0;

for (const word in wordCount) {
  if (wordCount[word] > maxFrequency) {
    mostFrequentWord = word;
    maxFrequency = wordCount[word];
  }
}

console.log("Cleaned Text:", cleanText);
console.log("Most Frequent Word:", mostFrequentWord);


console.log("Cleaned Text:", cleanText);
console.log("Most Frequent Word:", mostFrequentWord);

//4
const incomeText =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const incomeNumbers = incomeText.match(/\d+/g); 
let totalAnnualIncome = 0;

if (incomeNumbers) {
  const salaryPerMonth = Number(incomeNumbers[0]);
  const annualBonus = Number(incomeNumbers[1]);
  const coursesPerMonth = Number(incomeNumbers[2]);

  totalAnnualIncome = salaryPerMonth * 12 + annualBonus + coursesPerMonth * 12;
}

console.log("Total Annual Income:", totalAnnualIncome);
