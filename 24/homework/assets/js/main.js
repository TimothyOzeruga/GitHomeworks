/* 1 */
function summ() {
    let a = parseInt(document.getElementById("first_number").value);
    let b = parseInt(document.getElementById("last_number").value);
    let rez = 0;

    if (a <= b) {
        // let rez = a;

        // while( a < b){
        //     a++;
        //     rez += a;
        // }

        while (a <= b) {
            rez += a;
            a++;
        }
    } else {
        alert("first number > second number");
    }

    document.getElementById("summ_rez").innerText = rez;
}

/* 2 */

function divider1(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) { let temp = a; a = b; b = temp; }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

function divider() {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    let rez = divider1(a, b);


    document.getElementById("divider_rez").innerText = rez;
}

/* 3 */

function dividerr() {
    let a = parseInt(document.getElementById("numberr").value);
    rez = '';

    for (i = 1; i <= a; i++) {
        if (a % i == 0) {
            rez += i + ', ';
        }
    }
    document.getElementById("dividerr_rez").innerText = rez;
}

/* 4 */

function getDigitAmount(c) {
    return c.length;
}

function digitsNumber() {
    let a = document.getElementById("big_number").value;
    let rez = `В введенном числе ${getDigitAmount(a)} цифр`;

    document.getElementById("big_number_rez").innerText = rez;
}

/* 5 */

function countNumber() {
    minusNumber = 0;
    plusNumber = 0;
    zero = 0;
    oddNumber = 0;
    evenNumber = 0;
    for (i = 0; i < 10; i++) {
        let a = +prompt('Enter number 10 numbers');

        if (a > 0) {
            plusNumber++;
        } else if (a < 0) {
            minusNumber++;
        } else if (a === null) {
            break;
        } else {
            zero++;
        }

        if (a % 2 == 0) {
            evenNumber++;
        } else if (a % 2 != 0) {
            oddNumber++;
        }
    }
    alert(`plus numbers: ${plusNumber} \n negative numbers: ${minusNumber} \n zero: ${zero}
    \n odd numbers: ${oddNumber}\n even numbers: ${evenNumber}`);
}

/* 6 */

function culc(a = 0, b = 0, action = "+") {
    a = parseInt(a);
    b = parseInt(b);
    switch (action) {
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

function myCulc() {
    const a = +prompt('Введите первое число');
    const b = +prompt('Введите второе число');
    const act = prompt('Выберете знак - + / *');
    let rez = culc(a, b, act);
    if (!rez && rez !== 0) {
        rez = 'Incorrect action';
    }
    if (act) {
        alert(rez);
        if (confirm('Хотите ли вы решить еще один пример?')) {
            myCulc();
        }
    }
}

/* 7 */

function shiftNumber() {
    let str = document.getElementById("n1").value;
    let k = document.getElementById("n2").value;
    let rez = (str.slice(k) + str.slice(0, k));

    document.getElementById("shiftNumber_rez").innerText = rez;
}

/* 8 */
function currentDay() {
    let myDate = new Date()
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let currentDate = days[myDate.getDay()]

    let i = 0
    while (confirm(`${currentDate}. Хотите увидеть следующий день?`)) {
        currentDate = days[(myDate.getDay() + ++i) % 7];
    }
}
/* 9 */

function multyTable() {
    let html = '';
    for (let i = 0; i <= 10; i++) {
        html += `
      <div class="item"">
          <ul>`
        for (let j = 1; j <= 10; j++) {
            html += `<li>${i}*${j} = ${i * j}</li>`;
        }
        html += `</ul>
       </div>`
    }

    document.getElementById("mt_wrap").innerHTML = html;
}


/* 10 */

function guessNumber() {
    alert("Загадайте число от 0 до 100");
    let from = 0;
    let to = 100;
    let middle = (to - from) / 2 + from;
    let quest = '';
    while (quest !== "=") {
        quest = prompt(`Ваше число больше, меньше или равно ${middle}?
        Введите <, >, =`);
        if (quest === ">") {
            from = Math.floor((to + from) / 2);
            middle = Math.floor((to - from) / 2 + from);
        } else if (quest === "<") {
            to = Math.floor((to + from) / 2);
            middle = Math.floor((to - from) / 2 + from);
        } else if (quest === "=") {
            alert("Congratilation, you won!!!");
        } else if (quest === null) {
            break;
        } else {
            alert("enter right symbols");
        }
    }
}


