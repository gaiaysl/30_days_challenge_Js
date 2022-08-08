/*//Seviye1
//!
const kk = prompt('Enter your age : ')

 if(kk>= 18){
console.log(`Enter your age: ${kk} \nYou are old enough to drive.`)
 }else{
     console.log(`Enter your age: ${kk} \nYou are left with ${18-kk} years to drive.`)
 }
 //2

const yy = prompt('Enter your age:')
const myAge=23
if(yy>myAge){
    console.log(`Enter your age: ${yy} \nBenden${yy-myAge} büyük`)

}else{
    console.log(`Enter your age: ${yy} \n Benden ${myAge-yy} yas küçük`)
}

//3
let mm = 4
let nn = 3

if(mm>nn){
    console.log(`${mm},${nn}'den büyüktür `)
}else {
    console.log (`${nn}.${mm}'den küçüktür`)
}

mm>nn
    ?console.log(`${mm},${nn}'den büyüktür `)
    : console.log (`${nn}.${mm}'den küçüktür`)
//4
const cift =prompt('bir sayı girin')

if(cift%2){
    console.log(`${cift}tek sayıdır`)
}else{
    console.log(`${cift}çift sayıdır`)
}
*/

//SEVİYE2
//1
const puan = prompt('puanınızı giriniz:')

switch (true){
    case 80>=puan==100:
        console.log("AA")
        break;
    case 70>=puan<79:
        console.log("BB")
        break;
    case 60>=puan<69:
        console.log("CC")
        break;
    case 50>=puan<=59:
        console.log("DD")
    default:
        console.log("FF")
}

//2
const mevsim = 'Kış'

switch (mevsim) {
    case 'Sonbahar':
        console.log("mevsim Sonbahar")
        break;
    case 'Kış':
        console.log("mevsim Kış")
        break;
    case 'İlkbahar':
        console.log("mevsim İlkbahar")
        break;
    default:
        console.log("Yaz")

}
//3
const u = prompt('gün giriniz')
const kck = u.toLowerCase()
switch (kck) {
    case 'pazartesi':
        console.log(`${kck} Haftaiçi ve iş günüdür`)
        break;
    case 'salı':
        console.log(`${kck} Haftaiçi ve iş günüdür`)
        break;
    case 'çarşama':
        console.log(`${kck} Haftaiçi ve iş günüdür`)
        break;
    case 'perşembe':
        console.log(`${kck} Haftaiçi ve iş günüdür`)
        break;
    case 'cuma':
        console.log(`${kck} Haftaiçi ve iş günüdür`)
        break;
    case 'cumartesi':
        console.log(`${kck} Haftasonu  ve tatildir`)
        break;
    case 'pazar':
        console.log(`${kck} Haftasonu  ve tatildir`)
        break;
    default:
        console.log("yanlış veya eksik yazdınız.lütfen tekrar kontrol ediniz.")

}

//SEVİYE 3
const sys = 'ocak'
switch (sys) {
    case 'ocak':
        console.log(`${sys} 31 gün `)
        break;
    case 'şubat':
        console.log(`${sys} 28 gün`)
        break;
    case 'mart':
        console.log(`${sys} 31 gün`)
        break;
    case 'nisan':
        console.log(`${sys} 30 gün`)
        break;
    case 'mayıs':
        console.log(`${sys} 31 gün`)
        break;
    case 'haziran':
        console.log(`${sys} 30 gün`)
        break;
    case 'temmuz':
        console.log(`${sys} 31 gün`)
        break;
    case 'ağustos':
        console.log(`${sys} 31 gün`)
        break;
    case 'eylül':
        console.log(`${sys} 30 gün`)
        break;
    case 'ekim':
        console.log(`${sys} 31 gün`)
        break;
    case 'kasım':
        console.log(`${sys} 30 gün`)
        break;
    case 'aralık':
        console.log(`${sys}31 gün`)
        break;
    default:
        console.log("yanlış veya eksik yazdınız.lütfen tekrar kontrol ediniz.")

}

//Bir aydaki gün sayısını söyleyen bir program yazın, şimdi artık yılı düşünün.