const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
 
    message.channel.send(`${message.author}, Faça o pedido pela sua dm.`).then(msg => msg.delete(9000));
    let member = message.author;
    message.delete().catch();
    await message.author.createDM();
 
    let embed = new Discord.MessageEmbed()
        .setDescription(`▫| Digite Ok pra continuar`)
    message.author.send(embed)
   
 
   
    var tazer = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
    tazer.on('collect', r => {
        let nome = r.content;
        let embed2 = new Discord.MessageEmbed()
            .setDescription(`Qual seu pedido ?`)
        message.author.send(embed2)
 
        var tazer1 = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
        tazer1.on('collect', r => {
            let serve = r.content;
            let embed3 = new Discord.MessageEmbed()
                .setDescription(`Está ciente dos termos da loja?`)
            message.author.send(embed3)
 
            var tazer2 = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
            tazer2.on('collect', r => {
                let online = r.content;
                let embed4 = new Discord.MessageEmbed()
                    .setDescription(`Está com o dinheiro em mãos?`)
                message.author.send(embed4)
 
                var tazer3 = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                tazer3.on('collect', r => {
                    let clasi = r.content;
                    let embed5 = new Discord.MessageEmbed()
                        .setDescription(`Qual seu discord?`)
                    message.author.send(embed5)
 
                    var tazer4 = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                    tazer4.on('collect', r => {
                        let fac = r.content;

                                let embed8 = new Discord.MessageEmbed()
                                    .setDescription("*Para enviar seu pedidos digite ** `Confirmar`, **para cancelar digite `Cancelar`**.")
                                message.author.send(embed8)
 
                                var confirm = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                                confirm.on('collect', r => {
                                    if (r.content.toLowerCase() == "confirmar") {
                                        let embed12 = new Discord.MessageEmbed()
                                            .setDescription(`Seu pedido foi enviado!`)
                                            message.author.send(embed12)
                                        
                      let servericon = message.author.displayAvatarURL;
                                        const form = new Discord.MessageEmbed()
                                            .setTitle('Pedidos | Phoenix Store')
                                            .addField("Discord do cliente:", message.author.tag)
                                            .addField("Pedido do cliente::", serve)
                                            .addField("Está ciente dos termos?:", online)
                                            .addField("Está com o dinheiro nas mãos?:", clasi)
                                            .setFooter(`Phoenix Store ツ © 2020`)
                                            .setThumbnail(servericon)
                                            .setColor('RANDOM')
                                        bot.channels.cache.get('726227403969527808').send(`|| < luisz#0001 > ||`, form).then(async msg => {
                                            const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '✔') && (u.id !== bot.user.id && u.id === message.author.id))
                                            collector.on("collect", r => {
                                                switch (r.emoji.name) {
                                                    case '✔':
                                                    let embed13 = new Discord.MessageEmbed()
                                                    .setDescription(``)
                                                        message.author.createDM().then(dm => dm.send(embed13))
                                                        break;
                                                }
                                            })
                                        })
                                    }
                                    if (r.content.toLowerCase() == "cancelar") {
                                        message.author.send({ embed: { description: "Formúlario cancelado." } });
                                    }
                                })
                            })
                        })
                    })
                })
            })
        }

exports.help = {
    name: 'pedidos',
    aliases: ['pedir']
}