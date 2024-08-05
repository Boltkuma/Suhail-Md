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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_44_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDg3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZLZkJzc2xiRzJ5TUpPK29XZjdEMzh3THdzc2NaUnFldDNrdFltK1FucnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdYWmY2SkNjUzRHc0l3VktwOTJCbGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzY4MDNmYzktMjQ2MS00OTcwLWI4YzktNGFiMWI3ZDdmYWU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAxNjQsXG4gICAgICA4MixcbiAgICAgIDI1MixcbiAgICAgIDExNyxcbiAgICAgIDQyLFxuICAgICAgMTAxLFxuICAgICAgMTcyLFxuICAgICAgMTQ1LFxuICAgICAgMTk1LFxuICAgICAgMjI1LFxuICAgICAgMTE2LFxuICAgICAgMTUsXG4gICAgICAxMTAsXG4gICAgICAyNTAsXG4gICAgICAxNTIsXG4gICAgICAyMSxcbiAgICAgIDgzLFxuICAgICAgNDEsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxOTcsXG4gICAgICAxNjYsXG4gICAgICA5NSxcbiAgICAgIDEzNSxcbiAgICAgIDIwMCxcbiAgICAgIDE1MCxcbiAgICAgIDgyLFxuICAgICAgMTc2LFxuICAgICAgMjQsXG4gICAgICA4NixcbiAgICAgIDIyMSxcbiAgICAgIDYzLFxuICAgICAgMjI0LFxuICAgICAgMjAzLFxuICAgICAgMTYxLFxuICAgICAgNTUsXG4gICAgICAxNjcsXG4gICAgICAyNDMsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZTlNWQ0VRVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzMTExMTI5Nzo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRyZWFzdXJlXCIsXG4gICAgXCJsaWRcIjogXCI1NzY2NDY4MzkyOTg1Mzo0NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYUx4ZmNGRU9YQXdMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkw4UFBKUFBjMEQrUENIdzNlZzh6QlhkYnpyenlXMS9ZamQxMjV2a1hHa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSG5yK0J4S2F5V0UxY0hXNWxEQlRQMDN6MEw0bDgrWVFKKzFNUVFOZjQ0V3ArRXhvaWd1UGcvMzQzVnB2bjJUQWJubm9SQWtTN1dWQzJNeSsvUXVhREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZjlmYVVsNHkrbnVxUUhWYUVjQjlWQ0drVDR3MWFxalBKVkpnSUlULy80S3B4QUJZL2VmWVVMbTRDbVZObFRDOWxPWFRkUWlITFB2aEJ3SmhId2V4RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzMTExMTI5Nzo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODE4NjY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFhQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWFAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3dHZWTjRYYjRFNUtsczJJM3NQb2ZsdVNWZzhmeGl3SEdXTmRqWmFHS3dBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTI4NzAzMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Boltx-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Boltkuma",


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
