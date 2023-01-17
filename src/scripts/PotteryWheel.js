
let hairyPotterObject = 
{
     id: 1
}

export const makePottery = (shape, weight,height) => {

    const newPottery = 
    {
        Potteryshape : shape,
        PotteryWeight : weight,
        PotteryHeight : height,
        PotteryID : hairyPotterObject.id++
    }
    return newPottery
}