// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let newMug = makePottery("mug","1 pound", "6 inches" )
console.log(newMug)

let newBowl = makePottery("bowl", "1.5 pounds", "4 inches")
console.log(newBowl)

let newPlate = makePottery("plate", ".5 pounds", "1 inch")
console.log(newPlate)

let newTable = makePottery("table", "20 pounds", "3 feet")
console.log(newTable)

let newLamp = makePottery("lamp", "15 pounds", "5 feet")
console.log(newLamp)
// Fire each piece of pottery in the kiln
let mugCracked = firePottery(newMug, 2100)
console.log(mugCracked)
let  bowlCracked = firePottery(newBowl, 2300)
console.log(bowlCracked)
let plateCracked = firePottery(newPlate, 2000)
console.log(plateCracked)
let tableCracked = firePottery(newTable, 2200)
console.log(tableCracked)
let lampCracked = firePottery(newLamp, 2500)
console.log(lampCracked)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



