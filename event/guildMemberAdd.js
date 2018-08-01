module.exports = async (client, member) => {
    const conf = require('../mod/def/welcome.json');
    const welcomeRaw = conf.welcome;
    const welcome = welcomeRaw.replace("<name>", member);
    return member.send(welcome);
}