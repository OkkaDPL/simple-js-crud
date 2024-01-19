let test = [{
    kodeBarang : "KD0010",
    namaBarang : "Kayu",
    satuanBarang :"Unit",
    qtyBarang : "10",
    hargaBarang : "60.000"
}];
let arr = [];
let kode = Number('0000');
let tableBody = document.querySelector('.t-body');


class DbBarang {
    constructor(kodeBrg, namaBrg, satuanBrg, qtyBrg, hargaBrg){
        this.kodeBarang = kodeBrg;
        this.namaBarang = namaBrg;
        this.satuanBarang =  satuanBrg;
        this.qtyBarang = qtyBrg;
        this.hargaBarang = hargaBrg;
    }
}

let inputBrg = ()=> {
    kode += 1;
    let nmBarang = prompt('Masukan Nama Barang:');
    let satBarang = prompt('Masukan Satuan Barang:');
    let qBarang = prompt('Masukan Qty Barang:');
    let hrgBarang = prompt('Masukan Harga Barang:');

    const data = new DbBarang('KD-'+kode, nmBarang, satBarang, qBarang, hrgBarang);
    arr.push(data);
    alert('Data berhasil ditambahkan.');
    return refreshTb();
}

let refreshTb = ()=>{
    tableBody.innerHTML = ''
    arr.forEach((val)=> {
        createRow(val);
    });
    console.table(arr)
}

let createTd = (params)=>{
    const td = document.createElement('td');
    td.innerText = params;
    return td;
}

let createRow = ({kodeBarang, namaBarang, satuanBarang, qtyBarang,hargaBarang })=>{
    let tr = document.createElement('tr');
    tr.append(createTd(kodeBarang), createTd(namaBarang), createTd(satuanBarang), createTd(qtyBarang), createTd(hargaBarang));
    return tableBody.append(tr)
}

let deleteBrg = (params)=> {
    let getIndex = arr.findIndex((val)=>{
        if(val.kodeBarang === params){
            return val;
        }
    });

    if(getIndex===-1){
        return alert('Kode barang tidak ditemukan.')
    }else {
        arr.splice(getIndex, 1);
        refreshTb();
        return alert('Data berhasil dihapus.');
    }

}

let inputDeleteBrg = ()=>{
    const result = prompt('Masukan ID Barang: ');
    return deleteBrg(result);
}

let updateBrg = (params)=>{

    const newNama = prompt('Masukan nama baru: ');
    const newSatuan = prompt('Masukan satuan baru: ');
    const newQty = prompt('Masukan qty baru: ');
    const newHarga = prompt('Masukan harga baru:');
    const kdBrg = arr[params].kodeBarang

        arr[params] = {
            kodeBarang : kdBrg,
            namaBarang : newNama,
            satuanBarang : newSatuan,
            qtyBarang : newQty,
            hargaBarang : newHarga
        }
        
        refreshTb();
        return alert('Data berhasil dirubah.');
}

let inputUpdateBrg = ()=> {
    const result = prompt('Masukan ID Barang: ');

    const getIndex = arr.findIndex((val)=> {
        if(val.kodeBarang === result){
            return val.kodeBarang;
        }else{
            return false;
        }
    });

    if(getIndex === -1){
        return alert('Kode barang tidak ditemukan');
    }else{
        return updateBrg(getIndex);
    }
}
