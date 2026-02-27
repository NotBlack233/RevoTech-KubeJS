ServerEvents.recipes(event => {
    const {mekanism: mek} = event.recipes
    mek.crushing('3x kubejs:elytra_piece', 'elytra')
})