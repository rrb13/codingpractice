// / All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid7 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid8 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid9 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid10 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const RawDataCard = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, invalid6,invalid7,invalid8, mystery1, mystery2, mystery3, mystery4, mystery5];
let CardDatabase = []



const array_reverse = array => array.reverse()
const multipleIfOdd = array => {
    let result = []
    array.map((number,index) => {
        if(index %2 !=0){
            result.push(number*2)
        } else {
            result.push(number)
        }
    })
    return result
}

const substract_nine = array => {
    let result = []
    array.map( number => {
        if (number > 9){
            result.push(number - 9)
        } else {
            result.push(number)
        }
    })
    return result
}

const sumAllNumber = (previousValue, currentValue) => previousValue + currentValue;

// function buat validate 1 kartu
const validate = (card) => {
    let sliced_card = card.slice()
    // console.log('Hasil slice_card:')
    // console.log(slice_card)
    array_reverse(sliced_card)
    let multiple_card = multipleIfOdd(sliced_card)
    // console.log('Hasil multiple_card:')
    // console.log(multiple_card)
    let substract_card = substract_nine(multiple_card)
    // console.log('Hasil substract_card:')
    // console.log(substract_card)
    // console.log('Hasil validasi kartu: ' + card)
    return ((substract_card.reduce(sumAllNumber) % 10 ) === 0) // boolean

}


//cek masuk di listedcompany atau tidak


const CardMapper = (card) => {
let listedcompany = [
    {
        'company_code': 3,
        'company_name': 'Amex(American Express)'
    },
    {
        'company_code': 4,
        'company_name': 'Visa'
    },
    {
        'company_code': 5,
        'company_name': 'Mastercard'
    },
    {
        'company_code': 6,
        'company_name': 'Discover'
    },
    {
        'company_code':0,
        'company_name':'Unidentified card',
    }
    ]

    let find_obj = listedcompany.find(item => item.company_code === card[0])
    if(find_obj ){
        find_obj.card = card
        CardDatabase.push(find_obj)
    } else {
        let undefined = listedcompany.find(item => item.company_code === 0)
        find_obj.card = card
        CardDatabase.push(find_obj)
    }
}

// fungsi main untuk menjalankan kesuluruhan program
function main(){
    // step 1 setiap kartu di Rawdata (kumpulan nomor2 kartu) akan di sortir menurut company masing2
    RawDataCard.map(
        // * setelah di sortir, data tersebut di simpan pada variable CardDatabase
        (card) => CardMapper(card)
    )
    

    // step 2 validasi semua kartu ada di dalam cardDatabase
    var invalidcard =[] //ini variable untuk menyimpan array kartu yang invalid
    var validCard = [] //ini variable untuk menyimpan array kartu yang valid
    CardDatabase.map((data,index) =>{ 
        // verifikasi database kartu hasil rawdatacard
        
            // if statement ini buat sortir mana yang invalid atau valid
            if ( !validate(data.card)   ){
                // jika hasil validatenya false(penggunaan "!"), akan disimpan ke variable invalid card *pakai array.push()
               
               console.log(invalidcard.indexOf(data.company_name))
                // console.log(data.company_name,'invalid SEBELUM',invalidcard.indexOf(data.company_name) )

                invalidcard.push(data.company_name)
                // console.log(data.company_name,'invalid SESUDAH',invalidcard.indexOf(data.company_name) )

               }
               // if(item.invalidcard){
                //     invalidcard.pop()
                // }
            
            // }else{
            //     // jika hasil validatenya true, akan disimpan ke variable valid card *pakai array.push()
            //   validCard.push(data)  
            //   console.log(data.company_name,'valid',invalidcard.indexOf(data.company_name) )

        



    })
    // console.log('Data kartu yang invalid')
    // console.log(invalidcard)
    // console.log('____________________________')
    // console.log('Data kartu yang valid')
    // console.log(validCard)

}


// invoke /  memanggil program agar berjalan
main()

// Visa card to check                      
// Visa valid -1
// Mastercard card to check
// Mastercard valid -1
// Amex(American Express) card to check
// Amex(American Express) valid -1     
// Discover card to check
// Discover valid -1
// Visa card to check
// Visa valid -1
// Visa card to check
// Visa invalid 0
// Mastercard card to check
// Mastercard invalid 1
// Amex(American Express) card to check
// Amex(American Express) invalid 2
// Discover card to check
// Discover invalid 3
// Mastercard card to check
// Amex(American Express) card to check
// Mastercard card to check
// Mastercard valid 1
// Discover card to check
// Visa card to check
// Visa card to check
// Visa valid 0

