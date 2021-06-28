
class Cat extends Animal {
    constructor(options){
        super(options);
        this.weigth = options.weigth;
    }
    get nameInfo(){
        return "Cat name: "+this.name;
    }
    get ageInfo(){
        return this.age*5;
    }
    fullInfo(el){
        let r = `<ul>
        <li>Name: ${this.name}</li>
        <li>${this.color}</li>
        <li>${this.age}</li>
        <li>${this.name}</li>
        </ul>`;
        
        el.innerText = r;
    }
}