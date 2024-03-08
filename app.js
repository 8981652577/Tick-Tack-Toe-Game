let boxes=document.querySelectorAll(".box");

let reset=document.querySelector(".btn-reset");

let turnO=true // playerO

let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector(".win-msg");
let new_game=document.querySelector(".btn-new");

let count=0;

const wining_table=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const reset_btn =()=>{
    turnO=true;
    count=0;
    btn_enabled();
    msg_container.classList.add("hide");
}
       

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }

        box.disabled=true;

        checkWinner();

        btn_disabled;

        count=count+1;
        
        if(count=="9")
        {
            drawMsg();
        }

    })
});


const drawMsg=()=>{
    msg.innerText="the game is draw";
    msg_container.classList.remove("hide");
}
const btn_disabled=()=>{
    for(let box of boxes)
    {
         box.disabled=true;
    }
 }
 
 const btn_enabled=()=>{
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
 };

const showMessage=(winner)=>{
        msg.innerText="Congratulations winner is "+winner;
        msg_container.classList.remove("hide");
};

const checkWinner = ()=>{
    for(let pattern of wining_table)
    {
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;


        if(position1 !="" && position2 !="" && position3 !="")
        {
            if(position1===position2 && position2===position3)
            {
                showMessage(position1);
                btn_disabled();
                
            }
        }
        
    }

    
};
    
reset.addEventListener("click",reset_btn);
new_game.addEventListener("click",reset_btn);

