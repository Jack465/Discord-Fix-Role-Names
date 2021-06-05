const Discord = require('discord.js');
const client = new Discord.Client();

String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

client.once('ready', () => {
    console.log("Started");
    client.guilds.cache.forEach((guild) => {
        guild.roles.cache.forEach((role) => {
            if(role.managed == false && role.name != "@everyone") {
                role.edit({
                    // Replace spaces with dashes, and convert lower case.
                    // name: role.name.replace(/\s+/g, '-').toLowerCase() 

                    // Replace dashes with spaces, convert to title case. 
                    name: role.name.replace('-', ' ').toProperCase() 
                });
            }
        })
    })
});

client.login(your_token)
