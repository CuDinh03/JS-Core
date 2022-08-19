let arr = [];
function add(){
   let product = document.getElementById('product').value;
    arr.push(product);
    outPut();
}
function outPut(){
    let text = '';
    for (let i = 0; i<arr.length;i++){
        text+='<tr>'+'<td style="width: 150px">'+ arr[i]  + '<button type="button" onclick="edit('+i+')">Edit</button>' + '<button type="button" onclick="xoa('+i+')">Delete</button> ' + '' + '<td/>'+'<tr/>'+'<br/>' ;
    }
    document.getElementById('out').innerHTML = text;
    document.getElementById('count').innerText = arr.length ;

}
function edit(index){
    let product = prompt('Thay doi ten: ');
   arr[index] = product;
   outPut();
}
function xoa(index){
    arr.splice(index,1);
    outPut();
}

