const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Toplam Kişi`, üyesayi, true)
  .addField(`Toplam Kullanıcı`, kullanıcılar, true)
  .addField(`Botlar`, botlar, true)
  .addField(`Aktif Üyeler`, `${message.guild.members.filter(o => o.presence.status === 'online').size} :green_circle:`, true)
  .addField(`Boşta Üyeler`, `${message.guild.members.filter(i => i.presence.status === 'idle').size} :yellow_circle:`, true)
  .addField(`Rahatsız Modda Üyeler`, `${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} :red_circle:`, true)
  .addField(`İnaktif Üyeler`, `${message.guild.members.filter(off => off.presence.status === 'offline').size} :white_circle:`, true)
  
  
.setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()  

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say"],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "üye-durum",
  description: "üye-durum",
  usage: "üye-durum"
};
