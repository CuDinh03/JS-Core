let hienThi = document.getElementById("giaTri");
function inputNum(numb){
   hienThi.numb += numb;
}
function clear(){
   hienThi.numb = "";
}
function outPutNum(){
   let kq = eval(hienThi.numb);
   hienThi.numb = kq;
}