const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2347039570336"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb://uzkczx40erwz0pohr5b2:smjYeuitaGKhvtwpim7@bnrg0pit9dldcipgv7lz-mongodb.services.clever-cloud.com:2133/bnrg0pit9dldcipgv7lz"
global.port= process.env.PORT || 5000
global.email = 'excelottah6@gmail.com'
global.github = 'https://github.com/excelottah6/BLACK-MD'
global.location = 'africa lagos'
global.gurl = 'https://instagram.com/big_dmall/' // add your username
global.sudo = process.env.SUDO || '2347039570336' 
global.devs = '2347039570336';
global.website = 'https://github.com/excelottah6/BLACK-MD' //wa.me/+234000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/38b2287de9e0f6b8ecab1.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RvOGxuNksvMDJZK1dLbzJRL3FXZWpjOFI4dlpmNDlkQnNWanFBNEZtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZ1SFBTWGx6SDcyNHRtVUdzTGtNOUpxeFdqQU50UW8wRE9BbXFqM1VDQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLR1htc3JLeTJRckh3bDdteXhiaEVSU1J1akwxMVRxUUMrNW43UlgvZGxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWTlRvSFk3K0hUSEV5YXJzWjJYVXQzR1FhNVVpc0hDYnlIOU5jaldvejJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMS3dKcWxrUmxQQkZPSytXYUxyVE4vUE53d0VPZ2pBYStCSHBMZHg1R3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlOYkQ4RVVRd0JHZmJBQndOTjg5MlMzTUI2d2crMjEvcUIzbTB5RG91QzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0d1MkN5MnFMa0U3TkxkdjhjMEJ2MzVDckQ0bzVURUwzZ1ZSc0NtR1Vsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXBENnQ0eWQ0NDhXK2JSdlNNUFR2dzltMU0rMU9TdGhFRFFRNnNNd1NHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp3VDB4bko2K21UMDdrbHV5ck1EU3hNNWZDTzZORjZ5WWU1OUIxbG5qc1EraUN0M3gxRkRxQ1lvYUJnS2ZiNi9xNU5QT2FnOUgrTlRXVVN3N2lQdGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6Ikx0VU44RDVGUVYxV1o2U3pHaXkvUjVKajUwd1VLV3pKWXBIWDQ3NHo5NG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFpWG56VDhtVGF1WWN0ZDdUMXZTVnciLCJwaG9uZUlkIjoiNDJkZGYwMWQtYWIxYi00MGZjLWE4NTktZDFlNzdjZjFmZDAwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJHRWJ1cFhTbTRtNGZjckdnaHVVbHpMWVVoND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvNnlaaFZoS0FaNzlINTl4WFJ4SVF3V2dMdkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTFYSzhHMUciLCJtZSI6eyJpZCI6IjIzNzYyMDg1NzkzMDozMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW5oZy9zR0VPVGNzN1FHR0E0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib3kyb0J4YTlmWnVVTjdkbjljek1MbEgvRFladk1aeEVKejREaG5McmNtWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidUNGcXV4VXJvcU9wWmZTVVlCTENmRDV6MGFRWU92RDNVd1BuMlVpM1M5MWNpWjN3WHhTbUp3SVQ3R0p2RVFUR2FFOVFaRlcwVGd5QXA4SzNUYmdwQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Iktvb216RWVYZktYaHZJNGRhNlhML1VCWTI2R0gxS1M4TFh5RmVEem1wOStaN1hEamFvMHVlbnRIUjgxM0NyM0FtSlRXcFdhOE5kTGFCS1JiRlhlb2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjIwODU3OTMwOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNdHFBY1d2WDJibERlM1ovWE16QzVSL3cyR2J6R2NSQ2MrQTRaeTYzSm0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1MTIxMTR9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'BLACK BOT',
  packname:  process.env.PACK_NAME || 'MADE BY EXCEL',
  
  botname:   process.env.BOT_NAME === undefined ? "BLACK-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excelottah' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
