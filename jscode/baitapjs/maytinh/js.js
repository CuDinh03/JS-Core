function phimSo(so) {
    document.getElementById('hienThi').value += so;
}

function chucNang(cn) {
    switch (cn) {
        case 'Rad':
            document.getElementById('hienThi').value += cn;
            break;
        case 'Lnv':
            document.getElementById('hienThi').value += cn;
            break;
        case 'pi':
            document.getElementById('hienThi').value += cn;
            break;
        case 'e':
            document.getElementById('hienThi').value += cn;
            break;
        case 'Ans':
            document.getElementById('hienThi').value += cn;
            break;
        case 'sin':
            document.getElementById('hienThi').value += cn;
            break;
        case 'cos':
            document.getElementById('hienThi').value += cn;
            break;
        case 'tan':
            document.getElementById('hienThi').value += cn;
            break;
        case 'EXP':
            document.getElementById('hienThi').value += cn;
            break;
        case 'x!':
            document.getElementById('hienThi').value += cn;
            break;
        case 'Ln':
            document.getElementById('hienThi').value += cn;
            break;
        case 'log':
            document.getElementById('hienThi').value += cn;
            break;
        case 'can':
            document.getElementById('hienThi').value += cn;
            break;
        case 'luyThua':
            document.getElementById('hienThi').value += cn;
            break;
        case '%':
            document.getElementById('hienThi').value += cn;
            break;
        case '/':
            document.getElementById('hienThi').value += cn;
            break;
        case '*':
            document.getElementById('hienThi').value += cn;
            break;
        case '-':
            document.getElementById('hienThi').value += cn;
            break;
        case '+':
            document.getElementById('hienThi').value += cn;
            break;
    }

}

function ketQua() {
    let phuongTrinh = document.getElementById('hienThi').value;
    let ketQua = eval(phuongTrinh);
    document.getElementById('hienThi').value = ketQua;

}

function xoa() {
    location.reload();
}

