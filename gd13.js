class Karyawan {
    constructor(nama){
        this.nama = nama
    }
    info(){
        console.log(`Karyawan:` +this.nama)
    }
}
class KaryawanTetap extends Karyawan{
        hitungLembur(jam){
        console.log(this.nama+ " lembur "+ jam +" jam, upah Rp " + (jam * 50000)+".")
    }
}
class KaryawanMagang extends Karyawan{
    terimaUangSaku(nominal){
        console.log (this.nama +" Menerima uang saku sebesar "+ nominal +".")
    }
}
class Programmer extends KaryawanTetap {}

class Magang extends KaryawanMagang{
    hitungLembur(jam){
        throw new Error(this.nama+ " tidak berhak lembur")
    }
}
function prosesLembur(daftar){
    daftar.forEach((x) =>x.hitungLembur(3))
}
function berikanUangSaku (daftar){
    daftar.forEach((a) =>a.terimaUangSaku(1500000) )
}
class Desainer extends KaryawanTetap{

}

const budi = new Programmer ("Budi_3552")
const rina = new Magang("Rina_3552")
const sari = new Desainer("Sari_3552")
budi.info()
rina.info()
sari.info()
prosesLembur([budi,sari])
berikanUangSaku([rina])