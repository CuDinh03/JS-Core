function menu(){
    do {
        // console.log('=============================================================================================================');
        // console.log('1. Nhap 2 so a, b kiem tra xem a co chia het cho b khong?');
        // console.log('2. Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.');
        // console.log('3. Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0');
        // console.log('4. Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó');
        // console.log('5. Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ');
        // console.log('6. Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng');
        // console.log('7. Tính cước điện thoại cho một hộ gia đình với các thông số đã cho');
        // console.log('0. Thoat');
        // console.log('=============================================================================================================');
        //
        let choice =parseInt( prompt('Lua chon cua ban'));

        switch (choice){
            case 1:
                alert('chua chon 1');
                break;
            case 2:
                alert('chua chon 1');

                break;
            case 3:
                alert('chua chon 1');

                break;
            case 4:
                alert('chua chon 1');

                break;
            case 5:
                alert('chua chon 1');

                break;
            case 6:
                alert('chua chon 1');

                break;
            case 7:
                alert('chua chon 1');

                break;
            case 0:
                alert('cam on')
                break;
            default:
                alert('chon lai di.');
                break;
        }
    }while (choice!=0);
}


function bai1(a,b){
    if(a%b==0){
        alert("a chia het cho b");
    }else {
        alert('a khong chia het cho b');
    }
}

function bai2(tuoi){
    if(tuoi<15){
        alert('Khong du tuoi vao 10');
    }else {
        alert('du tuoi vao 10');
    }
}

function bai3(soNguyen){
    if(soNguyen===0){
        alert('day la so 0');
    }else if(soNguyen<0) {
        alert('so nay nho hon 0');
    }else{
        alert('so nay lon hon 0');
    }
}

function bai4(so1,so2,so3){
    if(so1>so2){
        if(so1>so3){
            alert('so lon nhat la so:' + so1);
        }else if(so2<so3) {
            alert('so lon nhay la so '+ so3);
        }
    }else if(so2>so3){
        alert('so lon nhat la so'+so2);
        }else if(so1<so3){
            alert('so lon nhat la so'+ so3);
    }
}

function bai5(diemKtra,diemGiuaKy,diemCuoiKy){

}

function bai6(){

}

function bai7(){

}