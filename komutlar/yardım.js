const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
   let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.RichEmbed()
.setAuthor(`Komutlar`)
  .setDescription(`Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **tr** [[Botu Eklemek İçin Tıkla!]](https://discordapp.com/oauth2/authorize?client_id=1010457665362735109&scope=bot&permissions=8)`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(`Rütbeler`, `\`rütbe-ekle\`, \`rütbe-sil\`, \`rütbe-liste\``)
    .addField(
      `Bot`,
      `\`bot-bilgi\`, \`davet\`, \`top20\`, \`yardım\`, \`prefix\``
    )
    .addField(
      `Sistem`,
      `\`avatar\`, \`say\`, \`sa-as\`, \`temizle\``
      
)

    .setColor("BLACK")
    .setFooter(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setTimestamp()   
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
