ServerEvents.tags('block', event => {
    Ingredient.of('#forge:ores/copper').itemIds.forEach(i => event.remove('minecraft:needs_stone_tool', i))
})