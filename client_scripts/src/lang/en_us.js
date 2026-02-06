/**
 * From https://docs2.mihono.cn/zh/modpack/kubejs/1.20.1/KubeJSCourse/Resources/Lang
 */
ClientEvents.lang('zh_cn', event => {
    /**
     * @type {[string, string][]}
     */
    let quests_research = [
        // TODO: English translate
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
        'stone_plate': 'Stone Plate',
        'wood_slip': 'Wood Slip',
        'paper_stack': 'Paper Stack',
        'punch_tape': 'Punch Tape',
        'disk_drive': 'Disk Drive',
        'quantum_medium': 'Quantum Medium'
    }

    /**
     * @type {[Internal.Item_, string][]}
     */
    let items = [
        ['scguns:stone_gun_barrel', 'Iron Gun Barrel']
    ]
    /**
     * @type {[Internal.Block_, string][]}
     */
    let blocks = [
        ['revotech:research_table', 'Research Table'],
        ['revotech:mechanical_calculator', 'Mechanical Calculator'],
        ['revotech:prototype_computer', 'Prototype Computer'],
        ['revotech:modern_computer', 'Modern Computer'],
        ['revotech:quantum_computer', 'Quantum Computer']
    ]
    /**
     * @type {[Internal.Fluid_, string][]}
     */
    let fluids = [
    ]

    // TODO: English translate
    // quests_research.forEach(([key, text]) => {
    //     event.add(`title.quest.r.${key}`, text)
    //     quests_research_map.set(key, text)
    // })

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
		event.add(`item.${modid}.${id}_bucket`, `${text} Bucket`)
	})
})