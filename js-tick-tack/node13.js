 let boxes = document.querySelectorAll(".box")
  let resetBtn = document.querySelector("#resetBtn")
  let newgameBtn = document.querySelector("#new-btn")
  let msgContainer = document.querySelector(".msg-container")
  let msg = document.querySelector("#msg")


  let turnO = true; 

  const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  ];

  const resetGame = ()=>{
     turnO = true;
     enableBoxes();
     msgContainer.classList.add("hide");
  }
  boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("The box was clicked");
  
       if(turnO === true){
        box.innerText = "O";
        box.style.color = "green";
        turnO = false;
       }
       else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       checkWineer();
    });
  });

const disableBoxes = () =>{
 for(let box of boxes){
  box.disabled = true;
 }
}

const enableBoxes = () =>{
  for(let box of boxes){
   box.disabled = false;
   box.innerText = "";
  }
 }

  const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`; //function define
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
  const checkWineer = () => {
    for(let pattern of winPattern){ 
    //     console.log(pattern[0], pattern[1],pattern[2]);
    //    console.log(
    //      boxes[pattern[0]].innerText,
    //      boxes[pattern[1]].innerText, 
    //      boxes[pattern[2]].innerText
    //      );
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val!= "", pos3val!= ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner" , pos1val);
                
                showWinner(pos1val);            //function call
            }
        }
  };
}
newgameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);