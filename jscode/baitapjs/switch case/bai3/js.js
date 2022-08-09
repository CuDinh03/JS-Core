let a = +prompt("a?");

switch (a){
    case 0:
        alert('0');
        break;
    default:
        if(a>0){
            alert('1');
        }else{
            alert('-1');
        }
}