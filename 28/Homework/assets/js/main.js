const topPanel = {
    info(text = "Some text here", autoclose = true) {
      this.showPanel(text, "info", autoclose);
    },
    success(text = "Some text here", autoclose = true) {
      this.showPanel(text, "success", autoclose);
    },
    danger(text = "Some text here", autoclose = false) {
      this.showPanel(text, "danger", autoclose);
    },
    warning(text = "Some text here", autoclose = false) {
      this.showPanel(text, "warning", autoclose);
    },
    showPanel(text, type, autoclose) {
      let btn = autoclose
        ? ""
        : '<button onclick="topPanel.closePanel()>&times;</button>';
      let h = `<div id="top_panel" class="panel_${type}">
          <p>${text}</p>${btn}<div></div>`;
      if (document.getElementById("top_panel") !== null) {
        this.closePanel();
      }
      document
        .getElementsByTagName("body")[0]
        .insertAdjacentHTML("afterbegin", h);
      if (autoclose) {
        const _this = this;
        setTimeout(function () {
          _this.closePanel();
        }, 3000);
      }
    },
    closePanel() {
      document.getElementById("top_panel").remove();
    },
  };

/*
{
    title:'',
    price:0.00,
    qty:0,
    buy:false
}
*/
let CART = [
    {
        title: 'milk',
        price: 21.23,
        qty: 2,
        buy: false
    },
    {
        title: 'beer',
        price: 35.28,
        qty: 3,
        buy: false
    }
];

const cartAction = {
    add: function($prod){
        $prod.buy = false;
        let isset_prod = CART.find(function(el){
            if(el.title==$prod.title){
                return el;
            }
        });
        if(isset_prod!==undefined){
            let new_qty = $prod.qty + isset_prod.qty;
            let prod_ind = CART.findIndex(function(el){
                return el.title===$prod.title;
            });
            CART[prod_ind].qty = new_qty;
            CART[prod_ind].buy = false;
        }else{
            CART.push($prod);
        }
    },
    buyed(k){
        if(CART[k].buy){
            CART[k].buy = false;
        }else{
            CART[k].buy = true;
        }
        printCart();
    },
    remove(k){
        if(!CART[k].buy){
            if(confirm(`Realy delete product?`)){
                // delete(CART[k]);
                CART.splice(k, 1);
                printCart();
            }
        }else{
            topPanel.warning('Product already buyed', true);
        }
    },
    maxTotal(){
        let max_total = CART[0].price*CART[0].qty;
        for(let i=1; i<CART.length; i++){
            if((CART[i].price*CART[i].qty)>max_total){
                max_total = CART[i].price*CART[i].qty;
                max_key = i;
            }
        }
        return {
            title:CART[max_key].title,
            total:max_total
        };
    }
}

function addToCart(){
    let  title = document.getElementById("prod_name").value;
    let  price =parseFloat(document.getElementById("prod_price").value);
    let  qty =  parseInt(document.getElementById("prod_qty").value);
    let valid = true,
        errMsg = [];
    if(title===""){
        valid = false;
        errMsg.push("Enter product name.")
    }
    if(isNaN(price) || price<=0){
        valid = false;
        errMsg.push("Enter product price.")
    }
    if(qty<=0){
        valid = false;
        errMsg.push("Enter product qty.")
    }

    if(valid){
       cartAction.add({
        title: title,
        price: price,
        qty: qty,
    });
        document.getElementById("prod_name").value = '';
        document.getElementById("prod_price").value = '';
        document.getElementById("prod_qty").value = '1';
        document.getElementById("prod_name").focus();
        printCart();
    }else{
        topPanel.warning(errMsg.join(' '), true);
    }
}

function maxTotalProduct(){
    const prod = cartAction.maxTotal();
    let rez =  `
    <p><b>${prod.title}</b> - ${prod.total.toFixed(2)}</p>
    `;
    document.getElementById("max_prod").innerHTML = rez;
}



function printCart(){
    let rez = '<ul>';
    let cart_total = 0;
    for(let i = 0; i<CART.length; i++){
        const prod = CART[i];
        const is_buy = prod.buy?'<span class="badge bg-success">&#10003;</span>':'<span class="badge bg-danger">&times;</span>';
        const prod_total = prod.qty*prod.price;
        cart_total += prod_total;
        rez += `
        <li class="mb-4">
           ${is_buy} <b>${prod.title}</b> ${prod.qty} x ${prod.price.toFixed(2)} = ${prod_total.toFixed(2)}<br>
           <button type="button" class="btn btn-info btn-sm mr-4" onclick="cartAction.buyed(${i})">Buyed</button>
           <button type="button" class="btn btn-danger btn-sm" onclick="cartAction.remove(${i})">Delete</button>
        </li>`;
    }
    rez += `<li><b>TOTAL: </b>${cart_total.toFixed(2)}</li>`
    rez += `<li><b>Avg: </b>${(cart_total/CART.length).toFixed(2)}</li>`
    rez += '</ul>';
    document.getElementById("cart_list").innerHTML = rez;
}

printCart();

/* 3 */

document.write(`<div><b>3.</b></div>`);

let styles = [
    {
        name: "font-size",
        value: "35px"
    },
    {
        name: "color",
        value:"red"
    },
    {
        name: "font-family",
        value:"Arial"
    }
];

function styleText(arr, text){
    document.write('<p style = "');
    for (let i in arr) {
      document.write(arr[i].name + ":" + arr[i].value + ";");
    }
    document.write('">' + text + "</p>");
  };

  styleText(styles, "dfekjkekfjekef");



/* 4 */

let CLASSES = [
    {
        name: "Math Class",
        seats: 18,
        faculty: "FAIT"
    },
    {
        name: "English Class",
        seats: 12,
        faculty: "EFAR"
    },
    {
        name: "Prog Class",
        seats: 16,
        faculty: "FAIT"
    },
    {
        name: "Music Class",
        seats: 14,
        faculty: "ORAT"
    }
];
document.write(`<div><b>4. Список всех аудиторий</b></div>`);

function printClasses(auditories){
    if(auditories.length !== 0){
        let h = '<ul>';
        auditories.forEach((auditory)=>{
            h += `<li>${auditory.name}, max seats: ${auditory.seats}, ${auditory.faculty}</li>`
        })
        h += '</ul>'
        document.write(`<div>${h}</div>`);
    } else{
        document.write(`<div>Аудитории не найдены</div>`);
    }
}
printClasses(CLASSES);
document.write(`<br>`);

document.write(`<div><b>4.1 Аудитории для указанного факультета</b></div>`);
function SearchByFaculty(auditories, name){
    let rez = auditories.filter((auditory)=>(
        auditory.faculty === name
    ));
    return printClasses(rez);
}
SearchByFaculty(CLASSES, 'FAIT');
SearchByFaculty(CLASSES, 'DWDW');
document.write(`<br>`);

document.write(`<div><b>4.2 Аудитории, которые подходят для переданной группы</b></div>`);
const group = {
    name: "Math Class",
    students: 12,
    faculty: "FAIT"
}

function SearchByGroup(auditories, group){
    let rez = auditories.filter((auditory)=>(
        auditory.faculty === group.faculty && 
        auditory.seats >= group.students
    ));
    return printClasses(rez);
}
SearchByGroup(CLASSES, group);

document.write(`<br>`);

document.write(`<div><b>4.3 Сортировка по местам</b></div>`);

function sortBySeats(auditories){
    let rez = auditories.sort((a,b)=> b.seats-a.seats);
    return printClasses(rez);

}
sortBySeats(CLASSES);

document.write(`<br>`);

document.write(`<div><b>4.4 Сортировка по названию</b></div>`);

function sortByName(auditories){
    let rez = auditories.sort((a,b)=>{
        if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
    });
    return printClasses(rez);

}
sortByName(CLASSES);

