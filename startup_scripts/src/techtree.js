/**
 * @type {TechTreeType}
 */
const TechTree = {
    // Ancient Era
    mining: {
        points: 20,
        item: 'stone_plate',
        eureka: {
            flint: {
                items: [{item: 'minecraft:flint', count: 5}],
                points: 10,
                times: 0,
                total_times: -1
            },
            gravel: {
                items: [{item: 'minecraft:gravel', count: 10}],
                points: 10,
                times: 0,
                total_times: -1
            }
        }
    },
    ceramics: {
        points: 20,
        item: 'stone_plate',
        eureka: {
            clay: {
                items: [{item: 'minecraft:clay_ball', count: 16}],
                points: 10,
                times: 0,
                total_times: -1
            }
        }
    },
    sailing: {
        points: 20,
        item: 'stone_plate',
        eureka: {
            planks: {
                items: [{item: 'minecraft:oak_planks', count: 16}],
                ingredients: [{item: '#minecraft:planks', count: 16}],
                points: 10,
                times: 0,
                total_times: -1
            }
        }
    },
    shipbuilding: {
        points: 30,
        item: 'stone_plate',
        eureka: {
            wool: {
                items: [{item: 'minecraft:white_wool', count: 8}],
                points: 10,
                times: 0,
                total_times: 2
            },
            boat: {
                items: [{item: 'minecraft:oak_boat', count: 1}],
                ingredients: [{item: '#minecraft:boats', count: 1}],
                points: 5,
                times: 0,
                total_times: 1
            }
        }
    },
    animal_husbandry: {
        points: 20,
        item: 'stone_plate',
        eureka: {
            wool: {
                items: [{item: 'minecraft:white_wool', count: 3}],
                points: 10,
                times: 0,
                total_times: -1
            },
            leather: {
                items: [{item: 'minecraft:leather', count: 2}],
                points: 10,
                times: 0,
                total_times: -1
            }
        }
    },
    copper: {
        points: 35,
        item: 'stone_plate'
    },
    copper_alloy: {
        points: 40,
        item: 'stone_plate'
    },

    // Classical Era
    // Medieval~Renaissance Era
    steam_power: {
        points: 100,
        item: 'paper_stack',
        eureka: {
            metal: {
                items: [
                    {item: 'minecraft:copper_block', count: 8},
                    {item: 'minecraft:gold_ingot', count: 4}
                ],
                points: 30,
                times: 0,
                total_times: 1
            },
            blaze: {
                items: [{item: 'create:blaze_burner', count: 4}],
                points: 30,
                times: 0,
                total_times: 1
            }
        }
    }
    // Industrial~Modern Era
    // Atomic~Information Era
    // Future Era
}
global['TechTree'] = TechTree

StartupEvents.registry('item', event => {
    // event.create('stone_plate')
    // event.create('wood_slip')
    // event.create('paper_stack')
    // event.create('punch_tape').rarity('uncommon')
    // event.create('disk_drive').rarity('rare')
    // event.create('quantum_medium').rarity('epic')
    for (let stage in TechTree) {
        event.create(`${TechTree[stage].item}_${stage}`).texture(`kubejs:item/${TechTree[stage].item}`)
    }
})
