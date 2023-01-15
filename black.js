let playerName = prompt("What is your name?")

let playerChips = 145
let player = {
    name: playerName,
    chips: playerChips
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEr = document.getElementById("message-er")
let sumEr = document.getElementById("sum-er")
let cardEr = document.querySelector('#card-er')
let priceEr =  document.getElementById('price-er')

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }   else if (randomNumber === 1) {
        return 11
    }   else {
        return randomNumber
    }
    
}
function startGame() {
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard ]
    sum = firstCard + secondCard
    hasBlackJack = false
    renderGame()
}
function renderGame() {
    sumEr.textContent = "Sum: " + sum
    cardEr.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i ++) {
        cardEr.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new card!"
        
    }   else if (sum === 21) {
        message = " You've got blackjack"
        player.chips = player.chips + 10
        hasBlackJack = true 
        
    }   else  {
        message = "You're out"
        player.chips = player.chips - 10
        isAlive = false
        
    }
    
    messageEr.textContent = message
}
priceEr.textContent = `${player.name}: $${player.chips}`

function newCard()  {
    if (isAlive === true && hasBlackJack === false) {
     let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}


