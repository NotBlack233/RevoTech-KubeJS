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
            fences: {
                items: [{item: 'minecraft:oak_fence', count: 6}],
                ingredients: [{item: '#minecraft:fences', count: 6}],
                points: 5,
                times: 0,
                total_times: 3
            },
            beef: {
                items: [{item: 'minecraft:beef', count: 1}],
                points: 5,
                times: 0,
                total_times: -1
            },
            pork: {
                items: [{item: 'minecraft:porkchop', count: 1}],
                points: 5,
                times: 0,
                total_times: -1
            },
            mutton: {
                items: [{item: 'minecraft:mutton', count: 1}],
                points: 5,
                times: 0,
                total_times: -1
            },
            chicken: {
                items: [{item: 'minecraft:chicken', count: 1}],
                points: 5,
                times: 0,
                total_times: -1
            }
        }
    },
    copper: {
        points: 35,
        item: 'stone_plate',
        eureka: {
            raw_copper: {
                items: [{item: 'minecraft:raw_copper', count: 1}],
                points: 5,
                times: 0,
                total_times: -1
            },
            cobblestone: {
                items: [{item: 'minecraft:cobblestone', count: 32}],
                points: 5,
                times: 0,
                total_times: 2
            }
        }
    },
    copper_alloy: {
        points: 40,
        item: 'stone_plate',
        eureka: {
            copper_tin: {
                items: [{item: 'minecraft:copper_ingot', count: 3}, {item: 'thermal:tin_ingot', count: 1}],
                points: 10,
                times: 0,
                total_times: -1
            },
            ceramics: {
                items: [{item: 'minecraft:brick', count: 16}, {item: 'minecraft:sandstone', count: 16}],
                points: 10,
                times: 0,
                total_times: 2
            }
        }
    },
    dry_distillation: {
        points: 40,
        item: 'stone_plate',
        eureka: {
            coal: {
                items: [{item: 'minecraft:coal', count: 8}],
                points: 10,
                times: 0,
                total_times: -1
            },
            charcoal: {
                items: [{item: 'minecraft:charcoal', count: 12}],
                points: 10,
                times: 0,
                total_times: 2
            }
        }
    },
    sewing: {
        item: 'stone_plate',
        points: 40,
        eureka: {
            wool: {
                items: [{item: 'minecraft:white_wool', count: 3}],
                ingredients: [{item: '#minecraft:wool', count: 3}],
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

    // Classical Era
    iron_working: {
        points: 50,
        item: 'wood_slip',
        eureka: {
            raw_iron: {
                items: [{item: 'minecraft:raw_iron', count: 1}],
                points: 10,
                times: 0,
                total_times: -1
            },
            coke: {
                items: [{item: 'thermal:coal_coke', count: 1}],
                points: 5,
                times: 0,
                total_times: 4
            }
        }
    },

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

// Make sure we can access `TechTree` from client and server scripts
global['TechTree'] = TechTree

StartupEvents.registry('item', event => {
    for (let stage in TechTree) {
        event.create(`${TechTree[stage].item}_${stage}`).texture(`kubejs:item/${TechTree[stage].item}`)
    }
})
