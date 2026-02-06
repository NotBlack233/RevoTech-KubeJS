ServerEvents.recipes(event => {
    let shaped = event.recipes.minecraft.crafting_shaped
    let shapeless = event.recipes.minecraft.crafting_shapeless

    // Tools
    let materials = ['bronze', 'copper']
    let types = ['sword', 'axe', 'pickaxe', 'shovel', 'hoe']
    let patterns = {
        'sword': [' M ', ' M ', ' S '],
        'axe': ['MM ', 'MS ', ' S '],
        'pickaxe': ['MMM', ' S ', ' S '],
        'shovel': [' M ', ' S ', ' S '],
        'hoe': ['MM ', ' S ', ' S ']
    }
    for (let material of materials) {
        for (let type of types) {
            shaped(`kubejs:${material}_${type}`, patterns[type], {'M': `#forge:ingots/${material}`, 'S': 'stick'})
        }
    }

    // Special: Flint
    for (let type of ['axe', 'pickaxe', 'shovel']) {
        shaped(`kubejs:flint_${type}`, patterns[type], {'M': 'flint', 'S': 'stick'})
    }

    shaped('3x immersiveengineering:blastbrick', ['CSC', 'SBS', 'CSC'], {C: 'clay_ball', S: 'copper_ingot', B: 'bricks'})
    shaped('elytra', ['MNM', 'MIM', 'M M'], {M: 'phantom_membrane', I: 'kubejs:inspiration', N: 'netherite_ingot'})
    shaped('elytra', ['MNM', 'MIM', 'M M'], {M: 'phantom_membrane', I: 'kubejs:elytra_piece', N: 'netherite_ingot'})
    shaped('permanentsponges:magmatic_sponge_on_a_stick', [' C ', 'CSC', ' C '], {
        'C': 'magma_cream',
        'S': 'permanentsponges:aqueous_sponge_on_a_stick'
    })
    shaped('fishing_rod', ['  S', ' ST', 'SIT'], {S: '#forge:rods/wooden', T: '#forge:string', I: '#forge:nuggets/iron'})
    shaped('create:mechanical_saw', [' S ', ' B ', ' M '], {S: 'create:shaft', B: 'thermal:saw_blade', M: 'create:andesite_casing'})
    shaped('create_new_age:generator_coil', ['SSS', 'SBS', 'SSS'], {S: 'immersiveengineering:wirecoil_copper', B: '#forge:storage_blocks/steel'})
    shaped('create_new_age:carbon_brushes', ['ASA', 'CHC', 'ASA'], {A: 'create:andesite_alloy', S: '#forge:ingots/steel', C: '#forge:coal_coke', H: 'create:shaft'})
    shaped('revotech:research_table', ['FF', 'PP'], {F: 'flint', P: '#minecraft:planks'})
    shaped('6x scguns:pebbles', ['LLL', 'LLL'], {L: '#forge:nuggets/lead'})
    shaped('kubejs:wood_slip', ['WSW', 'WSW'], {W: '#minecraft:planks', S: Ingredient.of('#forge:string').or('farmersdelight:straw').or('immersiveengineering:hemp_fiber')})
    shaped('kubejs:paper_stack', ['PPP'], {P: 'paper'})

    shapeless('kubejs:aqua_bun', ['#forge:dough', 'kubejs:inspiration'])
    shapeless('supplementaries:antique_ink', ['glass_bottle', 'ink_sac', '#forge:feathers'])
    shapeless('create:blaze_burner', ['create:empty_blaze_burner', Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:blaze"}}').weakNBT()])
    shapeless('6x gunpowder', ['2x #forge:dusts/sulfur', '#forge:dusts/niter', '3x #forge:charcoal', 'sugar'])

    // Modify
    event.replaceInput({'id': 'tiab:time_in_a_bottle'}, 'glass_bottle', 'kubejs:inspiration')
    event.replaceInput({'id': 'permanentsponges:magmatic_sponge'}, 'white_wool', 'permanentsponges:aqueous_sponge')
    event.replaceInput({'id': 'thermal:saw_blade'}, 'iron_ingot', '#forge:plates/iron')
    event.replaceInput('*', 'create:electron_tube', 'immersiveengineering:electron_tube')
    event.replaceInput({'id': 'scguns:powder_and_ball'}, 'paper', Ingredient.of('paper').or('farmersdelight:canvas'))
    event.replaceInput({'id': 'scguns:stone_gun_barrel'}, 'stone', 'iron_ingot')
    let alternatives = {'wooden': 'copper', 'stone': 'bronze'}
    for (let material in alternatives) {
        for (let type of types) {
            event.replaceInput('*', `minecraft:${material}_${type}`, `kubejs:${alternatives[material]}_${type}`)
        }
    }
})
