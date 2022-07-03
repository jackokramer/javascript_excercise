class ParkingLot{
    slots=[]

    constructor(parkingSize){
        this.slots = new Array(parkingSize).fill(null)
    }
    park(carId){
        console.log(`Parking car: ${carId}`)
        if(this.slots.every((slot)=> slot !=null)){
        return false
    }

    for(let x = 0; x <= this.slots.length ; x++){
        const slot = this.slots[x]

        if(slot === null){
            this.slots[x]=carId
            return true
        }
    }
}

remove(carId){
    console.log(`Leaving car: ${carId}`)
    if(this.slots.every((slot)=> slot !=carId)){
        return false
    }
    for(let x = 0; x<= this.slots.length ; x++){
        const slot = this.slots[x]

        if(slot===carId){
            this.slots[x]= null
            return true
        }
    }
}

getSlots(){
    console.log(`Parking slots: ${this.slots}`)
    return this.slots
}
getSize(){
    console.log(`Parking size is ${this.slots.length}`)
    return this.slots.length
}
getAvailable(){
    const availableSlots = this.slots.filter((z)=>z===null).length
    console.log(`Available parking slots: ${availableSlots}`)
    return availableSlots
}
isFull(){
    return this.getAvailable()===0;
}
}

export default ParkingLot

const parking = new ParkingLot(15)