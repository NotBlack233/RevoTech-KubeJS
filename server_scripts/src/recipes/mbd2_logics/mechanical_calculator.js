ServerEvents.recipes(event => {
    let perTickStress = stress => b => b.inputStress(stress)
    const {mechanical_calculator: mech_calc} = event.recipes.revotech
    mech_calc().perTick(perTickStress(1024)).duration(4*20).conditions()
})

MBDMachineEvents.onBeforeRecipeModify('revotech:mechanical_calculator', e_ => {
    const {event} = e_
    const {machine, recipe} = event
    let speed = machine.getTraitByName('!create_stress').lastSpeed
    let speedFactor = 32 / speed
    let copyRecipe = recipe.copy()
    copyRecipe.duration = Math.ceil(recipe.duration * speedFactor)
    event.setRecipe(copyRecipe)
})

MBDMachineEvents.onBeforeRecipeWorking('revotech:mechanical_calculator', e_ => {
    const {event} = e_
    /**
     * @type {Internal.ItemStack}
     */
    let stack = event.machine.getTraitByName('research').storage.getStackInSlot(0)
    if (RTUtils.validResearchStack(stack)) {
        
    }
    else event.setCanceled(true)
})

MBDMachineEvents.onRecipeFinish('revotech:mechanical_calculator', e_ => {
    const {event} = e_
    let stack = event.machine.getTraitByName('research').storage.getStackInSlot(0)
    if (stack && stack.nbt)
        stack.nbt.progress++
})