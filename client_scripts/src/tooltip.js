ItemEvents.tooltip(event => {
    event.add('kubejs:flint_shovel', Text.translate('tooltip.kubejs.flint_shovel'))

    // Primal Tools
    for (let material of ['wooden', 'stone']) {
        for (let type of ['sword', 'axe', 'pickaxe', 'shovel', 'hoe']) {
            event.add(`minecraft:${material}_${type}`, Text.translate('tooltip.kubejs.primal_tools_disabled'))
        }
    }

    event.addAdvanced([
        /kubejs:stone_plate_*/,
        /kubejs:wood_slip_*/,
        /kubejs:paper_stack_*/,
        /kubejs:punch_tape_*/,
        /kubejs:disk_drive_*/,
        /kubejs:quantum_medium_*/,
    ], (item, _, text) => {
        if (item.nbt) {
            text.add(Text.translate('tooltip.kubejs.research.stage').append(Text.translate(`title.quest.r.${item.nbt.getString('stage')}`)))
            text.add(Text.translate('tooltip.kubejs.research.progress', item.nbt.getInt('progress'), item.nbt.getInt('total')))
            if (item.nbt.eureka) {
                let firstline = Text.translate('tooltip.kubejs.research.eureka')
                if (!event.shift)
                    firstline.append(Text.gold('[Shift]'))
                text.add(firstline)
                if (!event.shift)
                    return
                /**
                 * @type {{[id: string]: EurekaType}}
                 */
                let eurekas = item.nbt.eureka
                for (let id of Object.keys(eurekas)) {
                    let eureka = eurekas[id]
                    let times = eureka.times | 0
                    let completed = eureka.total_times == -1? false: times >= eureka.total_times
                    let comp = completed? Text.green('✔ '): Text.yellow('ℹ ')
                    for (let item of eureka.items) {
                        let [a, b] = item.item.split(':')
                        let modid = b? a: 'minecraft'
                        let id = b ?b : a
                        let prefix = Item.of(item.item).isBlock()? 'block': 'item'
                        comp.append(`${item.count}x `).append(Text.translate(`${prefix}.${modid}.${id}`)).append('; ')
                    }
                    comp.append(`+${eureka.points}; `)
                    if (eureka.total_times != -1)
                        comp.append(`(${times}/${eureka.total_times})`)
                    else
                        comp.append(Text.translate('tooltip.kubejs.research.infinite_times'))
                    text.add(comp)
                }

                // eurekas.forEach(eureka => {
                //     // Client.player.tell(eureka)
                //     let times = eureka.times | 0
                //     let completed = eureka.total_times == -1? false: times >= eureka.total_times
                //     let comp = completed? Text.green('✔ '): Text.yellow('ℹ ')
                //     for (let item of eureka.items) {
                //         let [a, b] = item.item.split(':')
                //         let modid = b? a: 'minecraft'
                //         let id = b ?b : a
                //         let prefix = Item.of(item.item).isBlock()? 'block': 'item'
                //         comp.append(`${item.count}x `).append(Text.translate(`${prefix}.${modid}.${id}`)).append('; ')
                //     }
                //     comp.append(`+${eureka.points}; `)
                //     if (eureka.total_times != -1)
                //         comp.append(`(${times}/${eureka.total_times})`)
                //     else
                //         comp.append(Text.translate('tooltip.kubejs.research.infinity_times'))
                //     text.add(comp)
                // })
            }
        }
        else {
            // text.add(Text.translate('tooltip.kubejs.research.error'))
            // We do nothing
        }
        
    })
})