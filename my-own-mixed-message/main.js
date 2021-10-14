/*
My own version mixed message.
Challenge from Codeacademy.com

This project will generate random inspirational bible quotes depends user input from question => "How do you feel today?"

Emotion option : Upset, Weak, Lonely, etc.

resourse www.obphil.com

*/

// This function will create random number from 0 -> num - 1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

//This object collect emotion option, bible verse n quote
const collectiveBibleVerse = {
    emotionList: ['UPSET','WEAK','LONELY','SINNED','WORRIED','ANXIOUS','UNHAPPY','IN DANGER','DEPRESSED','LACK OF FAITH','NEED COURAGE','NEED DIRECTION','SEEKING PEACE','LEAVING ON A TRIP','STRUGGLING WITH LOSS','DISCOURAGED WITH WORK']
    bibleVerse:
}