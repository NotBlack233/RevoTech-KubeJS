ServerEvents.recipes(event => {
    const {mekanism: mek} = event.recipes
    mek.crushing('3x kubejs:elytra_piece', 'elytra')
    mek.combining('6x createdieselgenerators:asphalt_block', 'minecraft:gravel', 'thermal:bitumen')
})