export function uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + s4() + s4() + s4()
}

export function cardCount(deck) {
	if (Object.keys(deck.deckQuestions).length === 1) {
		return (
			`${Object.keys(deck.deckQuestions).length}` + ' Card'
		)
	} 
	if (Object.keys(deck.deckQuestions).length > 1) {
		return (
			`${Object.keys(deck.deckQuestions).length}` + ' Cards'
		)
	} 
	else {
		return '0 Cards'
	}
}


export function cardNumber(currentCard) {
	if (currentCard === 0) {
		return 1
	} else {
		return currentCard + 1
	}
}