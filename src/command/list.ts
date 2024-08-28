
import { getBotInstance } from '../common'
import { todos } from '../store'

const RULE = /\/list/

export function watch() {
  const bot = getBotInstance()

  bot.onText(RULE, (msg) => {
    const chatId = msg.chat.id
    const todoList = todos[chatId]

    let message = 'Your to-do items are:\n'
    todoList.forEach((item, index) => {
      message += `${index + 1}. ${item}\n`
    })

    bot.sendMessage(chatId, message)
  })
}
