BlockEvents.modification(event => {
    Ingredient.of('#minecraft:logs').and('#minecraft:planks').itemIds
        .forEach(i => event.modify(i, b => {b.blockBuilder.requiresTool()}))
})