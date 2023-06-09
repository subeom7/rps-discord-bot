// const { SlashCommandBuilder } = require('discord.js');

// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('ask')
// 		.setDescription('수범봇에게 질문'),
// 	async execute(interaction) {
// 		// interaction.user is the object representing the User who ran the command
// 		// interaction.member is the GuildMember object, which represents the user in the specific guild

//         // Strip off the /ask command and leading space
//         const question = message.content.slice('/ask'.length).trim();

//         try {
//             // Generate a response using OpenAI
//             const gptResponse = await openai.createCompletion({
//                 model: "text-davinci-003",
//                 prompt: question,
//                 max_tokens: 60,
//             });

//             // Send the response to the Discord channel
//             // message.channel.send(gptResponse.data.choices[0].text.trim());
//             message.channel.send(gptResponse.data.choices[0].text);

//         } catch (err) {
//             console.error(err);
//             message.channel.send('Sorry, I was unable to generate a response.');
//         }

// 		await interaction.reply(gptResponse.data.choices[0].text);
// 	},
// };