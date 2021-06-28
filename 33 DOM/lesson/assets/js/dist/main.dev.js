"use strict";

// const p_list = document.getElementsByClassName("foo");
// for(let i=0;i<p_list.length;i++){
//     p_list[i].style.color='greem';
// }
// for(let p_item of p_list){
//     p_item.style.color='blue';
// }

/* 1 */
// let p = document.createElement('p');
// let btn = document.createElement("button");
// btn.innerText = 'Toggle text';
// // btn.setAttribute('onclick', 'toggleText()')
// btn.onclick = ()=>{p.hidden = !p.hidden;};
// document.body.prepend(btn);
// p.innerText = 'Lorem ipsum';
// document.body.prepend(p);
// // function toggleText(){
// //     p.hidden = !p.hidden;
// //     // if(p.hidden===false){
// //     //     p.hidden = true;
// //     // }else{
// //     //     p.hidden = false;
// //     // }
// // }

/* 2 */
var pBar = document.createElement("div");
pBar.style.border = '1px solid #999';
pBar.style.height = '60px';
pBar.style.marginBottom = '10px';
pBar.style.backgroundColor = '#efefef';
var bar = document.createElement("div");
bar.setAttribute('style', 'width:20%;height:100%;background-color:red;');
pBar.prepend(bar);
document.body.prepend(pBar);
var btn = document.createElement("button");
btn.innerText = 'Add 5%';

btn.onclick = function () {// let new_width = parseInt(bar.style.width) + 5;
  // if(new_width <= 100){
  //     bar.style.width = new_width + '%';
  // }
  // bar.style.width = parseInt(bar.style.width) + 5+'%';
};

document.body.append(btn);