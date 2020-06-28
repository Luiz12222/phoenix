exports.run = async (client, message) => {
    message.channel.send('**FUMANDO**').then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁☁');
        }, 2500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 500);
        setTimeout(() => {
            msg.edit(`**Seu Tempo de fumar acabou!**`);
        }, 4000);
    });
}