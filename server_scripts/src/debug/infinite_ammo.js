ServerEvents.commandRegistry(event => {
    /**
     * 
     * @param {Internal.Player} player 
     */
    function flip_status(player) {
        let current = player.data.getOrDefault('infinite_ammo', false)
        current ^= 1
        player.data.put('infinite_ammo', current)
        player.tell(Text.of('Switched infinite ammo mode to: ').append(current? Text.green('on'): Text.red('off')))
    }

    const {commands, arguments} = event
    event.register(commands.literal('infinite_ammo')
        .requires(c => c.hasPermission(4))
        .executes(c => {
            if (!c.source.isPlayer()) return 0
            flip_status(c.source.player)
            return 1
        })
    )
})

TaCZServerEvents.entityShoot(event => {
    if (event.player.data.getOrDefault('infinite_ammo', false)) {
        event.getGunItem().nbt.putInt('GunCurrentAmmoCount', 99)
    }
})