import TelegramBot from "node-telegram-bot-api"

export const getBotInstance = (function () {
  let bot: TelegramBot
  const token = process.env.TELEGRAM_BOT_TOKEN

  return () => {
    if (!token) throw new Error('TelegramBot token is required')
    if (bot) return bot

    bot = new TelegramBot(token, {
      // 保持轮询
      polling: true,
      // test环境的账号和 production的账号是独立的
      // 国内test环境注册没成功过 直接使用production环境
      testEnvironment: false
    })
    return bot
  }
})()
