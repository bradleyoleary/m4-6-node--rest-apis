const { words } = require('../data/words');

// write your handlers here...
const handleViewWord = (req, res) => {
    let foundWord = false
    words.filter((word) => {
        if (word.id == req.params.id) {
            res.status(200).json({ status: 200, word: word });
            foundWord = true
        }
    })
    if (!foundWord) {
        res.status(400).json({ status: 400, error: 'Word does not exist.' })
    }
}
//use math random 
const handleRandomWord = (req, res) => {
    const randomNum = Math.floor(Math.random() * words.length);
    //console.log(randomNum)
    const word = words[randomNum]
    res.status(200).json({ status: 200, word: [word.id, word.letterCount] })
}

const handleGuessedLetter= (req, res) => {
    const id = req.params.id;
    const letter = req.params.letter;
    const guess = words.filter((word) => id === word.id);
    const word = guess[0].word;
    //console.log(word)
    const wordArray = word.split("");
    let results = [];
    wordArray.forEach((userGuess) => {
      if (letter.includes(userGuess)) {
        results.push(true);
      } else {
        results.push(false);
      }
    });
    res.status(200).json({
      status: 200,
      message: results,
    });
  };

module.exports = { handleViewWord, handleRandomWord, handleGuessedLetter }