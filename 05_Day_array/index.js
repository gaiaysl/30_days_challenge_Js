//1 boş bir dizi yaratın;
const bb = []
console.log(bb)
//Eleman sayısı 5'ten fazla olan bir dizi yaratın
const eleman =[1,2,3,4,5]
console.log(eleman.length)
console.log(eleman[0])
console.log(eleman[2])
let  lastIndex = eleman.length - 1;
console.log(eleman[lastIndex])

//mixedDataTypes adında bir dizi yaratın,
// dizinin içine farklı veri tiplerinde elemanlar koyun ve
// bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır.

const mixedDataTypes = [
    'elma',
    'armut',
    'çilek',
    'ananas',
    'karpuz',
    'kiraz'
]
console.log(mixedDataTypes.length)

//ItCompanies adlı bir dizi değişkeni oluşturun ve Facebook, Google, Microsoft, Apple,
// IBM, Oracle ve Amazon'a başlangıç değerleri atayın.

const ItCompanies =[
    {ff:12,
        Google:11,
        Microsoft:33,
        apple:44,
        IBM:55,
        Oracle:66,
        amazon:77}
]

console.log(ItCompanies[0].ff)
console.log(ItCompanies[0].apple)
console.log(ItCompanies[0].amazon)

const  ItCompaniesTwo = [
    'Facebook',
    'google',
    'microsoft',
    'apple',
    'Ibm',
    'amazon',
    'oracle'
]

//Her bir şirketin adını tek tek büyük harfleri ile değişterin ( ör: facebook -> FACEBOOK) ve her birini yazdırın.

//Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(ItCompaniesTwo.toString())
//itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin. Varsa şirketi geri döndürün, aksi takdirde not found geri döndürün.
console.log(ItCompaniesTwo.includes('mac'))
console.log(ItCompaniesTwo.sort())
console.log(ItCompaniesTwo.reverse())
//Diziden ilk 3 şirketi dilimleyin ( Slice edin ).
console.log(ItCompaniesTwo.slice(3))

//Diziden son 3 şirketi dilimleyin ( Slice edin ).
console.log(ItCompaniesTwo.slice('Facebook',4))
//Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin ).
//console.log(ItCompaniesTwo.slice())
//İlk IT şirketini diziden kaldırın.
console.log(ItCompaniesTwo.slice(1))
//Ortadaki IT şirketini ya da şirketlerini diziden kaldırın.
//console.log(ItCompaniesTwo.slice(2,4))
//Sondaki IT şirketini diziden kaldırın.
console.log(ItCompaniesTwo.slice(1,6))
//Bütün IT şirketlerini kaldırın.
console.log(ItCompaniesTwo.splice())
//SEVİYE2
//Önce bütün noktalama işaretlerini kaldırın ve ve string ifadeyi dizi olarak değiştirin
// ve dizideki kelime sayısını sayın.

let  text =

    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//kelime
//["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(text.split(" "))
console.log(text.split(' ').length)
//Aşşağıdaki alışveriş sepetindeki elemanları ekleyin, silin , düzenleyin.


const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log()
