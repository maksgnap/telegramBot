const express = require('express');
const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
dotenv.config();


const Token = process.env.TOKEN
const PORT = process.env.SERVER_PORT || 8000;

const bot = new TelegramBot(Token, {polling: true});



bot.onText(/\/echo (.+)/, (msg, match) => {
  
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
  
    const name = msg.from.username
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
    bot.sendMessage(`Hi. ${name}`)
  });
  

  bot.onText(/\/help/, (msg) => {

    const chatId = msg.chat.id;
    const name = msg.from.username;
    bot.sendMessage(chatId, `Hi ${name} if you need menu just click button "Menu" that on the left from  input` )

   
  });

const app = express();

app.listen(PORT, ()=>{
    console.log("Server work on port:", PORT)
})


 // const chatId = msg.chat.id;
    // const text = msg.text
    // bot.sendMessage(chatId, `${text}df`);