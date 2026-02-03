ServerEvents.tags('item', event => {
    // Research Items
    let research_items = [
        // 'kubejs:stone_plate',
        /kubejs:wood_slip_*/,
        /kubejs:paper_stack_*/,
        /kubejs:punch_tape_*/,
        /kubejs:disk_drive_*/,
        /kubejs:quantum_medium_*/
    ]
    for (let stack of Ingredient.of(/kubejs:stone_plate_*/).stacks)
        event.add('revotech:research_capable/t0', stack.id)
    for (let i = 0; i < research_items.length; i++) {
        event.add(`revotech:research_capable/t${i+1}`, `#revotech:research_capable/t${i}`)
        for (let stack of Ingredient.of(research_items[i]).stacks)
            event.add(`revotech:research_capable/t${i+1}`, stack.id)
    }

    let dusts = [
        'sodium_peroxide',
        'calcium_carbonate',
        'calcium_oxide'
    ]
    for (let dust of dusts) {
        event.add(`forge:dusts/${dust}`, `kubejs:${dust}_dust`)
        event.add('forge:dusts', `#forge:dusts/${dust}`)
    }

    event.add('revotech:caco3_rocks', '#create:stone_types/calcite', '#create:stone_types/limestone', '#create:stone_types/dripstone')
    event.add('create:pulpifiable', '#forge:sawdust')
    event.add('create:upright_on_belt', 'kubejs:inspiration', 'kubejs:inspiration_fluid_bucket')
})
