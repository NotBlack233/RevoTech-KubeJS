ServerEvents.recipes(event => {
    const mek = {
        /**
         * 
         * @param {Internal.ItemStack} output 
         * @param {Internal.Ingredient} input 
         * @returns 
         */
        enriching(output, input) {
            return event.custom({
                'type': 'mekanism:enriching',
                'input': input.toJson(),
                'output': output.toJson()
            })
        },

        /**
         * 
         * @param {Internal.ItemStack} item_output 
         * @param {GasStack} gas_output 
         * @param {Internal.Ingredient} item_input 
         * @param {Internal.FluidStackJS} fluid_input 
         * @param {GasStack} gas_input 
         * @param {number} duration 
         * @returns 
         */
        reaction(item_output, gas_output, item_input, fluid_input, gas_input, duration) {
            return event.custom({
                "type": "mekanism:reaction",
                "duration": duration,
                "fluidInput": fluid_input.toJson(),
                "gasInput": gas_input,
                "gasOutput": gas_output,
                "itemInput": item_input.toJson(),
                "itemOutput": item_output.toJson()
            })
        }
    }
    // advanced_ae.reaction('kubejs:quantum_medium', 1, 'i', Fluid.of('advanced_ae:quantum_infusion_source', 1000), [Ingredient.of('ae2:singularity')], 200000)
    mek.reaction(Item.of('kubejs:quantum_medium'), { 'amount': 1000, 'gas': 'mekanism:spent_nuclear_waste' }, Ingredient.of('ae2:singularity'), Fluid.of('advanced_ae:quantum_infusion_source', 1000), { 'amount': 1000, 'gas': 'mekanism:polonium' })

    event.custom({
        "type": "mekanism:reaction",
        "duration": 200,
        "fluidInput": {
            "amount": 1000,
            "tag": "advanced_ae:quantum_infusion"
        },
        "gasInput": {
            "amount": 1000,
            "gas": "mekanism:polonium"
        },
        "gasOutput": {
            "amount": 1000,
            "gas": "mekanism:spent_nuclear_waste"
        },
        "itemInput": {
            "ingredient": {"item": "ae2:singularity"}
        },
        "itemOutput": {
            "item": "kubejs:quantum_medium"
        }
    })
})