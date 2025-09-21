function randomColor(){
        const hex = "0123456789ABCDEF" ;
        let color = "#" ;
        for(let i = 0; i < 6 ; i++){
            color += hex[Math.floor(Math.random()*16)] ;
        };
        return color 
    };

const body = document.querySelector(".main") ;
const startBtn = document.querySelector("#start") ;
const stopBtn = document.querySelector("#stop") ;
let intervalId ;

const startChange = function () {
        function bodyColor(){
            body.style.backgroundColor = randomColor() ;
        };
        if (!intervalId){
        intervalId = setInterval(bodyColor , 1000); 
        };
    };

const stopChange = function (){
    clearInterval(intervalId);
    intervalId = null ;
};

startBtn.addEventListener("click", startChange )
stopBtn.addEventListener("click" , stopChange )
