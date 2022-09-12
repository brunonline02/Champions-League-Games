const gameDay1 = ["Plzen x Inter", 
"Sporting x Tottenham"]

const gameDay1_afternoon = ["Liverpool x Ajax", 
"Bayern München x Barcelona", 
"Porto x Club Brugge", 
"Olympique x Eintracht", 
"Bayern Leverkusen x Atlético Madrid"]

const gameDay2 = ["Milan x Dinamo Zagreb", 
"Shaktar Donetsk x Celtic"]

const gameDay2_afternoon = ["Rangers x Napoli", 
"Chelsea x Salzburg", 
"Real Madrid x RB Leipzig", 
"Man City x Borussia Dortmund", 
"København x Sevilla", 
"Juventus x Benfica", 
"Maccabi Haifa x PSG"]

const day = new Date()

const gamesOfTheDay = () => {
    if (day.getUTCDate() === 13 && day.getUTCHours() <= 18 && day.getUTCMinutes() <= 15 || day.getUTCHours() < 18 && day.getUTCMinutes() >= 15) {
        console.log(gameDay1, gameDay1_afternoon)
    } else if (day.getUTCDate() === 13 && day.getUTCHours() >= 21 || day.getUTCHours() === 20 && day.getUTCMinutes() >= 30) {
        console.log("No games left today") 
    } else if (day.getUTCDate() === 13 && day.getUTCHours() >= 18 && day.getUTCMinutes() > 15) {
        console.log(gameDay1_afternoon)
    } else if (day.getUTCDate() === 14 && day.getUTCHours() <= 18 && day.getUTCMinutes() <= 15 || day.getUTCHours() < 18 && day.getUTCMinutes() >= 15) {
        console.log(gameDay2, gameDay2_afternoon)
    } else if (day.getUTCDate() === 14 && day.getUTCHours() >= 21 || day.getUTCHours() === 20 && day.getUTCMinutes() >= 30) {
        console.log("No games left today") 
    } else if (day.getUTCDate() === 14 && day.getUTCHours() >= 18 && day.getUTCMinutes() > 15) {
        console.log(gameDay2_afternoon)
    }  
    else {
        console.log("No games today")
    }
}
gamesOfTheDay()