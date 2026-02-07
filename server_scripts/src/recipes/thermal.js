ServerEvents.recipes(event => {
    const { thermal: t } = event.recipes
    const t_extra = {
        /**
         * 
         * @param {Internal.ItemStack[]} outputs 
         * @param {Internal.Ingredient[]} inputs 
         * @param {number} energy 
         * @returns 
         */
        component_assembly(outputs, inputs, energy) {
            return event.custom({
                "type": "thermal_extra:component_assembly",
                "energy": energy,
                "ingredients": RTUtils.itemArrayToJson(inputs),
                "result": RTUtils.itemArrayToJson(outputs)
            })
        }
    }
    t.pulverizer(['2x kubejs:elytra_piece', Item.of('kubejs:elytra_piece').withChance(0.3)], 'elytra', 0, 20000)

    t.insolator([Item.of('miners_delight:cave_carrot').withChance(2.5)], ['miners_delight:cave_carrot'])

    t.rock_gen('create:scoria', 'air', 'create:chocolate')
    t.rock_gen('create:scorchia', 'magma_block', 'create:chocolate')
    
    t_extra.component_assembly([Item.of('kubejs:disk_drive')], [Ingredient.of('ae2:item_cell_housing'), Ingredient.of('ae2:cell_component_4k'), Fluid.of('thermal:redstone', 250)], 20000)
})