const RTUtils = {
    tellplayer(msg) {
        Utils.server.players.get(0).tell(msg)
    },
    /**
     * 
     * @param {Internal.ItemStack[] | Internal.Ingredient[]} arr 
     */
    itemArrayToJson(arr) {
        let res = []
        arr.forEach(i => res.push(i.toJson()))
        return res
    },

    /**
     * 
     * @param {Internal.ItemStack} stack 
     */
    validResearchStack(stack) {
        // /**
        //  * @type {Internal.ItemStack_[]}
        //  */
        // let ids = [
        //     'kubejs:stone_plate',
        //     'kubejs:wood_slip',
        //     'kubejs:paper_stack',
        //     'kubejs:punch_tape',
        //     'kubejs:disk_drive',
        //     'kubejs:quantum_medium'
        // ]
        if (!stack.nbt || !stack.nbt.total)
            return false
        if (!stack.nbt.progress)
            return true
        else
            return stack.nbt.getInt('progress') < stack.nbt.getInt('total')
    },

    /**
     * 
     * @param {string} stage 
     */
    researchStack: stage => Item.of(`kubejs:${TechTree[stage].item}_${stage}`).withNBT({
        'stage': stage,
        'progress': 0,
        'total': TechTree[stage].points,
        'eureka': TechTree[stage].eureka
    })
}
 