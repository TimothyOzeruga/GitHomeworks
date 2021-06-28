function myFunc(a){
    console.log(a);
    a+=5;
    if(a<30){
        return myFunc(a);
    }else{
        return a;
    }
}

let r = myFunc(5);
// alert(r);

/* Objects */

const foo = new Object();

const a = "foo",
        b = "bar";

const cart = {
    "Bread":1,
    Milk:2,
    "beer hike":10,
    [a+'_'+b]:"FUUUUUU!",
    [a]:"my string",
    list: {
        a:333,
        b:222
    }
}

cart["butter"] = 1;

cart[b] = "my bar";
cart.Bread = null;

// if(typeof cart.Milk !== "undefined"){
//     alert("Property exist");
// }else{
//     alert("No");
// }

// if(cart.hasOwnProperty("Milk")===false){
//     alert("Property exist")
// }

/* For In */

function printCart(){
    let h = '<ul>';
    for(let k in cart){
        h+=`<li><b>${k}: </b>${cart[k]}</li>`;
    }
    h += '</ul>'
    document.getElementById("rez").innerHTML = h;
}

printCart();

function addInCart(title, qty){
    cart[title] = qty;
    printCart();
}

function removeFromCart(title){
    delete(cart[title]);
    printCart();
}

let cartNew = {};
// for(let k in cart){
//     cartNew[k] = cart[k];
// }

// cartNew = Object.assign({}, cart)

cartNew = JSON.parse(JSON.stringify(cart));

cartNew.Milk = 1000;
cartNew.list.a = 444;


const loader = {
    hide:function(){
        document.getElementById("loader").style.display = "none";
    },
    show(){
        document.getElementById("loader").style.display = "flex";
    }
}

loader.show();


let myCart = {
    "Bread":{
        "price":12.5,
        "qty":1
    },
    "Milk":{
        "price":22.00,
        "qty":2
    },
    get(k){
        return this[k].qty;
    },
    set(k, new_qty){
        this[k].qty = new_qty;
    }
}

console.log(myCart.get("Bread"));