class Chess {
    // cellSize = 50;
    constructor(size){
        this.size = size;
    }
    // chessTable(){
    //     let tbl = document.createElement("div");
    //     tbl.setAttribute("style", "border:1px solid #000;display:grid;grid-template-column: repeat("+this.size+", 1fr);");
    //     let cell = document.createElement("div");
    //     cell.setAttribute("style", "width:"+this.cellSize+"px;height:"+this.cellSize+"px");
    //     for(let i=0;i<this.size;i++){
    //         for(let j=0;j<this.size;j++){
    //             let clon_cell = cell.cloneNode(true);
    //             if((i%2===0 && j%2===0) || (i%2!==0 && j%2!==0)){
    //                 clon_cell.style.backGroundColor = '#999';
    //             }else{
    //                 clon_cell.style.backGroundColor = '#efefef';
    //             }
    //             tbl.append(clon_cell);
    //         }
    //     }
    //     document.body.append(tbl);
    // }
    chessTable(){
        let tbl = document.createElement("div");
        tbl.setAttribute("style", "border:1px solid #000;display:grid;grid-template-column: repeat("+this.size+", 1fr);");
        let cell = document.createElement("div");
        cell.setAttribute("style", "width:50px;height:50px");
        for(let i=0;i<this.size;i++){
            for(let j=0;j<this.size;j++){
                let clon_cell = cell.cloneNode(true);
                if((i%2===0 && j%2===0) || (i%2!==0 && j%2!==0)){
                    clon_cell.style.backGroundColor = '#999';
                }else{
                    clon_cell.style.backGroundColor = '#efefef';
                }
                tbl.append(clon_cell);
            }
        }
        document.body.append(tbl);
    }

}