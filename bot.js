const TelegramBot = require('node-telegram-bot-api');
const { BOT_TOKEN } = require('./data.js');
const examples = require('./examples.js');

const bot = new TelegramBot(BOT_TOKEN, {polling: true});

bot.onText(/^\/html$/, (mes) => {
    const chatId = mes.chat.id;

    const opts = {
        parse_mode: 'HTML'
    }

    bot.sendMessage(chatId, examples.textHTML, opts);
});

bot.onText(/^\/md2$/, (mes) => {
    const chatId = mes.chat.id;

    const opts = {
        parse_mode: 'MarkDownV2'
    }

    bot.sendMessage(chatId, examples.textMarkDownV2, opts);
});

