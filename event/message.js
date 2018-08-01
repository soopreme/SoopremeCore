module.exports = async (client, message) => {
    const config = require("../def/config.json")
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    try {
        let commander = require(`../mod/${command}.js`);
        return commander.run(message, client, args);
    } catch (err) {
        let commander = require(`../mod/error`);
        return commander.run(message, client, args);
    }
}