LootJS.modifiers(event => {
    event.addLootTableModifier(/.*/).replaceLoot('minecraft:gunpowder', 'thermal:niter_dust')
})