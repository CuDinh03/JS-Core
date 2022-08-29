//bai 3
let so = +prompt('Nhap so x: ')
let sum =0;
let flag = 1;
function sumOfListPrime(so){
    for(let j = 0; j<=so;j++) {
        if (j<2){
            continue;
        }else {
            for (let i = 2; i <= Math.sqrt(j); i++) {
                if (j % i === 0) {
                    flag += 1;
                    break;
                }
            }
        }
        if (flag === 1){
            sum= sum+j;
            flag =1;

        }else {
            flag = 1 ;
        }
    }
    return sum;
}

alert("tong cac so nguyen to den x:" + sumOfListPrime(so));