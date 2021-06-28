/* 1 */

let playList = [
    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
];

let song_list = document.createElement("ol");
  
  // for (let i in playList) {
  //   console.log(+(i)+1);
  //   for (let key in playList[i]) {
  //     console.log(key + ": " + playList[i][key] + ", ");
  //   }
  // }
  playList.forEach((el)=>{
    let li = document.createElement("li");
    li.innerHTML = `<b>Author:</b> ${el.author}, <b>Song:</b> ${el.song}`
      song_list.append(li);
  })

document.body.append(song_list);


/* 2 */
let mainn = document.createElement("div");
mainn.style.width = "100%";
mainn.style.height = "100%";
mainn.style.display = "flex";
mainn.style.justifyContent = "center";
mainn.style.alignItems = "center";


let modalDiv = document.createElement("div");
modalDiv.style.width = "400px";
modalDiv.style.height = "400px";
modalDiv.style.backgroundColor = "red";
modalDiv.style.display = "none";
modalDiv.style.position = "relative";

document.body.append(mainn);
mainn.append(modalDiv);


let open_btn = document.createElement("button");
open_btn.innerText = 'Open';
mainn.append(open_btn);

let close_btn = document.createElement("button");
close_btn.style.position = "absolute";
close_btn.style.top = '50%';
close_btn.style.left = '50%';
close_btn.style.transform = "translate(-50%, -50%)";
close_btn.innerText = 'Close';
modalDiv.append(close_btn);


// open_btn.setAttribute('onclick', 'open()')
// function open(){
//   console.log("hello");
//   modalDiv.style.display="block";
// }
open_btn.onclick = ()=>{ modalDiv.style.display="block"; open_btn.style.display  = "none"}


// close_btn.setAttribute('onclick', 'close()')
// function close(){
//   modalDiv.style.display="none";
// }
close_btn.onclick = ()=>{ modalDiv.style.display="none"; open_btn.style.display  = "block"}




/* 3 */

let traffic_light_wrap = document.createElement("div");
traffic_light_wrap.style.width = "100%";
traffic_light_wrap.style.height = "100%";
traffic_light_wrap.style.display = "flex";
traffic_light_wrap.style.justifyContent = "center";
traffic_light_wrap.style.alignItems = "center";
traffic_light_wrap.style.flexDirection = "column";

let redDiv = document.createElement("div");
redDiv.style.width = "200px";
redDiv.style.height = "200px";
redDiv.style.backgroundColor = "#999";
redDiv.style.borderRadius = "50%";

let yellowDiv = document.createElement("div");
yellowDiv.style.width = "200px";
yellowDiv.style.height = "200px";
yellowDiv.style.backgroundColor = "#999";
yellowDiv.style.borderRadius = "50%";

let greenDiv = document.createElement("div");
greenDiv.style.width = "200px";
greenDiv.style.height = "200px";
greenDiv.style.backgroundColor = "#999";
greenDiv.style.borderRadius = "50%";

let traffic_btn = document.createElement("button");
traffic_btn.innerText = 'Switch color';
traffic_btn.style.marginTop = "20px";

document.body.append(traffic_light_wrap);
traffic_light_wrap.append(redDiv);
traffic_light_wrap.append(yellowDiv);
traffic_light_wrap.append(greenDiv);
traffic_light_wrap.append(traffic_btn);

let clickTimes = 0;

function switchAll() {
  clickTimes++;
  switch (clickTimes) {
    case 1:
      greenDiv.style.backgroundColor = "green";
      yellowDiv.style.backgroundColor = "#999";
      redDiv.style.backgroundColor = "#999";
      break;
    case 2:
      greenDiv.style.backgroundColor = "#999";
      yellowDiv.style.backgroundColor = "yellow";
      redDiv.style.backgroundColor = "#999";
      break;
    case 3:
      greenDiv.style.backgroundColor = "#999";
      yellowDiv.style.backgroundColor = "#999";
      redDiv.style.backgroundColor = "red";
      break;
      case 4:
      greenDiv.style.backgroundColor = "#999";
      yellowDiv.style.backgroundColor = "yellow";
      redDiv.style.backgroundColor = "#999";
      clickTimes = 0;
      break;
  }

}
traffic_btn.onclick = ()=>{switchAll()}


