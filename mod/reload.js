exports.run = async (message, client, args) => {
    await message.delete(0);
    await console.log(`reloading ${args[0]}...`);
    try {
    await delete require.cache[require.resolve(`./${args[0]}`)];
    } catch (err) {
        return message.channel.send({embed: {
            color: 1056184,
            title: "Fail!",
            description: "That command doesnt exist!"
        }});
    }
    await console.log(`reloaded ${args[0]}!`);
    let tmp = require(`./${args[0]}`);
    return message.channel.send({embed: {
        color: 1076754,
        title: "Success!",
        description: `reloaded ${args[0]}!`
    }});
}
exports.usage = "!reload <command you want to reload>";