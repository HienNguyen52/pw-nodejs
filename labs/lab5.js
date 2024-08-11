const readline = require('readline-sync');
let inputString = readline.question('Please input your sentence: ')
replaceString = inputString.replaceAll(',', '');
const words = replaceString.split(' ');
let wordCount = [];
for (index = 0; index < words.length; index++) {
    let word = words[index];
    count = 1;
    findIndex = findIndexOfTheSameWord(wordCount, word)
    if (findIndex == -1) {
        let wordObject = {
            word: words[index],
            count: 1,
        };
        wordCount.push(wordObject);
    } else {
        wordCount[findIndex].count++
    };


};

console.log(wordCount);

function findIndexOfTheSameWord(wordCount, word) {
    for (i = 0; i < wordCount.length; i++) {
        if (wordCount[i].word == word) {
            return i
        }
    }
    return -1;
}


