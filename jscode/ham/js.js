// let arr=[3,4,5];
// function copy(x){
// //     x = [3,4,5,6]
// // return x;
// // //     x=[];
// // //     x.push(6);
// // //     return x;
//     x=[];
//     for (let i=0; i<arr.length;i++){
//         x[i]=arr[i];
//     }
//     x.push(6)
//     return x;
// }
// let y = copy(arr);
// console.log(y);
// console.log(arr)

// let arr = [3,4,5,6];
//
// function deLete(index){
//     x = arr;
//     for (let i =0; i< x.length;i++){
//         if(i===index){
//             let temp = x[i];
//             x[i]= arr[arr.length-1];
//             arr[arr.length-1]=temp;
//             x.pop();
//             x.push(0)
//         }
//     }
//     return x;
// }
// console.log(deLete(0))
let number = 5;

function giaithua(number){
    if(number>1){
        let ketQua = 1;

        for(let i = 1;i<=number;i++){

            ketQua = ketQua*i

        }
        return ketQua;


    }else{
        return'khong co giai thua so be hon 0';
    }
}
console.log(giaithua(number));
