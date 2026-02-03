ServerEvents.tags('item', event => {
    /**
     * 
     * @param {string} mod 
     * @param {string} material 
     * @param {string} types 
     * @returns {string[]}
     */
    function series_gen(mod, material, types) {
        let res = []
        for (let type of types) {
            res.push(`${mod}:${material}_${type}`)
        }
        return res
    }
    let tools_gen = (mod, material) => series_gen(mod, material, ['sword', 'axe', 'pickaxe', 'shovel', 'hoe'])
    let armors_gen = (mod, material) => series_gen(mod, material, ['helmet', 'chestplate', 'leggings', 'boots'])
    function metal_gen(metal) {
        const TYPES = [
            'storage_blocks',
            'ingots',
            'nuggets',
            'dusts',
            'gears',
            'plates',
            'coins',
            'rods',
        ]
        let res = []
        for (let type of TYPES) {
            res.push(`#forge:${type}/${metal}`)
        }
        return res
    }
    /**
     * @type {{[tag: string]: Internal.Ingredient_[]}}
     */
    const tags = {
        'disabled': (() => {
            /**
             * @type {Internal.Ingredient_[]}
             */
            let tmp = [
                '#pneumaticcraft:plastic_bricks',
                '#pneumaticcraft:smooth_plastic_bricks'
            ]
            return tmp.concat(tools_gen('minecraft', 'wooden'), tools_gen('minecraft', 'stone'))
        })(),
        'copper': (() => {
            let tmp = tools_gen('kubejs', 'copper').concat(metal_gen('copper'))
            tmp.push('#forge:ingots/copper')
            return tmp
        })(),
        'bronze': (() => {
            let tmp = tools_gen('kubejs', 'bronze')
            tmp.push('#forge:ingots/bronze')
            return tmp
        })(),
        'iron': (() => {
            let tmp = tools_gen('minecraft', 'iron')
            tmp.push('#forge:ingots/iron')
            return tmp
        })(),
        'ceramics': (() => {
            /**
             * @type {Internal.Ingredient_}
             */
            let tmp = [
                '#minecraft:terracotta',
                'brick',
                'bricks',
                'brick_slab',
                'brick_stairs',
                'brick_wall'
            ]
            Color.DYE.forEach(color => tmp.push(`minecraft:${color}_glazed_terracotta`))
            return tmp
        })(),
        'dry_distillation': (() => {
            /**
             * @type {Internal.Ingredient_}
             */
            let tmp = [
                '#forge:coal_coke',
                '#forge:storage_blocks/coal_coke',
                'immersiveengineering:cokebrick',
                'immersiveengineering:slab_coke',
                'immersiveengineering:slab_cokebrick'
            ]
            return tmp
        })(),
        'copper_alloy': (() => {
            /**
             * @type {Internal.Ingredient_}
             */
            let tmp = [
                
            ]
            return tmp.concat(metal_gen('bronze'), metal_gen('constantan'), metal_gen('brass'))
        })(),
        'sewing': (() => {
            const MODID = 'cold_sweat'
            /**
             * @type {Internal.Ingredient_}
             */
            let tmp = [
                'cold_sweat:waterskin',
                'cold_sweat:filled_waterskin',
                'cold_sweat:minecart_insulation',
                'cold_sweat:insulated_minecart',
                'cold_sweat:sewing_table'
            ]
            return tmp.concat(armors_gen(MODID, 'hoglin'), armors_gen(MODID, 'goat_fur'), armors_gen(MODID, 'chameleon'), armors_gen('minecraft', 'leather'))
        })(),
        'permanent_sponges': ['permanentsponges:aqueous_sponge', 'permanentsponges:aqueous_sponge_on_a_stick'],
        'magmatic_sponge': ['permanentsponges:magmatic_sponge', 'permanentsponges:magmatic_sponge_on_a_stick'],
        'lava': metal_gen('obsidian'),
        'iron_working': (() => {
            /**
             * @type {Internal.Ingredient_}
             */
            let tmp = [
                'iron_bars',
                'iron_door',
                'iron_trapdoor'
            ]
            return tmp.concat(metal_gen('iron'), armors_gen('minecraft', 'iron'), tools_gen('minecraft', 'iron'))
        })(),
        'navigation': [
            '#minecraft:compasses',
            'ae2:meteorite_compass',
            'map',
            'filled_map',
            'supplementaries:slice_map'
        ],
        'nether': [
            'netherrack',
            'nether_brick',
            'nether_bricks',
            'nether_brick_fence',
            'nether_brick_slab',
            'nether_brick_stairs',
            'nether_brick_wall',
            'quartz',
            '#c:quartz_blocks'
        ],
        'porcelains': [
            '#ceramics:porcelain_block',
            '#ceramics:porcelain_cisterns',
            'ceramics:porcelain_brick',
            'ceramics:porcelain_bricks',
            'ceramics:porcelain_bricks_slab',
            'ceramics:porcelain_bricks_stairs',
            'ceramics:porcelain_bricks_wall',
            'ceramics:porcelain_channel',
            'ceramics:porcelain_faucet',
            'ceramics:porcelain_gauge',
            'ceramics:unfired_channel',
            'ceramics:unfired_cistern',
            'ceramics:unfired_faucet',
            'ceramics:unfired_porcelain_block',
            'ceramics:unfired_porcelain'
        ],
        'soulspring_lamp': [
            'cold_sweat:soulspring_lamp',
            'cold_sweat:soul_sprout'
        ],
        'blaze_burner': [
            'create:empty_blaze_burner',
            'create:blaze_burner',
            'createaddition:straw',
            'createdieselgenerators:burner'
        ],
        'brass': (() => {
            /**
             * @type {Internal.Ingredient_}
             */
            let tmp = [
                'compressedcreativity:brass_gilded_lapis_lazuli',
                'compressedcreativity:brass_coated_upgrade_matrix',
                'create:brass_bars',
                'create:brass_casing',
                'create:brass_door',
                'create:brass_funnel',
                'create:brass_hand',
                'create:brass_ladder',
                'create:brass_scaffolding',
                'create:brass_table_cloth',
                'create:brass_tunnel',
                'create_connected:brass_gearbox',
                'create_connected:vertical_brass_gearbox',
                'create:rotation_speed_controller'
            ]
            return tmp.concat(metal_gen('brass'))
        })(),
        'sailing': ['#minecraft:boats']
    }
    Object.keys(tags).forEach(tag => {
        for (let i of tags[tag])
            event.add(`stage:${tag}`, i)
    })
})
