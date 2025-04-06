const distanceWalkedMilesArr = [140, 154, 161, 153, 128, 148]
const conversionFactorMilesToKm = 1.6

function convertMilesToKM(){
    return distanceWalkedMilesArr.map(function(distanceMiles, index){
        return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
    })
}

console.log(convertMilesToKM())