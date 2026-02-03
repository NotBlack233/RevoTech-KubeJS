ServerEvents.recipes(event => {
    const {stonecutting} = event.recipes.minecraft
    stonecutting('4x kubejs:stone_plate', 'stone')
})