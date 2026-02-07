ServerEvents.recipes(event => {
    /**
     * e.g. `taczCrafting(['diamond'], {'count': 1, 'type': 'ammo', 'id': 'tacz:12g'})`
     * @param {Internal.ItemStack_[]} materials 
     * @param {GunSmithResult} result 
     */
    function taczCrafting(materials, result) {
        event.custom({
            "materials": materials,
            "result": result,
            "type": "tacz:gun_smith_table_crafting"
        })
    }
})