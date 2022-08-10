function yeuHayKo(choice){
    if(choice== 'Yes') {
        alert('Có yêu thật không mà ấn');

    }else{
        alert('Thôi tắt văn đi.')
    }
}

    let noObj = null;
    noObj = document.getElementById('no');
    function init() {
        noObj = document.getElementById('no');
        noObj.style.position = 'relative';
        noObj.style.left = '0px';
    }

    function moveBack() {
        var x = Math.round(Math.random() * 500);
        var y = Math.round(Math.random() * 500);
        document.getElementById('no').style.left = x + 'px';
        document.getElementById('no').style.top = y + 'px';
}
    window.onload = init;
