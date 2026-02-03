const {API: GuildAPI} = Java.loadClass('earth.terrarium.argonauts.api.guild.GuildApi')

var Guild = {
    /**
     * 
     * @param {Internal.Player} player 
     * @returns {Internal.UUID}
     */
    getGuild: player => GuildAPI.getPlayerGuild(player)
}