require("dotenv").config(); //to start process from .env file

const { Client, IntentsBitField} = require('discord.js')

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	]
})

client.on('ready', (c) => {
	console.log('ready to roll')
})


function Submission(name, date, link) {
	this.name = name,
	this.date = date,
	this.link = link
}


const msgID = '1065361962508222515'
const channelID = '1065321217415974914'
let holdingArray = []
let messageArray = []
client.on('messageCreate', (message) => {
	if(message.author.bot) {
		return
	}
	async function trial() {
		const reference = await message.reply(message.content)
		/*
		const test = await message.guild.channels.cache.get(channelID).messages.fetch(msgID)
		test.edit(`${test} More`)
		.then(msg => console.log(`Updated the content of a message to ${msg.content}`))
		.catch(console.error);
		*/
		//console.log(test)

	}

	trial()
	holdingArray = message.content.split(',')
	const newMessage =  new Submission(holdingArray[0], holdingArray[1], holdingArray[2])
	messageArray.push(newMessage)
	holdingArray = []
	console.log(...messageArray)

})
client.login(process.env.TOKEN)
//hello