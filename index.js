const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

//replies for normal messages
client.on('messageCreate',async message =>{
    if(message.author.bot) return;
    if(message.content.startsWith('create'))
    {
        const url= message.content.split("create")[1].trim();
        if (!url) {
            return message.reply({
                content: "Please provide a valid URL after the create command.",
            });
        }
        try {
            const response = await axios.post('http://localhost:8004/discord/url',{ url });
            const shortUrl= response.data.id;
            return message.reply({
                content: `here is your shortened URL: ${shortUrl}`,
            });
        }
        catch(error)
        {
            console.error(error);
            return message.reply({
                content: "An error occured while trying to shorten the url"
            });
        }
        // return message.reply({
        //     content: "generating short ID for " + url,
        // })
    }
    else{
        //console.log(message.content);
        message.reply({
            content: "hi from Bot",
        });
    }
   
});
//replies for self made commands  
client.on('interactionCreate', interaction=>{
    console.log(interaction);
    interaction.reply("Pong!!");
})

client.login(process.env.DISCORD_TOKEN);