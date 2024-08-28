import { getBotInstance } from '../common'

export const RULE = /\/getMe/

export function watch() {

  const bot = getBotInstance()

  bot.onText(RULE, async(msg) => {
    const chatId = msg.chat.id
    const userInfo = await bot.getMe()
    bot.sendMessage(chatId, JSON.stringify(userInfo, null, 2))
  })

}
