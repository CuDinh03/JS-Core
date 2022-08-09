let inPut = prompt('nhap chuoi mess:');

let mess = (inPut=='Employee') ? 'Hello' : (inPut=='Director') ? 'Greetings': (inPut== '') ? 'No login':'';

alert(mess);