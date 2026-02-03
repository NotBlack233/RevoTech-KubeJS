ServerEvents.recipes(event => {
    const fd = {
        /**
         * 
         * @param {Internal.ItemStack[]} results 
         * @param {Internal.Ingredient[]} ingredients 
         * @param {Internal.Ingredient} tool 
         */
        cutting(results, ingredients, tool) {
            event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": RTUtils.itemArrayToJson(ingredients),
                "result": RTUtils.itemArrayToJson(results),
                "tool": tool.toJson()
            })
        }
    }
    fd.cutting([Item.of('kubejs:stone_plate')], [Ingredient.of('stone')], Ingredient.of('#forge:tools/pickaxes'))
})
