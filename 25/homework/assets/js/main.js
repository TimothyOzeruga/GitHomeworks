/* 1 */
function checkNumber(a=0,b=0){
    if (a>b){
        return 1;
    } else if (a<b){
        return -1;
    } else if (a===b){
        return 0;
    }
}

function twoNumber(){
    let a = parseInt(document.getElementById("first_number").value);
    let b = parseInt(document.getElementById("second_number").value);
    let rez = checkNumber(a,b);
    
    document.getElementById('twoNumber_rez').innerText = rez;
}

/* 2 */

function factorial(){
    let a = parseInt(document.getElementById("n").value);
    let rez = 1;
    let i = 1;

   while(i<=a){
       rez *= i;
       i++;
   }
    document.getElementById('factorial_rez').innerText = rez;
}

/* 3 */

function threeNumber(){
    let a = parseInt(document.getElementById("fir_number").value);
    let b = parseInt(document.getElementById("sec_number").value);
    let c = parseInt(document.getElementById("thi_number").value);
    let rez = (a*100)+(b*10)+c;

    document.getElementById('threeNumber_rez').innerText = rez;
}

/* 4 */

// function rectangleArea(a,b){
//     return(a*b);
// }

function rectangle(){
    let a = parseInt(document.getElementById("rectangle_number").value);
    let b = parseInt(document.getElementById("rectangle_number2").value);
    // let a = document.getElementById("rectangle_number").value;
    // let b = document.getElementById("rectangle_number2").value;
    let rez = 0;

    if (typeof a === undefined){
        rez += b*b;
    } else if(typeof b === undefined){
        rez += a*a;
    } else {
        rez += a*b;
    }
    
    document.getElementById('rectangle_rez').innerText = rez;
}


/* 5 */

function isPerfect(a){
    let count = 0;
    let rez = '';

    for (i=0; i<a; i++){
        if(a%i===0){
            count += i;
        }
    }
    if (count===a && a!==0){
        return(rez += 'It is a perfect number');
    } else {
        return(rez += 'It is not a perfect number');
    }
}

function perfectNumber(){
    let a = parseInt(document.getElementById("perfect_number").value);
    let rez = isPerfect(a);

    document.getElementById('perfect_number_rez').innerText = rez;
}

/* 6 */

function isPerfectt(a){
    let count = 0;
    let rez = '';

    for (i=0; i<a; i++){
        if(a%i===0){
            count += i;
        }
    }
    return count===a && a!==0;
}


function searchPerfect(){
    let a = parseInt(document.getElementById("min_number").value);
    let b = parseInt(document.getElementById("max_number").value);
    let rez = '';

    for(i=a; i<b; i++) {
        if (isPerfectt(i)){
            rez += i+', ';
        }
    }
    document.getElementById('searchPerfect_rez').innerText = rez;
}

/* 7 */

function addZero(n){
    return (n<10)?'0'+n:n;
}

function timee(h=0,m=0,s=0){
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    return h + ':' + m + ':' + s;
}

function time(){
    debugger
    let h = document.getElementById("hours").value;
    let m = document.getElementById("minutes").value;
    let s = document.getElementById("seconds").value;
    let rez; 

    if ( m === '' && s === ''){
        m += '0';
        s += '0';
    } else if (m !== '' && s === ''){
        s += '0';
    } else if (m === '' && s !== ''){
        m += '0';
    }

    rez = timee(h,m,s);

    document.getElementById('time_rez').innerText = rez;
}

/* 8 */

function toSecondss(h,m,s){
    return((h * 3600) + (m * 60) + s);
}

function toSeconds(){
    let h = parseInt(document.getElementById("hourss").value);
    let m = parseInt(document.getElementById("minutess").value);
    let s = parseInt(document.getElementById("secondss").value);
    let rez = toSecondss(h,m,s);

    document.getElementById('toSeconds_rez').innerText = rez;
}

/* 9 */

function secondsToTimee(difference){
    let hours = parseInt(difference/3600);
    difference %= 3600;
    let minutes = parseInt(difference / 60);
    let seconds = difference % 60;
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    return (hours + ":" + minutes + ":" + seconds);
}

function secondsToTime(){
    let s = parseInt(document.getElementById("sec").value);
    let rez = secondsToTimee(s);

        document.getElementById('secondsToTime_rez').innerText = rez;
}

/* 10 */

function timeСomparison(){
    debugger
    let h1 = parseInt(document.getElementById("1hours").value);
    let m1 = parseInt(document.getElementById("1minutes").value);
    let s1 = parseInt(document.getElementById("1seconds").value);
    let h2 = parseInt(document.getElementById("2hours").value);
    let m2 = parseInt(document.getElementById("2minutes").value);
    let s2 = parseInt(document.getElementById("2seconds").value);

    let seconds1 = toSecondss(h1,m1,s1);
    let seconds2 = toSecondss(h2,m2,s2);
    let difference = seconds1 - seconds2;

    let rez = secondsToTimee(difference);

    document.getElementById('timeСomparison_rez').innerText = rez;
}