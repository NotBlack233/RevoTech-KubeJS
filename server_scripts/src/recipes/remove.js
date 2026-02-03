ServerEvents.recipes(event => {
    /**
     * 
     * @param {Special.RecipeId} id 
     */
    let removeById = id => event.remove({'id': id})

    // Primal Tools
    for (let material of ['wooden', 'stone']) {
        for (let type of ['sword', 'axe', 'pickaxe', 'shovel', 'hoe']) {
            removeById(`minecraft:${material}_${type}`)
        }
    }
    event.remove({output: '#pneumaticcraft:plastic_bricks'})
    event.remove({output: '#pneumaticcraft:smooth_plastic_bricks'})
    removeById(/immersiveengineering:blastfurnace\/steel*/)
    removeById('immersiveengineering:crafting/blastbrick')
    removeById('tacz:gun_smith_table')
    removeById('create:sequenced_assembly/sturdy_sheet')
    removeById('create:sequenced_assembly/precision_mechanism')
    removeById('minecraft:fishing_rod')
    removeById('create:mixing/cardboard_pulp')
    removeById('createdieselgenerators:bulk_fermenting/pulp')
    removeById(/create:mixing\/andesite_alloy*/)
    removeById('create:crafting/materials/andesite_alloy')
    removeById('create:crafting/materials/andesite_alloy_from_zinc')
    removeById('create:crafting/kinetics/mechanical_saw')
    removeById('immersiveengineering:alloysmelter/brass')
    removeById('create:crafting/materials/electron_tube')
    removeById('create_connected:sequenced_assembly/control_chip')
    removeById('createaddition:mechanical_crafting/electric_motor')
    removeById('createaddition:mechanical_crafting/alternator')
    removeById('create_new_age:shaped/generator_coil')
    removeById('create_new_age:shaped/carbon_brushes')
    removeById('minecraft:paper')
    removeById('mekanism:paper')
    removeById('immersiveengineering:crafting/paper_from_sawdust')
    removeById('farmersdelight:paper_from_tree_bark')
    removeById('thermal_extra:sticky_ball_to_paper')
    removeById('create:pressing/sugar_cane')
    removeById('scguns:pebbles_from_gravel')
    event.remove({'type': 'ad_astra:alloying'})
})
