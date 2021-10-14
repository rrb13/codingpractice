var string = 'baru belajar coding'

// a -> b, b-> c
// index +1
// string perlu cari code index pakai charcodeAt


const enkripsi = (string) =>{
    let abc = []
    const arrayOfWord = string.split(' ')
    arrayOfWord.map(word => {
    let encryptedWord =[]
    const arrayOfChar = word.split('')
    arrayOfChar.map(char => encryptedWord.push( char.charCodeAt(0) +1))
    console.log(encryptedWord)
    for (let i=0; i < encryptedWord.length; i++) {
        abc += String.fromCharCode(i)
    }
    console.log(abc)
    })
    
}

enkripsi(string)
// STEP ENKRIPSI
// 1 pecah string menjadi kata
// 2 pecah kata jadi huruf
// 3 jadikan huruf ke kode ascii
// 4 kode ascii + 1
// 5 kode ascii +1 ke utf-16 (dijadkian huruf lagi)
// 6 join huruf jadi kata
// 7 join kata jadi kalimat

// STEP DEKRIPSI
// 1 pecah string menjadi kata
// 2 pecah kata jadi huruf
// 3 jadikan huruf ke kode ascii
// 4 kode ascii - 1
// 5 kode ascii - 1 ke utf-16 (dijadkian huruf lagi)
// 6 join huruf jadi kata
// 7 join kata jadi kalimat






// [ 'baru', 'belajar', 'coding' ]
//     0         1         2
// [ 99, 98, 114, 117 ] [7   98, 101, 108, 97,106,  97, 114]  [ 99, 111, 100, 105, 110, 103 ]
//   uf

// [ 'urba', 'bleajra', 'ngcdi' ]
//     0         1         2


//   'urba bleajra ngcdi' // enkripsi
//   'baru belajar coding' // dekripsi 
