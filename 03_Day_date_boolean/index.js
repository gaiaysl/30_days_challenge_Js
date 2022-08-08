const kedi ='kedi'
console.log(typeof('kedi'))
const yesil = 'Yeşil'
console.log(typeof ('Yesil'))
const tr = 'Türkiye'
const sh = 'Ankara'
const ag = 3
console.log(typeof (3))
const mr = true
console.log(typeof(true))
const now = new Date().getFullYear()
console.log(now)
const start = true
const under =''
const bombos=
//1.seviye

    console.log(10 == '10')
console.log(parseInt('9.8')==10)
console.log(mr)
console.log(start)
console.log(under)
console.log(bombos)
//5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

const uzun = 'python'
console.log(uzun.length)
const uzun1='jargon'
console.log(uzun1.length)
console.log(uzun.includes('on'))
console.log(uzun1.includes('on'))

//6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

//7
///1
const year = new Date().getFullYear()
console.log(year)
//2
const q = new Date().getMonth()
console.log(q)
//3
const bugununTarihi = new Date()
console.log(bugununTarihi)

//4
const t = new Date().getDay()
console.log(t)
//5
const s = new Date().getHours()
console.log(s)
//6
const minu= new Date().getMinutes()
console.log(minu)
//7
const get= new Date().getTime()
console.log(get)

//SEVİYE2
//1.soru
const enter = 20
const height = 10
console.log(0.5*enter*height)

//2.soru
const kenar1=5
const kenar2=4
const kenar3=3
console.log(kenar1+kenar2+kenar3)

//3.soru
/*let u = prompt('uzunluk giriniz','deger' )
let gen = prompt('genişlik giriniz','deger')
console.log(u)
console.log(gen)
console.log( "Dikdörtgen alanı",u*gen)
console.log("Dikdörtgen çevresi",2*(u+gen))

//4.soru
const yari = prompt('yarı çap giriniz','r')
console.log("Dairenin Alanı",3.14*yari**2)
*/
//5.soru
//y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
const y = '2x -2'

//6.soru
//Eğim m = (y2-y1)/(x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
const egim =4
const egimTwo = 8
console.log(egimTwo / egim, )
//7.soru
//yukarıdaki iki sorunun eğimini karşılaştırın.
//8.soru
//y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
//9.soru

/*const hours = prompt('Kaç Saat Çalışıyorunuz ? ','1')
const rate = prompt('saat başına ne kadar kazanıyorsunuz','1')
console.log("Aylık maaşınız :" ,(30*hours*rate))
*/
//10.soru
/*const adiniz = prompt('adınız giriniz','ad')

console.log(adiniz.length)
const x = adiniz.length

x > 7
    ? console.log(`${x} isminiz uzun`)
    : console.log(`${x} isminiz kısa`)

//11.soru
let first = 'Asabeneh'
let last = 'Yetayeh'
console.log(first.length)
console.log(last.length)
const i=first.length
const y=last.length
i > y
    ? console.log(`${i} isminiz uzun`)
    : console.log(`${y} soyadınz uzun`)


console.log(`Your first name, ${first} is longer than your family name, ${last}`)
//12.soru
let myAge = 250
let yourAge = 25

console.log(`I am ${myAge-yourAge} years older than you.`)
//13.soru
const birt = prompt('Doğum yılınız','1999')

const full = new Date().getFullYear()
    full-birt>18
    ? console.log(`${full-birt} yaşındasın ehliyet alabilirsin `)
    : console.log(`${full-birt} yaşındasın ehliyet alamazsın`)
//14.soru
const om = prompt('kaç yıl yaşadın','yıl')
const j = om*31556926

console.log(`yaşadığınız yıl,${om}. toplamda ${j} saniye yaşadınız.`)
*/
//15.soru
const ss = new Date()
const ff = ss.getFullYear()
const month = ss.getMonth() + 1
const date = ss.getDate()
const hours = ss.getHours()
const minutes = ss.getMinutes()

console.log(`${ff}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${ff} ${hours}:${minutes}`)
console.log(`${date}/${month}/${ff} ${hours}:${minutes}`)
//SEVİYE3
console.log(`${ff}-0${month}-0${date} ${hours}:${minutes}`)