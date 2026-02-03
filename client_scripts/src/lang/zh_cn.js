/**
 * From https://docs2.mihono.cn/zh/modpack/kubejs/1.20.1/KubeJSCourse/Resources/Lang
 */
ClientEvents.lang('zh_cn', event => {
    /**
     * @type {[string, string][]}
     */
    let quests_research = [
        ['origin', '起点'],
        ['sailing', '航海术'],
        ['animal_husbandry', '畜牧业'],
        ['mining', '采矿业'],
        ['ceramics', '制陶术'],
        ['shipbuilding', '造船术'],
        ['sewing', '缝纫'],
        ['copper', '铸铜术'],
        ['copper_alloy', '铜合金'],
        ['dry_distillation', '干馏'],
        ['permanent_sponges', '永久海绵'],
        ['lava', '熔岩'],
        ['iron_working', '炼铁术'],
        ['magmatic_sponge', '熔岩海绵'],
        ['porcelains', '瓷器'],
        ['nether', '下界'],
        ['engineering', '工程'],
        ['navigation', '导航'],
        ['soulspring_lamp', '魂火灯'],
        ['blaze_burner', '烈焰人燃烧室'],
        ['brass', '黄铜'],
        ['mechanical_calc', '机械计算器'],
        ['steam_power', '蒸汽动力'],
        ['sturdy_sheet', '坚固板'],
        ['gunpowder', '火药'],
        ['bullets', '子弹'],
        ['excavation', '矿石开掘'],
        ['railways', '铁路'],
        ['steel', '钢'],
        ['compression', '压缩'],
        ['electricity', '电力'],
        ['refining', '精炼'],
        ['induction', '感应'],
        ['combustion', '燃烧'],
        ['plastics', '塑料'],
        ['oscillation', '振荡'],
        ['batteries', '蓄电池'],
        ['duroplast', '工程塑胶'],
        ['circuits', '电路'],
        ['amplification', '放大'],
        ['electromagnetics', '电磁学'],
        ['graphite', '石墨'],
        ['prototype_computer', '初代计算机'],
        ['semiconductor', '半导体'],
        ['arc', '电弧'],
        ['thermoelectric', '热电效应'],
        ['electronic_storage', '电子存储'],
        ['thermal_casing', '热力机壳'],
        ['decay', '衰变'],
        ['quantum', '量子'],
        ['machine_learning', '机器学习'],
        ['insulated', '绝缘'],
        ['modern_computers', '现代计算机'],
        ['quantum_learning', '量子学习'],
        ['solar_power', '太阳能'],
        ['nuclear_power', '核能'],
        ['quantum_computer', '量子计算机'],
        ['pipez', '进阶管道']
    ]

    let quests_research_map = new Map()

    let research_items = {
        'stone_plate': '石板',
        'wood_slip': '木简',
        'paper_stack': '纸堆',
        'punch_tape': '纸带',
        'disk_drive': '硬盘',
        'quantum_medium': '量子介质'
    }

    /**
     * @type {[Internal.Item_, string][]}
     */
    let items = [
        ['kubejs:bronze_axe', '青铜斧'],
        ['kubejs:bronze_hoe', '青铜锄'],
        ['kubejs:bronze_pickaxe', '青铜镐'],
        ['kubejs:bronze_shovel', '青铜锹'],
        ['kubejs:bronze_sword', '青铜剑'],
        ['kubejs:copper_axe', '铜斧'],
        ['kubejs:copper_hoe', '铜锄'],
        ['kubejs:copper_pickaxe', '铜镐'],
        ['kubejs:copper_shovel', '铜锹'],
        ['kubejs:copper_sword', '铜剑'],
        ['kubejs:flint_axe', '燧石斧'],
        ['kubejs:flint_pickaxe', '燧石镐'],
        ['kubejs:flint_shovel', '燧石锹'],
        ['kubejs:data', '数据'],
        ['kubejs:inspiration', '灵感'],
        ['kubejs:sodium_peroxide_dust', '过氧化钠粉'],
        ['kubejs:calcium_carbonate_dust', '碳酸钙粉'],
        ['kubejs:aqua_bun', '水馒头'],
        ['kubejs:stone_plate', '石板'],
        ['kubejs:wood_slip', '木简'],
        ['kubejs:paper_stack', '纸堆'],
        ['kubejs:punch_tape', '纸带'],
        ['kubejs:disk_drive', '硬盘'],
        ['kubejs:quantum_medium', '量子介质'],
        ['kubejs:incomplete_electron_tube', '电子管（半成品）'],
        ['kubejs:incomplete_paper', '纸（半成品）'],
        ['kubejs:elytra_piece', '鞘翅碎片']
    ]
    /**
     * @type {[Internal.Block_, string][]}
     */
    let blocks = [
        ['revotech:research_table', '研究台'],
        ['revotech:mechanical_calculator', '机械计算器'],
        ['revotech:prototype_computer', '初代计算机'],
        ['revotech:modern_computer', '现代计算机'],
        ['revotech:quantum_computer', '量子计算机']
    ]
    /**
     * @type {[Internal.Fluid_, string][]}
     */
    let fluids = [
        ['kubejs:data_fluid', '数据流体'],
        ['kubejs:inspiration_fluid', '灵感流体'],
        ['kubejs:molten_sodium', '熔融钠'],
        ['kubejs:sodium_hydroxide', '氢氧化钠'],
        ['kubejs:molten_aluminum', '熔融铝']
    ]

    quests_research.forEach(([key, text]) => {
        event.add(`title.quest.r.${key}`, text)
        quests_research_map.set(key, text)
    })

    for (let stage in TechTree) {
        event.add(`item.kubejs.${TechTree[stage].item}_${stage}`, `${research_items[TechTree[stage].item]} - ${quests_research_map.get(stage)}`)
    }

    items.forEach(([key, text]) => {
        let [modid, id] = key.split(':')
		event.add(`item.${modid}.${id}`, text)
	})
    blocks.forEach(([key, text]) => {
        let [modid, id] = key.split(':')
		event.add(`block.${modid}.${id}`, text)
	})
    fluids.forEach(([key, text]) => {
        let [modid, id] = key.split(':')
		event.add(`fluid.${modid}.${id}`, text)
		event.add(`block.${modid}.${id}`, text)
		event.add(`item.${modid}.${id}_bucket`, `${text}桶`)
	})
})