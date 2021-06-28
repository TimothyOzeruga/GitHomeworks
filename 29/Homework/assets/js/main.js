/* 1 */

const Circlee = new Circle(8);

console.log(Circlee);
console.log(Circlee.radiusInfo);
document.getElementById("radiusInfo").innerText = `Радиус окуружности = ${Circlee.radiusInfo}`;
console.log(Circlee.diametrInfo);
document.getElementById("diametrInfo").innerText = `Диаметр окуружности = ${Circlee.diametrInfo}`; 
console.log(Circlee.circleArea());
document.getElementById("circleArea").innerText = `Площадь окуружности = ${Circlee.circleArea()}`;
console.log(Circlee.circumference());
document.getElementById("circumference").innerText = `Длина окуружности = ${Circlee.circumference()}`; 

/* 2 */

class Marker {
    constructor(color, quantity){
            this.color = color;
            this.quantity = quantity;
    }
    print(line) {
      let t = document.getElementById("text");
      let ti = document.getElementById("text_info");
      for (let i = 0; i < line.length; i++) {
        if (this.quantity != 0) {
          if (line[i] == " ") {
            this.quantity += 0.5;
          }
          t.innerHTML += line[i];
          t.style.color = this.color;
          this.quantity -= 0.5;
        } else {
          ti.innerText += "Marker is over";
          break;
        }
      }
    }
  }
  
  class FilledMarker extends Marker {
    fill(p) {
      if (p > 100) {
        p = 100;
      } else {
        this.p += p;
      }
    }
  }

  let marker = new FilledMarker("#0f0", 20);
  
  marker.print(`List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department Lorem ipsum rake a repoes`);



/* 3 */

class Employee {
    constructor(name, position, department, salary) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.salary = salary;
      }
}

let WorkersList = [
    new Employee("John Smith", "Manager", "Sales", 2500),
    new Employee("Bill Agent", "Frontend developer", "Developers", 4000),
    new Employee("Ivan Rudskoy", "Backend developer", "Developers", 4000),
    new Employee("Jeck Ward", "QA", "Testers", 3500)
]


class EmpTable {
    constructor(arr){
        this.arr = arr;
    }
    getHtml(){
        let table = document.getElementById("table");
        let heading_tr = document.createElement("tr");
        table.append(heading_tr);
    
        let th1 = document.createElement("th");
        th1.innerText = "Name";
        let th2 = document.createElement("th");
        th2.innerText = "Position";
        let th3 = document.createElement("th");
        th3.innerText = "Department"
        let th4 = document.createElement("th");
        th4.innerText = "Salary";
    
        heading_tr.append(th1);
        heading_tr.append(th2);
        heading_tr.append(th3);
        heading_tr.append(th4);
    
        // for(let i=0; i<=this.arr.length; i++){
        //     let main_tr = document.createElement("tr");
        //     table.append(main_tr)
        //     for(let j=0; j<=this.arr[i].length; j++){
        //         let td = document.createElement("td");
        //         td.textContent = this.arr[i][j];
        //         main_tr.append(td);
        //     }
        // }
        let arr_th = ["Name", "Position","Department","Salary"];
        for (let i in this.arr) {
            let main_tr = document.createElement("tr");
            table.append(main_tr);
            for (let j in this.arr[i]) {
                let td = document.createElement("td");
                td.textContent = this.arr[i][j];
                main_tr.append(td);
            }
          }
    }
}

let Workers = new EmpTable(WorkersList);
Workers.getHtml();