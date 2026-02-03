ServerEvents.commandRegistry(event => {
    const {commands, arguments} = event
    event.register(commands.literal('research_stack').requires(c => c.hasPermission(2)).then(
        commands.argument('stage', arguments.STRING.create(event))
            .suggests((c, builder) => {
                let hasStage = true
                let stage = ''
                try {
                    stage = arguments.STRING.getResult(c, 'stage')
                } catch(e) {
                    hasStage = false
                }
                for (let s of KNOWN_STAGES) {
                    if (!hasStage || s.startsWith(arguments.STRING.getResult(c, 'stage')))
                        builder.suggest(s)
                }
                return builder.buildFuture()
            })
            .executes(c => {
                if (!c.source.isPlayer()) return 0
                let stage = arguments.STRING.getResult(c, 'stage')
                let item = RTUtils.researchStack(stage)
                c.source.player.give(item)
                return 1
            })
    ))
})
