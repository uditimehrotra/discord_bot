const { REST, Routes } = require('discord.js');
require('dotenv').config();
const commands = [
    {
      name: 'create',
      description: 'creates a new short url',
    },
  ]

  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

  (async ()=> {
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1280428325705220106'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();