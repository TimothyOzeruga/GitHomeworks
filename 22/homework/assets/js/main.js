

function yourName(){
    let yourName = prompt("enter your name");
    alert(`Hello, ${yourName}`);
}

function Age(){
    const birthdayDate = parseInt(prompt("enter your birthday date")),
        rez = 2021 - birthdayDate;
    alert(`your age - ${rez}`);
}

function perimetr(){
    const length = parseFloat(prompt("enter length")),
        perimeter = 4 * length;
    alert(`perimetr = ${perimeter}`);
}

function circleArea(){
    const length = parseFloat(prompt("enter radius")),
        area = Math.PI * Math.pow(length, 2);
    alert(`Area of circle = ${area}`);
}

function trip(){
    let distance = parseFloat(prompt("enter km")),
        time = parseInt(prompt("enter time")),
        rez = distance / time;
    alert(`to arrive on time you have to move at that speed => ${rez} km`);
}

function converter(){
    const k = 0.83;
    let dollar = parseFloat(prompt("enter dollars")),
        rez = (k * dollar);
    alert(`Euro = ${rez}`);
}


function flashDrive(){
    let number = parseInt(prompt("enter storage of flash drive")),
        file = 820;
        gigabyte = number * 1024;
        rez = (gigabyte - (gigabyte % file)) / file;
    alert(`You can save ${rez} files on the flash drive`);
}

function chocolate(){
    let money = parseFloat(prompt("enter amount of money")),
        price = parseFloat(prompt("enter price of chocolate"));
        chocolatte = (money - (money % price)) / price;
        rest = money % price;
    alert(`You can buy ${chocolatte} chocolates; rest of money => ${rest}`);
}

function backToFront(){
    let number = parseInt(prompt("enter three-digit number")),
        firstNumber = parseInt(number%10) * 100,
        secondNumber = (parseInt(parseInt(number%100) / 10)) * 10;
        thirdNumber = parseInt(number/100);
        rez = firstNumber + secondNumber + thirdNumber;
    alert(`${number} => ${rez}`);
}

function bank(){
    let amount = parseFloat(prompt("enter amount of $"));
        month = (amount * 0.05) / 12;
        rez = 2 * month;
    alert (`Amount of percent for 2 month = ${rez}$`);
}
