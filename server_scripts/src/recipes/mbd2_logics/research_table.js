let r_id = (stage, id) => `revotech:eureka/${stage}/${id}`
const TechPoints = {
    'revotech:eureka/mining/flint': 10,
    'revotech:eureka/mining/gravel': 10,
    'revotech:eureka/steam_power/metal': 30,
    'revotech:eureka/steam_power/blaze': 30
}

ServerEvents.recipes(event => {
    let research_material = stage => Ingredient.of(`kubejs:${TechTree[stage].item}_${stage}`)
    let input_material = stage => b => {b.chance(0, b_ => {b_.inputItems(research_material(stage))})}

    const {research_table} = event.recipes.revotech

    /**
     * 
     * @param {Internal.Ingredient_} items 
     * @param {string} stage 
     * @returns 
     */
    let research = (stage, items) => research_table()
        .inputItems(items)
        .uiName('research', b => b.slotName('research', input_material(stage)))
        .duration(20)
    
    // research('mining', '5x flint').id(r_id('mining', 'flint'))
    // research('mining', '10x #forge:gravel').id(r_id('mining', 'gravel'))

    // research('steam_power', ['8x #forge:storage_blocks/copper', '4x gold_ingot']).id(r_id('steam_power', 'metal'))
    // research('steam_power', '4x create:blaze_burner').id(r_id('steam_power', 'blaze'))

    for (const tech_name in TechTree) {
        let tech = TechTree[tech_name]
        for (const eureka_name in tech.eureka) {
            let eureka = tech.eureka[eureka_name]
            let items = []
            let raw_items = eureka.ingredients? eureka.ingredients: eureka.items
            for (const item of raw_items) {
                items.push(Ingredient.of(item.item, item.count))
            }
            research(tech_name, items).id(r_id(tech_name, eureka_name))
        }
    }
    
})

MBDMachineEvents.onBeforeRecipeWorking('revotech:research_table', e_ => {
    const {event} = e_
    let id = event.recipe.id.toString()
    let separated = id.split('/')
    let eurekaId = separated[separated.length - 1]
    /**
     * @type {Internal.ItemStack}
     */
    let stack = event.machine.getTraitByName('research').storage.getStackInSlot(0)
    if (
        stack.nbt.progress >= stack.nbt.total || 
        (stack.nbt.eureka[eurekaId].times >= stack.nbt.eureka[eurekaId].total_times && stack.nbt.eureka[eurekaId].total_times != -1)
    )
        event.setCanceled(true)
})

MBDMachineEvents.onRecipeFinish('revotech:research_table', e_ => {
    const {event} = e_
    let id = event.recipe.id.toString()
    let separated = id.split('/')
    let eurekaId = separated[separated.length - 1]
    let stageId = separated[separated.length - 2]
    let points = TechTree[stageId].eureka[eurekaId].points
    /**
     * @type {Internal.ItemStack}
     */
    let stack = event.machine.getTraitByName('research').storage.getStackInSlot(0)
    let progress = stack.nbt.getInt('progress')
    if (progress + points > stack.nbt.getInt('total'))
        stack.nbt.putInt('progress', stack.nbt.getInt('total'))
    else
        stack.nbt.putInt('progress', progress + points)
    stack.nbt.eureka[eurekaId].times++
})
