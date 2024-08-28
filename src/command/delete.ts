import { getBotInstance } from '../common'
import { todos } from '../store'

export const RULE = /\/delete/

export function watch() {
  const bot = getBotInstance()

  bot.onText(RULE, (msg) => {
    const chatId = msg.chat.id
    const todoList = todos[chatId]
    bot.sendMessage(chatId, 'Click an item to delete:', {
      reply_markup: {
        inline_keyboard: todoList.map((item, index) => [
          {
            text: `${index + 1}. ${item}`,
            callback_data: JSON.stringify({ command: 'delete', index })
          },
        ]),
      },
    })
  })

  // 监听用户点击
  bot.on('callback_query', (callbackQuery) => {
    const callData = callbackQuery.data
    const message = callbackQuery.message
    if (!message || !callData) return
    const data = JSON.parse(callData)
    const chatId = message.chat.id

    if (data.command === 'delete') {
      const deleted = todos[chatId].splice(data.index, 1)
      bot.answerCallbackQuery(callbackQuery.id, {
        text: 'Deleted "' + deleted[0] + '" from your to-do list.'
      })
    }

  })
}
