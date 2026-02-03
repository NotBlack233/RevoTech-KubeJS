const $Random = Java.loadClass('java.util.Random')
let random = new $Random()

BlockEvents.broken('gravel', event => {
    if (event.player.getItemInHand('main_hand').id == 'kubejs:flint_shovel')
        if (random.nextInt(0, 4) == 0) event.block.popItem('flint')
})