class Circle {
    constructor(r){
        this.r = r;
    }
    get radiusInfo(){
        return this.r;
    }
    set radiusInfo(newR){
        this.r = newR;
    }
    get diametrInfo(){
        return this.r * 2;
    }
    circleArea(r=this.r){
        let radius = Math.PI*Math.pow(r, 2);
        return radius;
    }
    circumference(r=this.r){
        let circumferencee = 2*Math.PI*r;
        return circumferencee;
    }
}



