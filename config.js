const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348031111297";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_54_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibk12dU1lODZRVVkzRm9LMmc1UHdXNGowaW5Jd0xlVVhWc3lKN0ZhK1JUMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibWFlbHl0cFBUaTJIZTZucjFJUGJTQVwiLFxuICBcInBob25lSWRcIjogXCIyOWZiOTQ0My0yM2Q2LTQ0NWEtYjM3OC1iNTM0ODdkZjg1MjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTYxLFxuICAgICAgMjQsXG4gICAgICA0OSxcbiAgICAgIDE5NyxcbiAgICAgIDIwNyxcbiAgICAgIDY3LFxuICAgICAgMjM5LFxuICAgICAgMTM0LFxuICAgICAgMTMzLFxuICAgICAgMTYxLFxuICAgICAgMjA5LFxuICAgICAgMTU5LFxuICAgICAgMzEsXG4gICAgICAxMzAsXG4gICAgICAyMTUsXG4gICAgICAxMjMsXG4gICAgICAxMjMsXG4gICAgICA5NixcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMSxcbiAgICAgIDEzMyxcbiAgICAgIDE5LFxuICAgICAgMzUsXG4gICAgICA2OCxcbiAgICAgIDIwNCxcbiAgICAgIDE1OSxcbiAgICAgIDQ3LFxuICAgICAgMTQ5LFxuICAgICAgMTI4LFxuICAgICAgMjA0LFxuICAgICAgMjAxLFxuICAgICAgMTMxLFxuICAgICAgMjI5LFxuICAgICAgOTQsXG4gICAgICA4NyxcbiAgICAgIDE3NyxcbiAgICAgIDEwOSxcbiAgICAgIDI0MSxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU3RlBXNlJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDMxMTExMjk3OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHJlYXN1cmVcIixcbiAgICBcImxpZFwiOiBcIjU3NjY0NjgzOTI5ODUzOjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXTHhmY0ZFSStuL2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTDhQUEpQUGMwRCtQQ0h3M2VnOHpCWGRienJ6eVcxL1lqZDEyNXZrWEdrYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3c0ViYlJKLzdWL000YlMyOVVhTlZRcHlCU05kL3B5NzJXdXJXakM2SFJ0Y2dwMm9YeEpuWGpOQk9RSDQ0aFF2aWhPRFkvQ3FmYkUySnlDWWZXQ01EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvdEZKQjBKVTVlVjNjamJ4MTRTbFpyYmF6YjVwNnJ3VGVDMDJ3RkNBMlF1bThOWjJoa3ZKUmRSK2ppVkJFNUNMYVFIL2pMZ3dCOUNFSklZODRvL05oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDMxMTExMjk3OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MTc2NTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Bolt-Md",
  ownername:process.env.OWNER_NAME|| "BOLTKUMA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
