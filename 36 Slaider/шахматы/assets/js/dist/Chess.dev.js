"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chess =
/*#__PURE__*/
function () {
  // cellSize = 50;
  function Chess(size) {
    _classCallCheck(this, Chess);

    this.size = size;
  } // chessTable(){
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


  _createClass(Chess, [{
    key: "chessTable",
    value: function chessTable() {
      var tbl = document.createElement("div");
      tbl.setAttribute("style", "border:1px solid #000;display:grid;grid-template-column: repeat(" + this.size + ", 1fr);");
      var cell = document.createElement("div");
      cell.setAttribute("style", "width:50px;height:50px");

      for (var i = 0; i < this.size; i++) {
        for (var j = 0; j < this.size; j++) {
          var clon_cell = cell.cloneNode(true);

          if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
            clon_cell.style.backGroundColor = '#999';
          } else {
            clon_cell.style.backGroundColor = '#efefef';
          }

          tbl.append(clon_cell);
        }
      }

      document.body.append(tbl);
    }
  }]);

  return Chess;
}();