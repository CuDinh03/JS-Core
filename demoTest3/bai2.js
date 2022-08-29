let arr = [];
let n = +prompt("Nhap so phan tu:");
let index = +prompt("Nhap so:")
let flag = 0;

function inputArr(n) {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("Nhap phan tu o vi tri " + i);
    }
}

function tryRemoveFromArray(arr, index) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (index < i) {
            a.push(arr[i]);
        }
        if (index === i) {
            flag += 1;
        } else {
            a.push(arr[i - 1]);
        }
    }
    if (flag === 0) {
        return arr;
    } else {
        return a;
    }
}

inputArr(n);
console.log(tryRemoveFromArray(arr, index));