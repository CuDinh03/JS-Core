//bai 1
let arrayPoint = [];
let n = +prompt('So diem co trong mang: ')
function duyetMang(n){
    for (let i = 0;i<n;i++){
        arrayPoint[i] = +prompt('Moi ban nhap diem vao vi tri ' + i + ":");
    }
}

function findAvg(arrayPoint){
    let sum = 0;
    let avg;
    let x = arrayPoint;
    for (let i =0; i<x.length;i++){
        sum+=x[i];
    }
    avg = sum / (x.length);
    return avg;
}
duyetMang(n);
alert('Gia tri trung binh cua mang la: ' + findAvg(arrayPoint));