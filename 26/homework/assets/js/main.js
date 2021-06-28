
/* 1 */
let myAutoo = {
    производитель: "Audi",
    модель: "A5",
    "год выпуска": "2015",
    "средняя скорость": 160
}

function printAutoo(){
    let h = '<ul>';
    for(let k in myAutoo){
        h+=`<li><b>${k}: </b>${myAutoo[k]}</li>`;
    }
    h += '</ul>'
    document.getElementById("rez").innerHTML = h;
}
printAutoo();

function DistanceSpeed(distance){
    let hours = distance / myAutoo["средняя скорость"];

    for (let i = 1; i <= hours; i++){
        if(i % 4 == 0){
            hours++;
        }
    }
    let rezz = `${distance}km вы проедете за ${hours.toFixed(1)} часов`;
    return rezz;
}
function printDistanceSpeed(){
    debugger
    let k = parseInt(document.getElementById("number").value);
    let rez = DistanceSpeed(k);

    document.getElementById("rezzz").innerText = rez;
}



/* 2 */

let fraction = {
    numerator1: 6,
    denominator1: 10,
    numerator2: 4,
    denominator2: 8
}

function printFraction(){
        let h = '<ul>';
        for(let k in fraction){
            h+=`<li><b>${k}: </b>${fraction[k]}</li>`;
        }
        h += '</ul>'
        document.getElementById("rez3").innerHTML = h;
}
printFraction();

/* * */
function multiFraction(){
    let numerator = fraction.numerator1 * fraction.numerator2;
    let denominator = fraction.denominator1 * fraction.denominator2;
    let rez = '';
    let n = numerator,
        d = denominator;
    for (let i = 2; i <= numerator; i++) {
        rez = `${n}/${d}`;
        if (numerator % i === 0 &&  denominator % i === 0){
            n = numerator / i, d = denominator / i;
            rez = `${n}/${d}`;
        }
    }
    document.getElementById("multiFraction_rez").innerHTML = rez;
}
/* / */
function divisionFraction(){
    let numerator = fraction.numerator1 * fraction.denominator2;
    let denominator = fraction.denominator1 * fraction.numerator2;
    let rez = '';
    let n = numerator,
        d = denominator;
    for (let i = 2; i <= numerator; i++) {
        rez = `${n}/${d}`;
        if (numerator % i === 0 &&  denominator % i === 0){
            n = numerator / i, d = denominator / i;
            rez = `${n}/${d}`;
        }
    }
    document.getElementById("divisionFraction_rez").innerHTML = rez;
}
/* + */
function additionFraction(){
    let d1 = fraction.denominator1,
        d2 = fraction.denominator2,
        n1 = fraction.numerator1,
        n2 = fraction.numerator2;
        let rez = '';
    for(let i = 1; i <= d1*d2; i++){
        if (i%d1===0 && i%d2===0){
            let denominatorr = i;
            let a = denominatorr/d1;
            let b = denominatorr/d2;
            let numeratorr1 = a*n1;
            let numeratorr2 = b*n2;
            let numeratorr = numeratorr1 + numeratorr2;
            let n = numeratorr,
                d = denominatorr;
            for (let i = 2; i <= numeratorr; i++) {
                rez = `${n}/${d}`;
                if (numeratorr % i === 0 &&  denominatorr % i === 0){
                    n = numeratorr / i, d = denominatorr / i;
                    rez = `${n}/${d}`;
                }
            }
        }
    }
    document.getElementById("additionFraction_rez").innerHTML = rez;
}
/* - */
function subtractionFraction(){
    let d1 = fraction.denominator1,
        d2 = fraction.denominator2,
        n1 = fraction.numerator1,
        n2 = fraction.numerator2;
        let rez = '';
    for(let i = 1; i <= d1*d2; i++){
        if (i%d1===0 && i%d2===0){
            let denominatorr = i;
            let a = denominatorr/d1;
            let b = denominatorr/d2;
            let numeratorr1 = a*n1;
            let numeratorr2 = b*n2;
            let numeratorr = numeratorr1 - numeratorr2;
            let n = numeratorr,
                d = denominatorr;
            for (let i = 2; i <= numeratorr; i++) {
                rez = `${n}/${d}`;
                if (numeratorr % i === 0 &&  denominatorr % i === 0){
                    n = numeratorr / i, d = denominatorr / i;
                    rez = `${n}/${d}`;
                }
            }
        }
    }
    document.getElementById("subtractionFraction_rez").innerHTML = rez;
}


/* 3 */

let time = {
    hours: 13,
    minutes: 34,
    seconds: 22
}

function printTime(){
    let h = '<ul>';
    for(let k in time){
        h+=`<li><b>${k}: </b>${time[k]}</li>`;
    }
    h += '</ul>'
    let rez = hoursMinSec(time.hours,time.minutes,time.seconds)
    document.getElementById("rez4").innerHTML = h;
    document.getElementById("rez5").innerHTML = rez;
}
printTime();

function addZero(n){
    return (n<10)?'0'+n:n;
}

function hoursMinSec(h=0,m=0,s=0){
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    return h + ':' + m + ':' + s;
}

/* seconds */
// function addSeconds(a){
//     let h = 0;
//     let m = 0;
//     let s = 0;
//     let newS = a+s;
//     let rez = '';
//     if(newS<60){
//         return rez = hoursMinSec(h,m,newS)
//     } else {
//         m += parseInt(newS/60);
//         s = newS%60;
//         if(m>=60){
//             h += parseInt(m/60);
//             m = m%60;
//         }
//         return rez = hoursMinSec(h,m,s);
//     }
// }
function addSeconds(a){
    debugger
    let h = time.hours;
    let m = time.minutes;
    let s = time.seconds;
    let newS = a+s;
    let rez = '';
    if(newS<60){
        return rez = hoursMinSec(h,m,newS)
    } else {
        m += parseInt(newS/60);
        s = newS%60;
        if(m>=60){
            h += parseInt(m/60);
            m = m%60;
        }
        return rez = hoursMinSec(h,m,s);
    }
}
function printAddSeconds(){
    let s = parseInt(document.getElementById("seconds").value);
    let rez = addSeconds(s);

    document.getElementById("rez6").innerHTML = rez;
}

/* minutes */
function addMinutes(a){
    let h = time.hours;
    let m = time.minutes;
    let s = time.seconds;
    let newM = a+m;
    let rez = '';
    if(newM<=60){
        return rez = hoursMinSec(h,newM,s)
    }else{
        h += parseInt(newM/60);
        m = newM%60;
        return rez = hoursMinSec(h,m,s);
    }
 }

 function printAddMinutes(){
    let s = parseInt(document.getElementById("minutes").value);
    let rez = addMinutes(s);

    document.getElementById("rez7").innerHTML = rez;
}

/* hours */
function addHours(a){
    let h = time.hours;
    let m = time.minutes;
    let s = time.seconds;
    let newH = a+h;
    let rez = '';
    return rez = hoursMinSec(newH,m,s)
}

function printAddHours(){
    let s = parseInt(document.getElementById("hours").value);
    let rez = addHours(s);

    document.getElementById("rez8").innerHTML = rez;
}

