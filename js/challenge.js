document.addEventListener("DOMContentLoaded"),(e)=>{
    //gets element 

const counter=document.getElementById('counter')
//runs the timer functions over 1000 milliseconds 
const time=setInterval(timeHandler,1000) 
const pauseButton=document.getElementById('pause')
pauseButton.addEventListener("click", handlePause)
}

function handlePause(e){
if (e.target.innerText==='pause'){
(e.target.innerText='resume') && (clearInterval(time))
}else{
(setInterval(timeHandler,1000)) && (e.target.innerText='pause')
};

function timeHandler(){
    counter.innerText=++counter.innerText
};
}


