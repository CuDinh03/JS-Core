let a = parseInt(prompt("Moi ban nhap so nam"));

if(a%4==0){
    if (a%100==0){
        if (a%400==0){
            alert(a+'la nam nhuan');
        }else{
            alert(a+'khong la nam nhuan');
        }
    }else{
        alert(a+'la nam nhuan');
    }
}else{
    alert(a+'khong la nam nhuan');
}