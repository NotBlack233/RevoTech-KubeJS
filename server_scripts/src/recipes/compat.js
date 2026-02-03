ServerEvents.recipes(event => {
    event.replaceOutput('*', 'immersiveengineering:coke', 'thermal:coal_coke_block')
    event.replaceOutput('*', 'immersiveengineering:coal_coke', 'thermal:coal_coke')

    Color.DYE.forEach(c => event.replaceInput({output: `compressedcreativity:${c}_plastic_bracket`}, `pneumaticcraft:plastic_brick_${c}`, `mekanismadditions:${c}_plastic`))

    // Fix
    event.remove({id: 'sfms:tcg5ich'})
    event.recipes.minecraft.crafting_shapeless(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"sfms:tcg5"}'), Item.of('tacz:modern_kinetic_gun', '{GunId:"sfms:tcg5ich"}').weakNBT())
})