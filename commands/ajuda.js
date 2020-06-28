  
const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require('../config.json')

exports.run = (client, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM
  
    message.reply('verifique suas mensagens privadas.')


     const embed = new Discord.MessageEmbed()
        .setTitle(`Keiko Bot - Ajuda!`)
        .setColor("GOLD")
        .setDescription('Seja muito bem vindo a minha central de ajuda. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`\n🤖 `Criador`')
    message.author.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('🤖').then(r => { // criador
            msg.react('🔨').then(r => { // mod
            msg.react('🔧').then(r => { // uteis
            msg.react('💳').then(r => { // entretenimento
            msg.react('🔙').then(r => { // inicio
            })
        })
      })
    })
 })
        // filtros de cada reação, para configurar a informação do autor
        const BotFilter = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
        const UtilidadesFilter = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const BackFilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Bots = msg.createReactionCollector(BotFilter);
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);

                Bots.on('collect', r2 => {
         const embed = new Discord.MessageEmbed()
          .setTitle('🤖 CRIADOR')
          .addField(`\`O Discord do Criador do Criador é\``, `luisz.js#3333`)
          
          msg.edit(embed)
        })  

        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            const embed = new Discord.MessageEmbed()
                .setTitle("🔧 ÚTEIS")
                .addField(`\`${config.prefix}botinfo\``, `Saiba mais sobre mim`)
                .addField(`\`${config.prefix}servericon\``, `Veja a foto do servidor`)
                .addField(`\`${config.prefix}uptime\``, `Veja o tempo que o bot está online`)
                .addField(`\`${config.prefix}ping\``, `Veja a Latencia!`)
                .addField(`\`${config.prefix}servericon\``, `Amplie a foto do servidor`)  
               .addField(`\`${config.prefix}userinfo\``, `Confira algumas informações de um membro`)
               .addField(`\`${config.prefix}pedir\``, `Peça algum produto para comprar.`)
                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
                .setTitle("👮 MODERAÇÃO")
                .addField(`\`${config.prefix}ban\``, `Aplique um banimento em um membro`)
                .addField(`\`${config.prefix}clear\``, `Limpe indesejadas mensagens em um canal`)
                .addField(`\`${config.prefix}kick\``, `Expulse membros fora da lei`)
                .addField(`\`${config.prefix}aviso\``, `Escreva alguma mensagem através do bot`)
                .setColor("GOLD")
            msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
                .setTitle("💳 ENTRETENIMENTO")
                .addField(`\`${config.prefix}ascii\``, `Crie um texto em ASCII`)
                .addField(`\`${config.prefix}avatar\``, `Amplie a foto de algum membro`)
                .addField(`\`${config.prefix}bigtext\``, `Crie um texto grande de letras!`)
                .addField(`\`${config.prefix}dado\``, `Veja em qual número o dado vai cair`)
                .addField(`\`${config.prefix}pergunta\``, `Pergunte algo ao sabio bot`)
                .addField(`\`${config.prefix}roleta\``, `Brinque de roleta-russa`)
                .addField(`\`${config.prefix}laranjo\``, `Crie seu próprio meme do Laranjo`)
                .addField(`\`${config.prefix}beijar\``, `Beije alguém do servidor`)
                .addField(`\`${config.prefix}fumar\``, `Fume um cigarro`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
        .setTitle(`Keiko Bot - Ajuda!`)
        .setColor("GOLD")
        .setDescription('Seja muito bem vindo a minha central de ajuda. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`\n🤖 `Bots`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "help",
    aliases: ['ajuda', 'comandos']
}