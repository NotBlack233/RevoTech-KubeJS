ItemEvents.toolTierRegistry(event => {
    event.add('flint', t => {
        t.uses = 40
        t.level = 0
        t.speed = 3
        t.enchantmentValue = 5
        t.attackDamageBonus = 0.5
        t.repairIngredient = 'flint'
    })
    event.add('copper', t => {
        t.uses = 90
        t.level = 1
        t.speed = 4
        t.enchantmentValue = 10
        t.attackDamageBonus = 1
        t.repairIngredient = '#forge:ingots/copper'
    })
    event.add('bronze', t => {
        t.uses = 250
        t.level = 1
        t.speed = 5
        t.enchantmentValue = 12
        t.attackDamageBonus = 1.5
        t.repairIngredient = '#forge:ingots/bronze'
    })
})

StartupEvents.registry('item', event => {
    event.create('aqua_bun').rarity('epic').food(food => {
        food.alwaysEdible()
            .hunger(6)
            .saturation(2)
            .effect('farmersdelight:nourishment', 60*20, 0, 1)
            .effect('farmersdelight:comfort', 60*20, 0, 1)
            .effect('speed', 60*20, 0, 1)
            .effect('haste', 60*20, 0, 1)
    })
    // event.create('data').rarity('uncommon')
    event.create('inspiration').rarity('rare')
    event.create('sodium_peroxide_dust')
    event.create('calcium_carbonate_dust')
    event.create('calcium_oxide_dust')
    event.create('elytra_piece').rarity('uncommon')
    event.create('incomplete_electron_tube', 'create:sequenced_assembly')
    event.create('incomplete_paper', 'create:sequenced_assembly')
    // Tools
    event.create('flint_axe', 'axe').tier('flint')
    event.create('flint_pickaxe', 'pickaxe').tier('flint')
    event.create('flint_shovel', 'shovel').tier('flint')
    event.create('copper_sword', 'sword').tier('copper')
    event.create('copper_axe', 'axe').tier('copper')
    event.create('copper_pickaxe', 'pickaxe').tier('copper')
    event.create('copper_shovel', 'shovel').tier('copper')
    event.create('copper_hoe', 'hoe').tier('copper')
    event.create('bronze_sword', 'sword').tier('bronze')
    event.create('bronze_axe', 'axe').tier('bronze').speed(1)
    event.create('bronze_pickaxe', 'pickaxe').tier('bronze')
    event.create('bronze_shovel', 'shovel').tier('bronze')
    event.create('bronze_hoe', 'hoe').tier('bronze')
    
    // Research Materials
    event.create('stone_plate')
    event.create('wood_slip')
    event.create('paper_stack')
    event.create('punch_tape').rarity('uncommon')
    event.create('disk_drive').rarity('rare')
    event.create('quantum_medium').rarity('epic')
})
