
let menu = document.querySelector(".menu-button span").onclick= function(){

    let yourName = prompt("What's Your Name ")
    
    if(yourName == "" || yourName == null){
        document.querySelector(".names span").innerHTML = "UnKnown";
    } else{
        document.querySelector(".names span").innerHTML = yourName;
    }

    document.querySelector(".menu-button").remove();
}
// Give Every Pictuer Order 

let duraction = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);


let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange) ;


if(document.querySelector(".game-block").classList.contains("theSame")){
    let end = document.querySelector(".header");
    end.classList.add("menu-button");
    end.innerHTML = " <pre>             Congratulations🎊🎉<br>Please Reload The Page If You Want To Play Again. " ;
    end.style.color= "cyan";
    end.style.backgroundColor= "#000000eb";
    end.style.display= "flex";
    end.style.justifyContent= "center";
    end.style.width= "100%";
    end.style.alignItem= "center";
    end.style.fontSize= "30px ";
    document.getElementById("fanfare").play();
     }



function click(element){

    element.classList.add('do-deg');

    let allelement = blocks.filter((el) => el.classList.contains("do-deg"));

    if(allelement.length === 2){

        stopClick();
        checkMatchBlock(allelement[0],allelement[1]);

    }
}
function stopClick(){

    blocksContainer.classList.add("is-clicking");

    setTimeout(() => {
        blocksContainer.classList.remove("is-clicking");
    },duraction);
}
function checkMatchBlock(firstBlock,secondBlock){

    let tries = document.querySelector(".tries span")
    if(firstBlock.dataset.tech === secondBlock.dataset.tech){
      
        firstBlock.classList.remove("do-deg");
        secondBlock.classList.remove("do-deg");

        setTimeout(() => {
        firstBlock.classList.add("theSame");
        secondBlock.classList.add("theSame");
        },);

        document.getElementById("success").play();
    document.getElementById("fanfare").play();


        

      

    }else{
        tries.innerHTML = +(tries.innerHTML) + 1;

        setTimeout(() => {
            firstBlock.classList.remove("do-deg");
            secondBlock.classList.remove("do-deg");
    
        }, duraction);
        document.getElementById("error").play();
        

    }
}
blocks.forEach((block,index) =>{
    block.style.order = orderRange[index];


    block.addEventListener("click",function () {
        click(block);

    });
    

});

function shuffle(array){
    
    let current = array.length,random,temp;
    
    while(current > 0){
        
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
        
    }
    return array;
}




