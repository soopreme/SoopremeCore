const Discord = require('discord.js');
exports.run = async (message, client, args) => {
    const files = fs.readdirSync('./');
    for (var i in files) {
        try {
            const nme = files[i].split(".")[0];
            var usg = require('./' + files[i]);
            console.info('Module Loaded: ' + files[i]);
        } catch (err) {
            console.error(err);
        }
    }
}
exports.usage = "!help <the command you want help for | blank for all commands>"