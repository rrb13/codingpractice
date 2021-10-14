/*
My own version mixed message.
Challenge from Codeacademy.com

This project will generate random inspirational bible quotes

resourse https://www.pulse.ng/communities/religion/what-to-read-you-need-to-read-these-10-encouraging-bible-verses-on-a-daily-basis/08nt89b

*/

// This function will create random number from 0 -> num - 1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

//This object collect emotion option, bible verse n quote
const collectiveBibleVerse = [
    'Philippians 4:13: I can do all things through Him who strengthens me.',
    'Lamentations 3:22–23: The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    'Ephesians 2:10: For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.',
    'Isaiah 33:2: O Lord, be gracious to us; we wait for you. Be our arm every morning, our salvation in the time of trouble.',
    'Galatians 2:20: I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me. ',
    'Galatians 6:9: And let us not grow weary of doing good, for in due season we will reap, if we do not give up.'
]

// for (const bibleVerse in collectiveBibleVerse) {
//   console.log(`${bibleVerse}: ${collectiveBibleVerse[bibleVerse]}`);
// }
let optionIdx = generateRandomNumber(collectiveBibleVerse.length)
function generateBibleVerse(){
    console.log(collectiveBibleVerse[optionIdx])
}

// console.log(optionIdx)
generateBibleVerse()