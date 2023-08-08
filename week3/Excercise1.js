//1
let firstName,lastName,country,age,isMarried,year;
firstName='bashir'
lastName='Aremu'
country='Nigeria'
age=32
isMarried=false
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(age))
console.log(typeof(isMarried))

//2
console.log(typeof '10' == 10)
//3
console.log(parseInt('9.8' == 10))
//4i
console.log(4<5)
console.log(5>4)
console.log(6>4)
//4ii
console.log(5<4)
console.log(6<4)
console.log(7<4)
//5
console.log(4>3)//true
console.log(4>=3)//true
console.log(4<3)//false
console.log(4<=3)//false
console.log(4==4)//true
console.log(4===4)//true
console.log(4!== 4)//false
console.log(4!='4')//false
console.log(4=='4')//true
console.log(4==='4')//false

let python='python'
let jargon='jargon'
console.log(python.length < jargon.length)

//5
console.log('ANSWER 6')
console.log(4>3&& 10<12)//TRUE
console.log(4>3&& 10>12)//false
console.log(4>3 || 10 <12)//true
console.log(4>3||10 >12)//true
console.log(!(4>3))//false
console.log(!(false))//true
console.log(!(4<3 && 10<12))//true
console.log(!(4>3 && 10>12))
//7
console.log('ANSWER7')
let yearToday=new Date()
console.log(yearToday.getFullYear())
let monthToday=new Date()
console.log(monthToday.getMonth()+1)

let dateToday=new Date()
console.log(dateToday)
console.log('date in numbers')
let dateTodayInNumbers=new Date()
console.log(Number(dateTodayInNumbers))
let presentHour=new Date()
console.log(presentHour.getHours())
let presentMinute=new Date()
console.log(presentMinute.getMinutes())

