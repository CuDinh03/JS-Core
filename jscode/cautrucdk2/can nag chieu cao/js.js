function kQua(){
    let CanNag = parseFloat(document.getElementById("canNang").value);
    let ChCao = parseFloat(document.getElementById("chieuCao").value);
    let Results;
    let BMI = CanNag/(ChCao**2);
    if (BMI < 0 ){
        alert('moi  ban nhap lai');
    }else if(BMI<18.5){
        alert('gay vl');
    }else if(BMI <25){
        alert('binh thuong');
    }else if(BMI < 30){
        alert('thua can r');
    }else{
        alert('beo vl roi');
    }
    document.getElementById("Results").innerText = BMI ;
}
