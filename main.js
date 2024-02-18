require("dotenv").config()
const Cuybot = require("./app/Cuybot")

const token = process.env.TELEGRAM_TOKEN
const options = {
    polling: true
}

console.log("starting cuybot...")
const cuybot = new Cuybot(token, options)

const main = () => {
    console.log("checking feature...")
    cuybot.getHelp()
    cuybot.getSticker()
    cuybot.getGreeting()
    cuybot.getFollow()
    cuybot.getQuotes()
    cuybot.getNews()
    cuybot.getQuake()
    console.log('feature ready!')
}
main()
console.log("bot is ready now!")