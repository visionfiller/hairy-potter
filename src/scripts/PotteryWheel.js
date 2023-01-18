
let hairyPotterObject = 
{
     id: 1
}

export const makePottery = (potteryShape, potteryWeight,potteryHeight) => {

    const newPottery = 
    {
        shape : potteryShape,
        weight : potteryWeight,
        height : potteryHeight,
        id : hairyPotterObject.id++
    }
    return newPottery
}