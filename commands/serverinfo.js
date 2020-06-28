const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Informações`, message.guild.iconURL)
        .setColor("#0000")
        .addField('👑 | Dono do servidor', message.guild.owner, true)
        .addField('🌍 | Região do Servidor', message.guild.region, true)
        .setThumbnail(sicon)
        .addField("📓 | Nome do Servidor", message.guild.name)
        .addField('📁 | Quantidade de Canais', message.guild.channels.cache.size, true)
        .addField('👤 | Membros', checkMembers(message.guild), true)
        .addField('👾 | Bots', checkBots(message.guild), true)
        .addField('🟢 | Membros Online', checkOnlineUsers(message.guild))
        .setFooter('📆 | Criado em:')
        .setTimestamp(message.guild.createdAt);

    return message.channel.send(serverembed);
}