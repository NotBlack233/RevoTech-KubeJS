TaCZClientEvents.playerShoot(event => {
    // Melee Weapons L-Click Attack
    let melee_wp = [
        'create_armorer:special_melee_atomic',
        'create_armorer:special_melee_wrench',
        'applied_armorer:special_melee_task_manager'
    ]
    if (melee_wp.indexOf(event.gunId.toString()) !== -1) {
        event.cancelShoot()
        event.gunOperator.melee()
        return
    }

    // Auto Reload
    if (event.player.data['tacz_reload_interval'] > 0) {
        event.cancelShoot()
        return
    }
    let nbt = event.player.mainHandItem.nbt
    if (nbt.getInt('GunCurrentAmmoCount') + (event.gunIndex.gunData.bolt.name() == 'OPEN_BOLT'? 0: nbt.getInt('HasBulletInBarrel')) <= 0) {
        event.gunOperator.reload()
        event.player.data['tacz_reload_interval'] = 20
    }
})

// Auto Reload
PlayerEvents.tick(event => {
    if (event.player.data.containsKey('tacz_reload_interval')) {
        if (event.player.data['tacz_reload_interval'] >= 1) event.player.data['tacz_reload_interval']--
    }
})