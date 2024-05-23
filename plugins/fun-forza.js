let handler = async (m, { conn, command, text }) => {
let love = `*💪Calcolatore di forza💪*
*La forza suprema di ${text} rispetto a te è* *${Math.floor(Math.random() * 100)}%* *di 100%*
*Allenati secco di merda😎*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(forza)$/i
export default handler
