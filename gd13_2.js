const Kamera ={
    ambilFoto (){
        console.log(this.nama + " Mengambil foto")
    }
}
const Internet ={
    bukaBrowser (){
        console.log(this.nama +  "Membuka browser")
    }
}
const Telepon = {
    panggil(){
        console.log(this.nama + " Melakukan Pemanggilan")
        }
}
function applyCapabilities(Kelas,...kemampuan){
    kemampuan.forEach (kemampuanObjek => (Object.assign(Kelas.prototype,kemampuanObjek)))
}
class TabletWifi{
    constructor(nama){
        this.nama = nama
    }
}
    applyCapabilities(TabletWifi,Kamera,Internet)
class PonselJadul{
    constructor(nama){
        this.nama = nama
    }
}
    applyCapabilities(PonselJadul,Telepon)
const Tablet = new TabletWifi("Tablet_3552")
const Ponsel = new PonselJadul("Ponsel_3552")

Tablet.ambilFoto()
Tablet.bukaBrowser()
Ponsel.panggil()

console.log("Ponsel_3552 bisa mengambil foto? " +(typeof Ponsel.ambilFoto === `function`))
console.log("Tablet_3552 bisa melakukan panggilan? " +(typeof Tablet.panggil === `function`))^x^X6x