const rock=1;
const paper=2;
const scissor=3;



const cpuImg=document.getElementById('shift-cpu')
const userImg=document.getElementById('shift-user')

const userRock=document.getElementById('rock');
const userPaper=document.getElementById('paper');
const userScissor=document.getElementById('scissor');
const result=document.getElementById('result')
const user=document.getElementById('shift-user');
const machine=document.getElementById('shift-cpu');

let shiftMachine=0;
let shiftUser=0;

let countMachine=0;
let countUser=0;

const pointsUser= document.getElementById('point-user');
const pointsCpu= document.getElementById('point-cpu');

userRock.addEventListener('click', chooseRock);
userPaper.addEventListener('click',choosePaper);
userScissor.addEventListener('click',chooseScissor);


const getRandomNumber =  (min, max)  => Math.round(Math.random() * (max - min) + min);


function chooseRock () {
    userImg.src='./assests/piedra.jfif'
    document.getElementById('shift-user').textContent='Usuario Eligio Piedra';
    shiftUser=rock;
    cpuImg.src=choosesCpu ();
    result.textContent=validateGame();
    updateScore();
    showWinner ()
}
function choosePaper () {
    
    userImg.src='./assests/mano.jfif'
    document.getElementById('shift-user').textContent='Usuario Eligio Papel';
    shiftUser=paper;
    cpuImg.src=choosesCpu ();
    result.textContent=validateGame();
    updateScore();
    showWinner ()
        
}
function chooseScissor () {
    
    userImg.src='./assests/tijera.jfif'
    document.getElementById('shift-user').textContent='Usuario Eligio Tijera';
    shiftUser=scissor;
    cpuImg.src=choosesCpu ();
    result.textContent=validateGame();
    updateScore();
    showWinner ()

    
}

function choosesCpu () {
    let shiftCpu =getRandomNumber(1,3);
    

    if(shiftCpu === rock){
        shiftMachine=rock;
        return '/assests/piedra.jfif';

    }else if (shiftCpu === paper) {
        shiftMachine=paper;
        return '/assests/mano.jfif';


    }else{
        shiftMachine=scissor;
        return '/assests/tijera.jfif';
    }

}

function validateGame () {

    if(shiftUser === shiftMachine){

        return 'Es un empate'
    }else if (  (shiftUser === rock && shiftMachine=== scissor) || (shiftUser === paper && shiftMachine === rock) || (shiftUser === scissor && shiftMachine === paper)){

        countUser++;
        return 'Usuario gana'
    }else{

        countMachine++;
        return 'Maquina gana'
    }

}

function showWinner (){

    if(countUser === 3){

        result.textContent=('El Ganador del juego es el Usuario');
        setTimeout(reload,2000)
    }else if (countMachine === 3){

        result.textContent=('El Ganador del juego es la maquina');
        setTimeout(reload,2000)
    }
}


function updateScore() {
    pointsUser.innerHTML = `<strong> ${countUser}</strong>`;
    pointsCpu.innerHTML = `<strong> ${countMachine}</strong>`;
}


function reload(){

    location.reload()
}