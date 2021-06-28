
function go(){
    let number = parseInt(prompt("enter number")),
        rez = addZero(number)
    alert(rez);
}

// function addZero(n){
//     if (n>=0 && n<=9){
//         n = "0" + n;
//     } else {
//         n=n;
//     }
//     return n;
// }

function addZero(n){
    return n<10?"0" + n:n;;
}

/* Lesson */ 

function text(){
    const t = document.getElementById("my_text").value;
    // document.getElementById("text_rez").innerText = 'Hello '+t+'!';
    document.getElementById("text_rez").innerHTML =   
    `<p>
        Welcome! <br>
        Hello, <b>${t}</b>
    </p>`
    ;
}

/* While */

/* 1 */

function diez(){
    const n = parseInt(document.getElementById("diez_number").value);

    if(n!=0 && !isNaN(n) && n>0){
        let rez = '';
        let i = 0;
        while(i<n){
            i++;
            // rez = rez + '#';
            rez += '#';
        }
        document.getElementById("diez_rez").innerText = rez;
    } else {
        alert("enter diez number")
    }
}

/*  2 */


function reverse(){
    debugger
    let n = parseInt(document.getElementById("reverse_number").value);

    if(n!=0 && !isNaN(n) && n>0){
        let rez = '';
        while(n>0){
            rez += n+`, `
            n--;
        }
        document.getElementById("reverse_rez").innerText = rez;
    } else {
        alert("enter number")
    }
}

/* 3 */

function pow(){
    let n = parseInt(document.getElementById("pow_number").value);//2
    let s = parseInt(document.getElementById("pow_stepen").value); //3  
    let valid = true;
    let errMsg = '';

    // if(!isNaN(n)){
    //     errMsg += "enter number!";
    //     valid = false;  
    // } 
    // if(!isNaN(s)){
    //     errMsg += " enter stepen!";
    //     valid = false;  
    // } 

    if(valid){
        // 2 * 2 * 2 
        let rez = n;
        let i = 1;
        while(i<s){
            rez = rez * n;
            i++;
        }
        if(s<0){
            rez = 1/rez;
        }
        document.getElementById("pow_rez").innerText = rez;//8
    } else {
        document.getElementById("pow_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
    }
}

/* 4 */

function del(){
    let a = parseInt(document.getElementById("del_number1").value);
    let b = parseInt(document.getElementById("del_number2").value);
    let = rez = '';

    let max = (a>b)?a:b;

    while(max!=0){
        if(a%max==0 && b%max==0){
            rez += max+', ';
        }
        max--;
    }

    document.getElementById("del_rez").innerText = rez;
}

/* Do While */

function primer(){
    const result = 6;
    let answer = 0;
    let rez = true;
    do {
        answer = parseInt(prompt("2 + 2 * 2 = ?"));
        if(answer === result) {
            alert("BINGO!")
            rez = false;
        } else{
            alert("Answer is incorrect");
            rez = true;
        }
    } while(rez);
}

function primer2(){
    const result = 6;
    let answer = 0;
    do {
        answer = parseInt(prompt("2 + 2 * 2 = ?"));
        if(answer === result) {
            alert("BINGO!")
        } else{
            alert("Answer is incorrect");
        }
    } while(answer !== result);
}

/* For */

function krat(){
    let k = parseInt(document.getElementById("krat_number").value);
    let rez = '';

    for (let i = 1; i <= 100; i++){
        if(i%k==0){
            rez += i+', '
        }
    }

    document.getElementById("krat_rez").innerText = rez;
}


