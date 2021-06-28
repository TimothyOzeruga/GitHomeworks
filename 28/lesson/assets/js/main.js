let car = {
    title:"Nissan",
    model:"Note",
    color:"Red",
    "Average speed":130,
    Max_speed:280,
    year:2021,
    doors:5,
    123:"Lorem"
}

let car2 = {
    title:"Audi",
    model:"Note",
    color:"Blue",
    "Average speed":150,
    Max_speed:280,
    year:2021,
    doors:2,
    123:"Lorem",
    getSpeed(){
        return this["Average speed"];
    },
    setSpeed(speed){
        this["Average speed"] = speed;
    }
}



function carInfo(auto){
    let rez = '<ul>';
    for(let key in auto){
        console.log(key, auto[key], typeof auto[key]);
        if(typeof auto[key] !== "function"){
            rez += `<li><b>${key}:</b>${auto[key]}</li>`;
        }
    }
    rez += '</ul>'
    document.getElementById("car_info").innerHTML = rez;
}
carInfo(car);

car2.setSpeed(300);
console.log(car2.getSpeed());

function getSkorost(){
    let s_fld = document.getElementById("speed").value
    const s = (s_fld!=="")?parseInt(s_fld):0;
    car2.setSpeed(s);
    s_fld = "";
    topPanel.success("Speed updated");
    // alert(car2.getSpeed());
}


const topPanel = {
    info(text="Some text here", autoclose=false){
        this.showPanel(text, 'info', autoclose)
    },
    success(text="Some text here", autoclose=false){
        this.showPanel(text, 'success', autoclose)
    },
    danger(text="Some text here", autoclose=false){
        this.showPanel(text, 'danger', autoclose)
    },
    warning(text="Some text here", autoclose=false){
        this.showPanel(text, 'warning', autoclose)
    },
    showPanel(text, type, autoclose){
        let btn = (autoclose)?'':`<button onclick="topPanel.closePanel()">&times;</button>`;
        let h = `<div id="top_panel" class="panel_info">
        <p>${text}</p>${btn}</div>`;
        if(document.getElementById("top_panel")!==null){
            this.closePanel();
        }
        document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin', h);
        if(autoclose){
            const _this = this;
            setTimeout(function(){
                _this.closePanel();
            }, 3000);
        }
    },
    closePanel(){
        document.getElementById("top_panel").remove();
    }
}


// topPanel.success("fefef ef efefwf", false);

function getRand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let myArr = [];

function fillArr(){
    const qty = 10,
        min = 1,
        max = 100;
    for(let i = 0; i < qty;i++){
        myArr.push(getRand(min, max));
    }
    console.log(myArr);
    printArr(myArr);
}

function printArr(arr){
    let r = arr.join(', ');
    // for(let i = 0; i < arr.length;i++){
    //     r += arr[i]+' ';
    // }
    document.getElementById("my_array").innerText = r;
}

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }
  countup(5);

  