BlockEvents.rightClicked('chipped_anvil', event => {
    let player = event.player
    if (player.mainHandItem.id == 'immersiveengineering:hammer'
        && player.offHandItem.id == 'minecraft:iron_ingot'
        && player.isShiftKeyDown()) {
        event.block.set('anvil')
        player.mainHandItem.damageValue += 1
        player.offHandItem.shrink(1)
    }
})

BlockEvents.rightClicked('damaged_anvil', event => {
    let player = event.player
    if (player.mainHandItem.id == 'immersiveengineering:hammer'
        && player.offHandItem.id == 'minecraft:iron_ingot'
        && player.isShiftKeyDown()) {
        event.block.set('chipped_anvil')
        player.mainHandItem.damageValue += 1
        player.offHandItem.shrink(1)
    }
})