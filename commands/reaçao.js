const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log('Olá mundo')
})

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "566982078625873931") return

    let servidor = client.guilds.get("714890265009324052")
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('720523489223770184'),
        cargo2 = servidor.roles.get('566986370363686943'),
        cargo3 = servidor.roles.get('566986398989549632')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "714900726341697597"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }else if(dados.d.emoji.id === "566966738013388821"){
            if(membro.roles.has(cargo3)) return
            membro.addRole(cargo3)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "714900726341697597"){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
        }else if(dados.d.emoji.name === "👌"){
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }else if(dados.d.emoji.id === "566966738013388821"){
            if(membro.roles.has(cargo3)) return
            membro.removeRole(cargo3)
        }
    }

})


client.login(config.token);