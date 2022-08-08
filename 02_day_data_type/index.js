//2.gün 1-8.maddeler;

let challenge =  '30 Days Of JavaScript'
let string ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let stringTwo = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
let bosluk =' 30 Days Of JavaScript '
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,8 ))
console.log(challenge.substring(3 ))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
console.log(string.split(', '))
console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(stringTwo.indexOf('çünkü'))
console.log(stringTwo.lastIndexOf('çünkü'))
console.log(stringTwo.search('çünkü'))
console.log(bosluk.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))
console.log(challenge.concat('30 Days of JavaScript') )
console.log(challenge.repeat(2) )

//EGZERSİZ 2

let yazi = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another. '
console.log(yazi)

//2
let rahibe = "Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."
console.log(rahibe)

//3
let num  ='10'
let numInt=parseInt(num)
console.log(numInt)

//4
let nums='9.8'
let numFloat= +(nums)
console.log(numFloat)
//5
let yazi1 = 'python'
let yazi2 = 'jargon'


console.log(yazi1.includes('on'))
console.log(yazi2.includes('on'))

//6
let jargon ='Umarım bu kurs jargonla dolu değildir.'
console.log(jargon.includes(jargon))
//7
let sayi = Math.floor(Math.random()* 101)
console.log(sayi)
//8
let sayi2 =  Math.floor(Math.random() * (100 - 50 + 1) ) + 50

console.log(sayi2)

//9
let dahil =Math.floor(Math.random()*256)
console.log(dahil)

//10
let seviye = 'Javascript'
console.log(seviye.split('')[5])
console.log(seviye.split('')[3])
console.log(seviye.split('')[6])


//11

//!2
let son ='Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(son.substring(36,49))
//SEVİYE 3
let love = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.'
console.log(love.search('aşk'))
//2
let son2 = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(son2.match('çünkü'))

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace('%',' '))


//4
let yillik ='Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'
let regEx = /\d+/g
console.log(yillik.match(regEx)[0])
const a = yillik.match(regEx)[0]
const b = yillik.match(regEx)[1]
const c = yillik.match(regEx)[2]
let numInt2 = parseInt(a)
let numInt3 = parseInt(b)
let numInt4 = parseInt(c)
console.log(numInt2+numInt3+numInt4)