let userName = prompt("alo ai the ?",'');
switch (userName){
    case 'Admin':
        let passW = prompt("Nhap password di anh zai:", '');
        switch (passW){
            case null:
                alert('Canceled');
                break;
            default:
                alert('welcome');
                break;
        }
        break;
    case 'TheMaster':
        alert('Welcome');
        break;
    case null:
        alert('Canceled');
        break;
    default:
        alert("i don't know you");
        break;
}