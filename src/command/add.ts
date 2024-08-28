import { getBotInstance } from '../common'
import { todos } from '../store'

export const RULE = /\/add (.+)/

export function watch() {
  const bot = getBotInstance()

  bot.onText(RULE, (msg, match) => {
    const chatId = msg.chat.id
    const text = match ? match[1] :''
    if (!todos[chatId]) {
      todos[chatId] = []
    }
    todos[chatId].push(text)

    bot.sendMessage(chatId, `Added "${text}" to your to-do list.`, {
      reply_markup: {
        // InlineKeyboardMarkup
        "inline_keyboard": [
          [{text: 'baidu', url: 'https://www.baidu.com'}],
          [{text: 'google', url: 'https://www.google.com'}],
        ] as any
      }
    })

    // bot.sendMessage(chatId, `Added "${text}" to your to-do list.`, {
    //   reply_markup: {
    //     // ReplyKeyboardMarkup
    //     keyboard: [
    //       ['Yes'],
    //       ['No']
    //     ] as any
    //   }
    // })

    // InlineKeyboardMarkup
    // ReplyKeyboardMarkup
    // ReplyKeyboardRemove
    // ForceReply
  })
}
