function nextDate(){
    const date = '31/12/2020'
}

function addZero(n){
    return (n<10)?'0'+n:n;
}

function isLeapYear(year){
    if (year%400===0 || (year%4===0 && year%100!==0)){
        return true;
    } else {
        return false;
    }
}

function checkYear(){
    const y = parseInt(document.getElementById("year_number").value);
    let rez = 'Year is not leap';
    if(isLeapYear(y)){
        rez = 'Year is leap';
    }
    document.getElementById('year_rez').innerText = rez;
}

function mySumm(a, b){
    return a + b;
}

function culc(number1=0, number2=0, action="+"){
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    switch(action){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return false;
    }
}

function myCulc(){
    const a = document.getElementById("f_number").value;
    const b = document.getElementById("s_number").value;
    const act = document.getElementById("action").value;
    let rez = culc(a, act, b);
    if(!rez && rez !== 0){
        rez = 'Incorrect action';
    }
    document.getElementById("culc_rez").innerText = rez;
}