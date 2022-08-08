inputLy = prompt("Nhap diem ly: ");
inputHoa = prompt("Nhap diem ly: ");
inputSinh = prompt("Nhap diem ly: ");
let ly = parseInt(inputLy);
let hoa = parseInt(inputHoa);
let sinh = parseInt(inputSinh);

let sum = ly+hoa+sinh;
let average = sum/3;

document.write('Tong 3 mon diem:' + sum);
document.write('<br/>')
document.write('Diem trung binh:' +average);

