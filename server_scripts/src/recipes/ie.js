ServerEvents.recipes(event => {
    const { immersiveengineering: ie } = event.recipes

    ie.blast_furnace('iron_ingot', '#forge:raw_materials/iron', 'immersiveengineering:slag', 10 * 20)
    ie.alloy('create:andesite_alloy', 'andesite', Ingredient.of('#forge:nuggets/iron').or('#forge:nuggets/zinc'))

    event.custom({ "type": "immersiveengineering:cloche", "input": Ingredient.of('miners_delight:cave_carrot').toJson(), "render": { "type": "crop", "block": "miners_delight:cave_carrots" }, "results": [Item.of('miners_delight:cave_carrot', 2).toJson()], "soil": { "item": "minecraft:dirt" }, "time": 800 })

    event.replaceInput({ 'id': 'immersiveindustry:crucible/steel' }, 'calcite', 'kubejs:calcium_carbonate_dust')
})
