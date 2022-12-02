const TelegramBot = require('node-telegram-bot-api');
const { BOT_TOKEN } = require('./data.js');
const keyboards = require('./keyboards.js');
const questions = require('./questions.js');

const bot = new TelegramBot(BOT_TOKEN, {polling: true});

let countWrong = 0;

bot.onText(/\/start/, async (message) => {
    countWrong = 0;
    const chatId = message.chat.id;

    const opts = {
        reply_markup: keyboards.question1
    }

    bot.sendMessage(chatId, questions.question1, opts);
});

bot.on('callback_query', async (callbackQuery) => {
    const data = callbackQuery.data;

    if (data === 'wrong') {
        const questionText = callbackQuery.message.text.split('\n').at(-1);
        const editedText = `${++countWrong} Нет, ответ неверный. Попробуй еще раз.\n\n${questionText}`;

        bot.editMessageText(editedText,{chat_id: callbackQuery.message.chat.id, message_id: callbackQuery.message.message_id, reply_markup: callbackQuery.message.reply_markup});
        return;
    }

    if (data === 'question2') {
        countWrong = 0;
        const nextQuestion = questions.question2;
        const editedText = `Правильно, молодец! Давай перейдем к следующему вопросу\n\n${nextQuestion}`;
        bot.editMessageText(editedText, {chat_id: callbackQuery.message.chat.id, message_id: callbackQuery.message.message_id, reply_markup: keyboards.question2});
        return;
    }

    if (data === 'question3') {
        countWrong = 0;
        const nextQuestion = questions.question3;
        const editedText = `Вообще супер! Давай-ка еще один\n\n${nextQuestion}`;

        bot.editMessageText(editedText, {chat_id: callbackQuery.message.chat.id, message_id: callbackQuery.message.message_id, reply_markup: keyboards.question3});
        return;
    }

    if (data === 'win') {
        bot.editMessageText("Поздравляю! Тебе удалось пройти эти вопросы!", {chat_id: callbackQuery.message.chat.id, message_id: callbackQuery.message.message_id});
        return;
    }

    if (data === 'joke') {
        const questionText = callbackQuery.message.text.split('\n').at(-1);
        const editedMessage = `${++countWrong} Да, это 100% какой-то индюк, но давай уточним, какой именно это индюк\n\n${questionText}`;
        bot.editMessageText(editedMessage, {chat_id: callbackQuery.message.chat.id, message_id: callbackQuery.message.message_id, reply_markup: callbackQuery.message.reply_markup});
        return;
    }
});