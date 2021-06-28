
class Animal {
    constructor(options){
        this.name = options.name;
        this.color = options.color;
        this.age = options.age;
    }
    get nameInfo(){
        return this.name;
    }
    set ageInfo(newAge){
        this.age = newAge;
    }
    get ageInfo(){
        return this.newAge;
    }
}