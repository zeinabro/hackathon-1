const alphabetSection = document.querySelector(".alphabet")
const alphabetList = document.querySelector(".alphabet ul")

const displayAlphabet = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i=0;i<alphabet.length;i++){
        const letter = alphabet[i]
        const letterButton = document.createElement('BUTTON')
        letterButton.textContent = letter
        alphabetList.appendChild(letterButton)
    }
}

displayAlphabet()
