require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
});

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return;  // Ignore messages from bots

    // if (message.author.username !== 'SK7') {
    //     message.channel.send('hi');
    // }
    else if (message.content.includes('ㅁ') || message.content.includes('묵') || message.content.includes('바위')) {
        message.channel.send('ㅃㅃㅃㅃㅃㅃㅃㅃㅃㅃㅃ');
    } else if (message.content.includes('ㅉ') || message.content.includes('찌') || message.content.includes('가위')) {
        message.channel.send('ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ');
    } else if (message.content.includes('ㅃ') || message.content.includes('빠') || message.content.includes('보')) {
        message.channel.send('ㅉㅉㅉㅉㅉㅉㅉㅉㅉㅉㅉ');
    }

    console.log(`Received message: ${message.content}`);
    console.log(message.author.username);
});

client.login(process.env.TOKEN);
