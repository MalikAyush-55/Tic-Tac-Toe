let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let rg = document.querySelector(".btn");
let ng = document.querySelector(".newbtn");

let turno = true;

const winningcombination = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const newgame = ()=>{
    for(let box of boxes){
        box.innerText = "";
    }
    winner.innerText = "";
}
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
    }
    newgame();
}
const checkwinner = (el)=>{
    for(let c of winningcombination){
        let v1 = boxes[c[0]].innerText;
        let v2 = boxes[c[1]].innerText;
        let v3 = boxes[c[2]].innerText;
        if(v1 != "" && v2 != "" && v3 != ""){
            if(v1 === v2 && v2 === v3){
                winner.innerText = `Winner is ${el.innerText}`;
                disableboxes();
                break;
            }
        }
    }
  
}
boxes.forEach((el) => {
    el.addEventListener("click", ()=>{
        if(turno){
            el.innerText = "O";
            turno = false;
            el.disabled = true;
        }
        else{
            el.innerText = "X";
            turno = true;
            el.disabled = true;
        }
        checkwinner(el);
    });
});
rg.addEventListener("click", ()=>{
    enableboxes();
}
);
ng.addEventListener("click", ()=>{
    enableboxes();
}
)



