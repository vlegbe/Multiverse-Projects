class Scooter {
constructor(station, user, serial, charge, isBroken, docked) {
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random() *100) + 1
    this.charge = Math.floor(Math.random() *10) + 1
    this.isBroken = isBroken
    this.docked = docked
}

//method()
rent() {
    if (this.isBroken = false && charge > 20) {
        this.docked = false
        console.log('Enjoy the ride')
    }
    else if (charge <= 20) {
        Error('Scooter low on battery, please charge')
    } else {
        Error('Scooter is broken, please send a repair request')
    }
}

dock(station) {
   if (this.scooter(stationProperty) = stationProperty) {
        console(stationProperty)
   }
   this.docked = true
   this.user = ' '
}

recharge(){
    this.charge = 100
}

requestRepair() {
    setInterval

    // need to finish!
    this.isBroken = false
}
}



module.exports = {Scooter}