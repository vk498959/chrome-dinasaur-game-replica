//important variables
const pc=document.getElementById("pc");
const player=document.getElementById("player");
const showScore=document.getElementById("showScore");
var score=0;
var left=0;
var pcbox=0;
var vpcMargin=0;
var speed=50;

//controlling via keys

function controlPlayer(){
window.addEventListener('keydown',(e)=>{
    e.preventDefault();
    if(e.key=="ArrowRight"){
        if(left<950)
        left=left+10;
        player.style.marginLeft=left+"px";
    }
    if(e.key=="ArrowLeft"){
        if(left>0)
        left=left-10;
        player.style.marginLeft=left+"px";
    }
    if(e.key=="ArrowUp"){
        player.style.marginTop="0px";
        setTimeout(()=>{
            player.style.marginTop="200px"; 
            },2000);
        
    }
    if(e.key=="ArrowDown"){
        player.style.marginTop="200px";
    }
});   
}

//random function for height selection
function frandom(){
    var vrandom=Math.floor(Math.random()*110)+40;
    var pcMargin=250-vrandom;
    return({
        random:vrandom,
        margin:pcMargin
    });
}

//main game run from here
setInterval(()=>{
    
    fscore();
    if(vpcMargin<1000){
    pc.style.marginRight=vpcMargin+"px";
    vpcMargin=vpcMargin+10;
    }else{
        pcPlayer();
        vpcMargin=0;
        speed=speed-1
    }

    
},speed);

//pc box 
function pcPlayer(){
    pcbox=frandom();
    pc.style.marginTop=pcbox.margin+"px";
    pc.style.height=pcbox.random+"px";
    pc.style.width="25px";
}


//score counting
function fscore(){
    if(((1000-vpcMargin)==(left))&&(player.style.marginTop!="0px")){
        score=0;
        showScore.innerText="Game over";

    }else{
        score++;
        showScore.innerText="Score:- "+score;

    }
    
}
//function run at starting
controlPlayer();
pcPlayer();