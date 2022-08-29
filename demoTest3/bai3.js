let str1;
let str2;

function ktra(str1,str2){
    if ( str1.indexOf(str2) !== -1) {
        return true;
}else {
        return false;
    }
}
console.log(ktra('abcd','abcdegfhsd'));
