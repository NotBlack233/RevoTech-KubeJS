ServerEvents.recipes(event => {
    let smithing = event.recipes.minecraft.smithing_transform

    // TODO
    /**
     * 
     * @param {Internal.Enchantment_} ench 
     * @param {number} level
     * @param {Internal.Item_} addition 
     * @returns 
     */
    let inspiration_enchanting = (ench, level, addition) => smithing(Item.of('enchanted_book', 1, {StoredEnchantments:[{id:ench,lvl:level}]}), 'kubejs:inspiration', 'book', addition)

    inspiration_enchanting('efficiency', 4, 'golden_pickaxe')
    inspiration_enchanting('unbreaking', 2, 'create:sturdy_sheet')
    inspiration_enchanting('fortune', 2, 'lapis_block')
    inspiration_enchanting('silk_touch', 1, 'thermal:beekeeper_fabric')
    inspiration_enchanting('mending', 1, 'create_enchantment_industry:hyper_experience_bottle')
    inspiration_enchanting('sharpness', 4, 'iron_sword')
    inspiration_enchanting('smite', 4, '#forge:storage_blocks/silver')
    inspiration_enchanting('bane_of_arthropods', 4, 'spider_eye')
    inspiration_enchanting('aqua_affinity', 1, 'prismarine_crystals')
    inspiration_enchanting('respiration', 2, 'prismarine_shard')
    inspiration_enchanting('protection', 3, 'iron_block')
    inspiration_enchanting('feather_falling', 3, 'feather')
    inspiration_enchanting('farmersdelight:backstabbing', 4, 'ends_delight:dragon_tooth_knife')
})
