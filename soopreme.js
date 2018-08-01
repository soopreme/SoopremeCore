const Discord = require('Discord.js');
const client = new Discord.Client();
const config = require('./def/config.json');
const fs = require('fs');
const chalk = require('chalk');
//loads all commands into cache so I dont have problems with it not finding commands
const files = fs.readdirSync('./mod/');
for (var i in files) {
try {
  var definition = require('./mod/' + files[i]);
  console.info('Module Loaded: ' + files[i]);
} catch (err) {
    console.error(err);
}
}
const evtFiles = fs.readdirSync("./event/");
  for (var i in evtFiles) {
    const eventName = evtFiles[i].split(".")[0];
    const event = require(`./event/${evtFiles[i]}`);
    console.log(`Loaded ${evtFiles[i]}`);
    client.on(eventName, event.bind(null, client));
    const mod = require.cache[require.resolve(`./event/${evtFiles[i]}`)];
    delete require.cache[require.resolve(`./event/${evtFiles[i]}`)];
    for (let g = 0; g < mod.parent.children.length; g++) {
      if (mod.parent.children[g] === mod) {
        mod.parent.children.splice(g, 1);
        break;
      }
    }
  }
client.on("error", (e) => console.error(chalk.red.inverse("ERROR: ") + e));
client.on("warn", (e) => console.warn(chalk.orange.inverse("WARN: ") + e));
if (config.debug == true) client.on("debug", (e) => console.info(chalk.green.inverse("DEBUG: ") + e));
client.login(config.token);