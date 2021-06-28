
function checkNumber(){
    let a = parseInt(prompt("Enter number"));

    if(a>0){
        alert("+");
    }else if(a<0){
        alert("-");
    }else if(a==0){
        alert("zero");
    }else{
        alert("not a number");
        checkNumber();
    }    
}

function checkAge(){
    let a = parseFloat(prompt("Enter your age"));

    if(a>0 && a<=120){
        alert(`valid`);
    }else {
        alert("invalid number");
    }
}

function abs(){
    let a = parseFloat(prompt("Enter number"));

    if(a=>0){
        alert(a);
    }else if(a<=0) {
        a = a * (-1);
        alert(a);
    }else {
        alert('invalid number')
    }
}

function time(){
    let t = prompt("Enter time, format hh:mm:ss"),
        arrT = t.split(":"),
        h = parseInt(arrT[0]),
        m = parseInt(arrT[1]),
        s = parseInt(arrT[2]);

    if (isNaN(h) || isNaN(m) || isNaN(s)){
        alert('Enter valid time');     
    }else if((h>=0 && h<24) || (m>=0 && m<60) || (s>=60 && s<60)){
        alert(`time valid`);
    }else {
        alert('invalid time');
    }
}

function monthName(){
    const mNumber = parseInt(prompt("enter month"));
    let monthName = '';

    switch(mNumber){
        case 1:
            monthName = 'January';
            break;
        case 2:
            monthName = 'Febrary';
            break;
        case 3:
            monthName = 'March';
            break;
        default:
            monthName = 'Enter valid month Number';
            break;
    }
    alert(monthName);
}

function maxNumber(){
    const a = parseInt(prompt("enter number 1")),
        b = parseInt(prompt("enter number 2"));
    let rez = a>b?a:b;

    // if(a>b){
    //     rez = a;
    // }else{
    //     rez = b;
    // }

    alert(rez);
}

function Kratnoe5(){
    const a = parseInt(prompt("enter number 1"));
    let rez = (a%5==0)?'кратно':'не кратно';
    alert(rez);
}


