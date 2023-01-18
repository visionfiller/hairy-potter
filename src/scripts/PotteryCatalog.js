const potteryToBeSold = []

export const toSellOrNotToSell = (pottery) => {
if (pottery.cracked === false && pottery.PotteryWeight >= 6) {
        pottery.price = 40
        potteryToBeSold.push(pottery)
    }

    else if (pottery.cracked === false && pottery.PotteryWeight < 6) {
        pottery.price = 20
        potteryToBeSold.push(pottery)
}

return potteryToBeSold
}


export const usePottery = () => {
    return potteryToBeSold
}