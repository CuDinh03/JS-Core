function pTinh(toanTu){
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let Result;
    let Num1 = parseInt(num1);
    let Num2 = parseInt(num2);
    switch (toanTu){
        case '+':
            Result = Num1 + Num2;
            document.getElementById("Result").innerText = Result;
            break;
        case '-':
            Result = Num1 - Num2;
            document.getElementById("Result").innerText = Result;
            break;
        case '/':
            Result = Num1 / Num2;
            document.getElementById("Result").innerText = Result;
            break;
        case '*':
            Result = Num1 * Num2;
            document.getElementById("Result").innerText = Result;
            break;
        default:
            break;
    }

}