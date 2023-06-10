require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

// Initialize OpenAI client
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

// Add global busy flag
let botIsBusy = false;

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('messageCreate', async message => {

    if (message.author.bot) return;  // Ignore messages from bots

    else if (/^ㅉ+$/.test(message.content) || /^찌+$/.test(message.content) || /^가위+$/.test(message.content)) {
        message.channel.send('ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ');
    } 
    else if (/^ㅁ+$/.test(message.content) || /^묵+$/.test(message.content) || /^바위+$/.test(message.content)) {
        message.channel.send('ㅃㅃㅃㅃㅃㅃㅃㅃㅃㅃㅃ');
    }
    else if (/^ㅃ+$/.test(message.content) || /^빠+$/.test(message.content) || /^보+$/.test(message.content)) {
        message.channel.send('ㅉㅉㅉㅉㅉㅉㅉㅉㅉㅉㅉ');
    }
    else if(message.content.includes('수범') && !message.content.includes('/ask')){
        message.channel.send('예?');
    }

    if (message.content.startsWith('/ask')) {

        // Check if bot is busy
        if (botIsBusy) {
            message.channel.send('동시에 물어보지마');
            return;
        }

        // Strip off the /ask command and leading space
        const question = message.content.slice('/ask'.length).trim();

        try {
            // Set busy flag
            botIsBusy = true;
            
            const chapGPT = async (prompt) => {
                const response = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [{'role':'assistant', 'content': prompt}] 
                });
                return response["data"]["choices"][0]["message"]["content"];
            };

            let response = await chapGPT(question);
            message.channel.send(response);

            // Reset busy flag
            botIsBusy = false;
            
        } catch (err) {
            console.error(err);
            message.channel.send('문제가 생겨서 답 안해.');

            // Reset busy flag even if there was an error
            botIsBusy = false;
        }
    }
});

client.login(process.env.TOKEN);
