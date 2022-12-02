const TelegramBot = require('node-telegram-bot-api');
const { BOT_TOKEN } = require('./data.js');

const bot = new TelegramBot(BOT_TOKEN, {polling: true});

const getReplyKeyboardMarkup = () => {
    return {
        keyboard: [
                [{
                    text: 'Main Menu',
                    input_field_placeholder: 'nice shot'
                }],
                [{
                    text: 'Settings'
                }],
                [{
                    text: 'Leave'
                }]
            ],
        one_time_keyboard: true,
        input_field_placeholder: 'Choose an option',
        resize_keyboard: true
    };
}

const getReplyKeyboardRemove = () => {
    return {
        remove_keyboard: true
    }
}

const getInlineKeyboard = () => {
    return {
        inline_keyboard: [
            [
                {
                    text: 'Fish',
                    callback_data: '.'
                },
                {
                    text: 'Meat',
                    callback_data: '.'
                }
            ],
            [
                {
                    text: 'Dairy Products',
                    callback_data: '.'
                },
                {
                    text: 'Vegetables',
                    callback_data: '.'
                }
            ],
            [
                {
                    text: 'Fruits',
                    callback_data: '.'
                },
                {
                    text: 'Sweets',
                    callback_data: '.'
                }
            ],
            [
                {
                    text: 'Nuts',
                    callback_data: '.'
                },
                {
                    text: 'Cereals',
                    callback_data: '.'
                }
            ]
        ]
    }
}

bot.onText(/\/keyboard/, async (message) => {
    const chatId = message.chat.id;

    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{
                    text: "InlineKeyboard",
                    callback_data: 'inlineKeyboard'
                },
                {
                    text: "ReplyKeyboard",
                    callback_data: 'replyKeyboard'
                }],
                [{
                    text: 'Clear ReplyKeyboard',
                    callback_data: 'clear'
                }]
            ]
        }
    }

    bot.sendMessage(chatId, "Select type of a keyboard", opts);
});

bot.on('callback_query', async (callbackQuery) => {
    if (callbackQuery.data !== undefined) {
        bot.answerCallbackQuery(callbackQuery.id);

        const data = callbackQuery.data;

        let messageText = "";
        let opts = {
            reply_markup: {}
        };

        if (data === "inlineKeyboard") {
            opts.reply_markup = getInlineKeyboard();
            messageText = "InlineKeyboard";
        } else if (data === 'replyKeyboard') {
            opts.reply_markup = getReplyKeyboardMarkup();
            messageText = "ReplyKeyboard";
        } else if (data === 'clear') {
            opts.reply_markup = getReplyKeyboardRemove();
            messageText = 'ReplyKeyboard cleared'
        } else {
            return;
        }

        bot.sendMessage(callbackQuery.message.chat.id, messageText, opts);
    }
});