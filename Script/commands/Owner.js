const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
‎╭──────────────────⊙
‎│ 🎀 𝗔𝗦𝗦𝗔𝗟𝗔𝗠𝗨 𝗪𝗔𝗟𝗔𝗜𝗞𝗨𝗠 🎀
‎├──────────────────❖
‎├──❯ 𝗢𝘄𝗻𝗲𝗿 𝗜𝗻𝗳𝗼 ♐
‎├‣ 📌 𝐍𝐀𝐌𝐄 : 𝙒𝘼𝙎𝙃𝙄𝙆 𝘼𝘿𝙉𝘼𝙉
‎├‣ 📍 𝐀𝐃𝐃𝐑𝐄𝐒𝐒 : 𝙅𝙊𝙔𝙋𝙐𝙍𝙃𝘼𝙏, 𝘽𝘼𝙉𝙂𝙇𝘼𝘿𝙀𝙎𝙃
‎├‣ 🖋️ 𝐂𝐋𝐀𝐒𝐒 : 𝙄𝙉𝙏𝙀𝙍 𝙎𝙀𝘾𝙊𝙉𝘿 𝙔𝙀𝘼𝙍
‎├‣ 💞 𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍 : 𝙎𝙄𝙉𝙂𝙇𝙀
‎├‣ ☪️ 𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 : 𝙄𝙎𝙇𝘼𝙈
‎│  
‎├──❯ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 🔗 
‎├‣ 🏷️ 𝐅𝐁 : facebook.com/61574715983842
‎├‣ 💬 𝐌𝐒𝐆 : messenger.com/61574715983842
‎│
‎├──❯ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 🤖
‎├‣ ⚡ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : 𝗪𝗮𝘀𝗵𝗶𝗸 𝗔𝗜
‎│  
‎├──❯ 𝗚𝗖 𝗜𝗡𝗙𝗢 🎭
‎├‣ 𝙂𝘾 𝙉𝘼𝙈𝙀 : 𝗪𝗮𝘀𝗵𝗶𝗸 𝗔𝗜
‎├──────────────────❖
‎│ 🙏 𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 🙏 
‎╰──────────────────⊙
`;

  const images = [
    "https://files.catbox.moe/yfh8l2.jpg" ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
