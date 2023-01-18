const potteryToBeSold = []

export const toSellOrNotToSell = (pottery) => {
if (pottery.cracked === false && pottery.weight < 6) {
         pottery.price = 20 
        potteryToBeSold.push(pottery)}

    else if (pottery.cracked === false && pottery.weight >= 6) {
            pottery.price = 40
        potteryToBeSold.push(pottery)}


return pottery
}


export const usePottery = () => {
    return potteryToBeSold
}