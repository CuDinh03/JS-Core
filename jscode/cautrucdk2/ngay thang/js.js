function kTra(){
    let monTh = parseInt(document.getElementById("numBer").value);

    if (1<=monTh && monTh<=7){
        if(monTh%2==0){
            if(monTh == 2 ){
                alert('thang nay co 28hoac 29 ngay');
            }else {
                alert('Thang nay co 30 ngay');
            }
        }else {
            alert('Thang nay co 31 ngay');
        }
    }else if(8<=monTh && monTh<=12){
        if (monTh%2==0){
            alert('Thang nay co 31 ngay');
        }else {
            alert('Thang nay co 30 ngay');
        }
    }else {
        alert('nhap lai di');
    }
}