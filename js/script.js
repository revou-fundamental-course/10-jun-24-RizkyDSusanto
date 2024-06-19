// ini javascript/js

function konver(){
    let inputan = document.getElementById("inputC").value;
    let hasil = parseInt(inputan) * 1.8 + 32;
    document.getElementById("inputF").value = hasil;
    let perhitungan = inputan + "°C * 1.8 + 32 = " + hasil;
    document.getElementById("hasilHitung").value = perhitungan;
}

function reset(){
    document.getElementById("inputC").value = "";
    document.getElementById("inputF").value = "";
    document.getElementById("hasilHitung").value = "";
}