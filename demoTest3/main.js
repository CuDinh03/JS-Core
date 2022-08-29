//bai1
function inputArr() {
    let array = [];
    let n = +prompt("Nhap so phan tu:");
    for (let i = 0; i < n; i++) {
        array[i] = +prompt("Nhap phan tu o vi tri " + i);
    }
    return array;
}

function timMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function locSoMax(max, array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== max) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

let array = inputArr();
let max;
for (let count = 0; count < 3; count++) {
    max = timMax(array);
    array = locSoMax(max, array);
}
console.log(max);









