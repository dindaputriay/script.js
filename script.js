// console.log("Selamat Pagi")

// //variabel
// let npm = 2125250047
// let nama = "Dinda Putri Ayu"
// let arrayMahasiswa = ["Nur", "Putri"];
// let arrayDosen = Array("Mikhael", "Putra")

// //object
// let mahasiswa = {
//     npm: 2125250047, nama: "Dinda", hobi: ["ngoding", "gaming", "reading" ]
// }
//  console.log(arrayMahasiswa[0])
//  console.log(arrayDosen[1])
//  console.log(mahasiswa.nama) // output dinda
// console.log(mahasiswa.hobi[0]) // output ngoding

let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")

let data = []

function simpan() {
    console.log("Button simpan ditekan")

    console.log(txtNpm.value)
    console.log(txtNama.value)


//simpan ke array data
data.push(
        {"npm" : txtNpm.value, "nama" : txtNama.value}
    )

    //panggil function tampil()
    tampil()
}

function tampil(){
    //clear elemen listMahasiswa
    listMhs.innerHTML = ""
    // gunakan forEach
    data.forEach(listData)
}

function listData(item, index) {
    listMhs.innerHTML += item.npm + "-" + item.nama
}