let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw 'ok'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('ma sei proprio un idiota!')}}
handler.command = /^godmode$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
