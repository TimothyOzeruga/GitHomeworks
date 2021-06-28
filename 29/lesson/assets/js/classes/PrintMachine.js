class PrintMachine{
    constructor(options){
        this.size = options.size;
        this.color = options.color;
        this.family = options.family
    }
    print(text){
        let style = `font-size:${this.size}px;color:${this.color};font-family:${this.family};`;
        document.write(`<p style="${style}">${text}</p>`);
    }
}

