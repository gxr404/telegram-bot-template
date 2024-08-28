import { getBotInstance } from '../common'
import { COMMAND_RULE } from '../constant'

export function watch() {

  const bot = getBotInstance()

  bot.onText(COMMAND_RULE.GET_ME, async(msg) => {
    const chatId = msg.chat.id
    const userInfo = await bot.getMe()
    bot.sendMessage(chatId, JSON.stringify(userInfo, null, 2))
  })

}
