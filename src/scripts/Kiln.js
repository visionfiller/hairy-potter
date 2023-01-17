export const firePottery = (pottery, value) => {
   pottery.fired = true;
    if (value > 2200) {
        pottery.cracked = true
    }
    else if (value <= 2200) {
        pottery.cracked = false
    }
  
    return pottery
}