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

console.log("mulai")

let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")

let data = []
tampil()

function simpan() {
    console.log("Button simpan ditekan")
    console.log(txtNpm.value)
    console.log(txtNama)


//simpan ke array data

//cek apakah ada data didalam localStroge dengan key lsMahasiswa
if (localStorage.getItem("1sMahasiswa") === null) {
    // jika localstorage dengan key 1sMhasiswa belum ada 

    //simpan object ke array data
    data.push({
        "npm" : txtNpm.value, 
        "nama" : txtNama.value
    })
    localStorage.setItem("lsMahasiswa", JSON.stringify(data))
} else {
    //jika localStorage dengan key lsMahasiswa sudah ada/sudah disimpan
    //ambil dulu data di local storage dengan key lsMahasiswa 
    let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
    console.log(dataLs)
    //push data baru kendalam array
    dataLs.push({
        "npm" : txtNpm.value,
        "nama" : txtNama.value
    })
    // simpan data  baru kedalam localStorage
    localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))
}

    //panggil function tampil()
    tampil()
}

function tampil(){
    //clear elemen listMahasiswa
    listMhs.innerHTML = ""
    // gunakan forEach
    data.forEach(listData)

    // clear elemen listMahasiswa
    tblMhs.innerHTML = ""
    //ambil data localstorage dengan key 1 sMahasiswa
    dataTampil = JSON.parse(localStorage.getItem("1sMahasiswa"))
    dataTampil.forEach(listData)
}

function listData(item, index) {
    listMhs.innerHTML += item.npm + "-" + item.nama

    tblMhs.innerHTML += `<tr><td>${item.nama}</td><td>${item.npm}</td><tr>`
    }
