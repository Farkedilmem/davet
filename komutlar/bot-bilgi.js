const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  let premium2 = await db.fetch(`pre_${message.guild.id}`)
  let pre
  if(!premium2){
    pre = "Hayır!"
  }else{
    pre = "Evet!"
  }
  const duration = moment
    .duration(bot.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Versiyon`, `0.2`, true)
    .addField(`Aktiflik Süresi`, duration, true)
    .addField(`Sunucular`, bot.guilds.size.toLocaleString(), true)
    .addField(`Kullanıcılar`, bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField(`Ping`, bot.ping + "ms", true)
    .addField(
      `Ram Kullanımı`,
      `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
      true
    )
    .addField(`Destek Sunucusu`, `[[Tıkla!]](https://discord.gg/R5zbCWJ8X3)`, false)
    .addField(`Botu Ekleyin`, `[[Tıkla!]](https://discordapp.com/oauth2/authorize?client_id=1010457665362735109&scope=bot&permissions=8)`, false)
    .setFooter(`${bot.user.username} Botun Bilgisi`, bot.user.avatarURL); 
  
  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot","hakkında"],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};
