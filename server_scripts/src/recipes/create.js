ServerEvents.recipes(event => {
    const {create: c, createoreexcavation: coe} = event.recipes
    
    c.filling(['kubejs:inspiration'], ['glass_bottle', Fluid.of('kubejs:inspiration_fluid', 10)])
    c.emptying(['glass_bottle', Fluid.of('kubejs:inspiration_fluid', 10)], ['kubejs:inspiration'])
    c.cutting(['kubejs:punch_tape'], ['create:cardboard'])

    c.mixing('kubejs:sodium_peroxide', [Fluid.of('kubejs:molten_sodium', 100), Fluid.of('ad_astra:oxygen', 50)])
    c.mixing(['create:pulp'], ['4x #create:pulpifiable', Fluid.of('kubejs:sodium_hydroxide', 250)])
    c.mixing(['create:pulp'], ['4x #create:pulpifiable', Fluid.water(500), 'kubejs:calcium_oxide_dust'])
    c.mixing(['create:andesite_alloy'], ['andesite', Ingredient.of('#forge:nuggets/iron').or('#forge:nuggets/zinc')]).heated()
    c.mixing(Fluid.of('kubejs:inspiration_fluid', 10), [Fluid.of('create_enchantment_industry:hyper_experience', 10), '4x amethyst_shard', '2x thermal_extra:ancient_dust']).superheated()
    c.milling(['8x createdieselgenerators:asphalt_block'], ['2x #forge:sand', '2x gravel', 'thermal:bitumen'])
    c.crushing([Item.of('kubejs:calcium_carbonate_dust', 2), Item.of('kubejs:calcium_carbonate_dust', 2).withChance(0.5)], ['#revotech:caco3_rocks'])
    c.crushing(['2x kubejs:elytra_piece', Item.of('kubejs:elytra_piece').withChance(0.1)], 'elytra')

    c.sequenced_assembly(['create:precision_mechanism'], '#forge:plates/brass', [
        c.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
        c.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
        c.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/brass'])
    ], 'create:incomplete_precision_mechanism', 5)
    c.sequenced_assembly(['immersiveengineering:electron_tube'], '#forge:plates/nickel', [
        c.deploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', 'redstone']),
        c.deploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', '#forge:wires/copper']),
        c.deploying('kubejs:incomplete_electron_tube', ['kubejs:incomplete_electron_tube', 'glass'])
    ], 'kubejs:incomplete_electron_tube', 1)
    c.sequenced_assembly(['4x paper'], 'create:pulp', [
        c.filling('kubejs:incomplete_paper', ['kubejs:incomplete_paper', Fluid.water(500)]),
        c.cutting('kubejs:incomplete_paper', 'kubejs:incomplete_paper'),
        c.pressing('kubejs:incomplete_paper', 'kubejs:incomplete_paper')
    ], 'kubejs:incomplete_paper', 1)
})
