// ini javascript/js

function konver(){
    if (document.getElementById("inputC").value == "") {
        alert("Masukkan suhu Celcius masih kosong. Silakan isi dahulu.");
    } else {
        let inputan = document.getElementById("inputC").value;
        let hasil = parseInt(inputan) * 1.8 + 32;
        document.getElementById("inputF").value = hasil;
        let perhitungan = "(" + inputan + " °C * 1.8) + 32 = " + hasil + " °F";
        document.getElementById("hasilHitung").value = perhitungan;
    }
}

function reset(){
    document.getElementById("inputC").value = "";
    document.getElementById("inputF").value = "";
    document.getElementById("hasilHitung").value = "";
}

function reverse(){
    if (document.getElementById("inputF").value == "") {
        alert("Masukkan suhu Fahrenheit masih kosong. Silakan isi dahulu.");
    } else {
        let inputan = document.getElementById("inputF").value;
        let hasil = (parseInt(inputan) - 32) / 1.8;
        document.getElementById("inputC").value = hasil;
        let perhitungan = "(" + inputan + " °F - 32) / 1.8 = " + hasil + " °C";
        document.getElementById("hasilHitung").value = perhitungan;
    }
}