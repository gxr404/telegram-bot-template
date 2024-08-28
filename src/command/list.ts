
import { getBotInstance } from '../common'
import { COMMAND_RULE } from '../constant'
import { todos } from '../store'

export function watch() {
  const bot = getBotInstance()

  bot.onText(COMMAND_RULE.LIST, (msg) => {
    const chatId = msg.chat.id
    const todoList = todos[chatId]

    let message = 'Your to-do items are:\n'
    todoList.forEach((item, index) => {
      message += `${index + 1}. ${item}\n`
    })

    bot.sendMessage(chatId, message)
  })
}
