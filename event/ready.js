module.exports = async client => {
    client.user.setActivity(conf.activity);
    console.info(chalk.blue.inverse("NOTICE: ") + "Ready!");
}