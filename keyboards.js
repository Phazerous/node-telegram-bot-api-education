module.exports = {
    question1: {
        inline_keyboard: [
            [
                {
                    text: 'В. Белов',
                    callback_data: 'wrong'
                },
            ],
            [
                {
                    text: 'В. Тендряков',
                    callback_data: 'wrong'
                }
            ],
            [
                {
                    text: 'В. Астафьев',
                    callback_data: 'question2'
                }
            ],
        ]
    },
    question2: {
        inline_keyboard: [
            [
                {
                    text: 'Н.А.Добролюбов',
                    callback_data: 'question3'
                },
            ],
            [
                {
                    text: 'Л.И.Писарев.',
                    callback_data: 'wrong'
                }
            ],
            [
                {
                    text: 'В.Г.Белинский.',
                    callback_data: 'wrong'
                }
            ],
        ]
    },
    question3: {
        inline_keyboard: [
            [
                {
                    text: 'Скалозуб',
                    callback_data: 'wrong'
                }
            ],
            [
                {
                    text: 'Чацкий',
                    callback_data: 'win'
                },
            ],
            [
                {
                    text: 'Молчалин',
                    callback_data: 'wrong'
                }
            ],
            [
                {
                    text: 'Фамусов',
                    callback_data: 'wrong'
                }
            ],
            [
                {
                    text: 'Какой-то индюк',
                    callback_data: 'joke'
                }
            ]
        ]
    }
}