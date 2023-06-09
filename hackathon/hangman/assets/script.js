
const displayAlphabet = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i=0;i<alphabet.length;i++){
        const letter = alphabet[i]
        const letterButton = document.createElement('BUTTON')
        letterButton.textContent = letter
        alphabetList.appendChild(letterButton)
        letterButton.addEventListener("click",checkLetter)
    }
}

const checkLetter = () => {
    //check if letter clicked is in word
    //if yes, show letter
    //if no
}

const displayWord = (word) => {
    console.log(word)
    for (let i=0;i<word.length;i++){
        const letter = word[i]
        const blankWord = document.createElement('p')
        if (i!==word.length){
            blankWord.textContent += "_ "
        } else {
            blankWord.textContent += "_"
        }
        hiddenWordList.appendChild(blankWord)
        //console.log(blankWord.textContent[0])
    }
}

const getRandomWord = async () => {
    hiddenWordList.textContent=""
    try{
        const resp = await fetch("https://random-word-api.herokuapp.com/word")
        if (resp.ok) {
            const word = await resp.json()
            displayWord(word[0])
        } else {
            throw "Error: http status code = " + resp.status
        }
    } catch (err){
        console.log(err)
        alert("Unable to generate random word")
    }
}

const randomWordButton = document.querySelector("#randomWord")

const hiddenWordSection = document.querySelector(".hiddenWord")
const hiddenWordList = document.querySelector(".hiddenWord p")

const alphabetSection = document.querySelector(".alphabet")
const alphabetList = document.querySelector(".alphabet ul")

displayAlphabet()
randomWordButton.addEventListener("click", getRandomWord)
