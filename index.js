let rankBalance
let playerWins = victoryAndDefeat(40, 8)

function victoryAndDefeat(victory, defeat) {
	let playerWins = victory - defeat
    return playerWins
}

if(playerWins <= 10) {
	rankBalance = "Ferro"
}else if(playerWins <= 20) {
	rankBalance = "Bronze"
}else if(playerWins <= 50) {
	rankBalance = "Prata"
}else if(playerWins <= 80) {
	rankBalance = "Ouro"
}else if(playerWins <= 90) {
	rankBalance = "Diamante"
}else if(playerWins <= 100) {
	rankBalance = "Lendário"
}else if(playerWins >= 101) {
	rankBalance = "Imortal"
}

console.log("O herói tem saldo de " + playerWins + " vitórias e está no nível " + rankBalance)