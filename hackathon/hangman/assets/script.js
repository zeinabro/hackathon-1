
const displayAlphabet = async (word) => {
    alphabetList.textContent=""
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i=0;i<alphabet.length;i++){
        const letter = alphabet[i]
        const letterButton = document.createElement('BUTTON')
        letterButton.textContent = letter
        alphabetList.appendChild(letterButton)
        letterButton.addEventListener("click", () => {
            let correct = checkLetter(letter,word)
            if (correct==true){
                letterButton.disabled = true
                letterButton.className = "correct"
            } else {
                letterButton.disabled = true
                letterButton.className = "incorrect"
            }
        })
    }
}

const checkLetter = (letter,word) => {
    let correct=false
    word = word.toLowerCase()
    letter =  letter.toLowerCase()
    for (let i=0;i<word.length;i++){
        if (word[i]==letter){
            hiddenWord.childNodes[i].textContent=letter
            correct=true
        } 
    }
    if (correct==false){
        getHangmanImage(correct) 
    }
    return correct
}

const getHangmanImage = (correct) => {
    hangManImage.textContent=""
    console.log(chances)
    if (chances>0){
        chances-=1
        console.log(chances)
        let img = document.createElement('img')
        img.src=`./hangman-${10-chances}.png`
        hangManImage.appendChild(img)
    } else {
        alert('game over')
    }
}

const displayWord = (word) => {
    for (let i=0;i<word.length;i++){
        const letter = word[i]
        const blankWord = document.createElement('p')
        if (i!==word.length){
            blankWord.textContent += "_ "
        } else {
            blankWord.textContent += "_"
        }
        hiddenWord.appendChild(blankWord)
    }
}

const getRandomWord = async () => {
    hiddenWord.textContent=""
    try{
        const resp = await fetch("https://random-word-api.herokuapp.com/word")
        if (resp.ok) {
            const word = await resp.json()
            displayWord(word[0])
            displayAlphabet(word[0])
            console.log(word[0])
            return word[0]
        } else {
            throw "Error: http status code = " + resp.status
        }
    } catch (err){
        console.log(err)
        alert("Unable to generate random word")
    }
}

const randomWordButton = document.querySelector("#randomWord")

const hiddenWord = document.querySelector(".hiddenWord")

const alphabetSection = document.querySelector(".alphabet")
const alphabetList = document.querySelector(".alphabet ul")

const hangManImage =  document.querySelector(".hangman")

let chances = 10

randomWordButton.addEventListener("click", getRandomWord)

