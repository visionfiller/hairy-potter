
let hairyPotterObject = 
{
     id: 1
}

export const makePottery = (shape, weight,height) => {

    
    {
        hairyPotterObject.Potteryshape = shape,
        hairyPotterObject.PotteryWeight = weight,
        hairyPotterObject.PotteryHeight = height,
        hairyPotterObject.id ++
    }
    return hairyPotterObject
}