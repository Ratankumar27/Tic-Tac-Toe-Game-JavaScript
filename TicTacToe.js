let contain=document.querySelector(".container");
let game=document.querySelector(".game");
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#Reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]  ];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }    
    box.disabled=true;

    checkWinner();
    })
   
})


const reset=()=> {
    let turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}


const enableboxes =() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}  

const disbleboxes =() => {
    for(let box of boxes){
        box.disabled=true;

    }
}  

const showWinner = (winner) => {
    msg.innerText=`THE WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disbleboxes();
} 

const checkWinner=() => {
    for(let pat of winPatterns){
       let posval1= boxes[pat[0]].innerText;
       let posval2= boxes[pat[1]].innerText;
       let posval3= boxes[pat[2]].innerText; 

    if(posval1!="" && posval2 !="" && posval3!=""){
        if(posval1===posval2 && posval1===posval3){
            console.log("winner", posval1);
            showWinner(posval1);
        }
    }   
}

}

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);