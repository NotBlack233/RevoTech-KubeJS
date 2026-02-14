ServerEvents.recipes(event => {
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
