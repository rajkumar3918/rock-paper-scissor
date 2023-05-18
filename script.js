let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sizer = document.getElementById("siszer");
let userImg = document.getElementById("user-img");
let cpImg = document.getElementById("computer-img");
let cpValue = document.getElementById("cpValue");
let usercount = 0;
let cpcount = 0;
let userScore = document.getElementById("userScore");
let cpScore = document.getElementById("cpScore");


sizer.addEventListener('click',()=>{
    userImg.src = "./sisser.png";
    randomImg();
    userImg.classList.toggle("animation");
    cpImg.classList.toggle("animation1");
    if(cpValue.value == "paper"){
        usercount++
        userScore.value = usercount;
        userDiv.classList.add("highlight");
        computerDiv.classList.remove("highlight");


    }else if(cpValue.value == "rock"){
        cpcount++
        cpScore.value = cpcount;
        userDiv.classList.remove("highlight");
        computerDiv.classList.add("highlight");

    }else{

    }
})
paper.addEventListener('click',()=>{
    userImg.src = "./paper.png"
    randomImg()
    userImg.classList.toggle("animation");
    cpImg.classList.toggle("animation1");
    if(cpValue.value == "rock"){
        usercount++
        userScore.value = usercount;
        userDiv.classList.add("highlight");
        computerDiv.classList.remove("highlight");
   
    }else if(cpValue.value == "sisser"){
        cpcount++
        userDiv.style.border = "none";
        userDiv.classList.remove("highlight");
        computerDiv.classList.add("highlight");
    }else{
        
    }
 

    
})
rock.addEventListener('click',()=>{
    userImg.src = "./rock.png"
    randomImg()
    userImg.classList.toggle("animation");
    cpImg.classList.toggle("animation1");
    if(cpValue.value == "sisser"){
        usercount++
        userScore.value = usercount;
        userDiv.classList.add("highlight");
        computerDiv.classList.remove("highlight");
       
    }else if(cpValue.value == "paper"){
        cpcount++
        cpScore.value = cpcount;
        userDiv.classList.remove("highlight");
        computerDiv.classList.add("highlight");
     

    }else{
        
    }
})

function randomImg(){
    let images = [
        {img: "./sisser1.png",value: "sisser"},
        {img: "./rock1.png",value : "rock"},
        {img: "./paper1.png",value : "paper"},

    ]
    var a = images[Math.floor(Math.random()*images.length)];
    cpImg.src = a.img;
    cpValue.value = a.value;

}

// /timer

let sec = 0;
let min = 0;
let misec = 0;
let intervel;
let settime = document.getElementById("settime");
let timer = document.getElementById("timer");
let buttons = document.getElementById("button-container")
let userDiv = document.getElementById("user");
let computerDiv = document.getElementById("computer")
let playAgain = document.getElementById("playAgain");

document.getElementById("start").addEventListener('click', 
function start(){
 intervel = setInterval(() =>{
        document.getElementById("watch").innerHTML = `${min} M : ${sec} S`;
        sec++;
        timer.classList.remove("timer");
        timer.classList.add("timerAfter");
        timer.style.transition = "1s";
        settime.style.display = "none";
        buttons.style.display = "flex";

        if(sec >=60){
            sec = 0;
            min++;
        }
        if(min == settime.value){
            clearInterval(intervel);
            intervel = null;
            if(userScore.value > cpScore.value){
                userDiv.style.width = "100vw";
                computerDiv.style.display = "none";
                userDiv.style.transition = "1s";
                timer.style.display = "none"
                buttons.style.display = "none"
                userImg.src = "https://t3.ftcdn.net/jpg/03/12/81/58/360_F_312815843_CdVm05kiBenU3YmChP1KRIzcblRgTQFV.jpg";
                playAgain.style.display = "block"

            }else if(userScore.value < cpScore.value){
                computerDiv.style.width = "100vw";
                userDiv.style.display = "none"
                computerDiv.style.transition = "1s";
                timer.style.display = "none"
                cpImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0W_WA0QueKc4bt7SUsWU_QHSOcCzz34bOZVe3tUaJwFTCLbw7mLywNlhM0qwNLYijFAM&usqp=CAU"
                playAgain.style.display = "block"

            }else{
                computerDiv.style.width = "100vw";
                userDiv.style.display = "none"
                computerDiv.style.transition = "1s";
                timer.style.display = "none"
                cpImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0W_WA0QueKc4bt7SUsWU_QHSOcCzz34bOZVe3tUaJwFTCLbw7mLywNlhM0qwNLYijFAM&usqp=CAU"
                playAgain.style.display = "block"
            }
            
        }
    },1000)
})
// document.getElementById("stop").addEventListener('click',
// function stop(){
//     clearInterval(intervel);
//     intervel = null;
// })
// document.getElementById("pause").addEventListener('click',
//  function pause(){
//     clearInterval(intervel)
//     hour = 0;
//     min = 0;
//     sec = 0;
//  document.getElementById("watch").innerHTML = '0 H : 0 M : 0 S';})