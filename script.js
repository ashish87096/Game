let CompMove = '';
let RandNum;
let result='';
let UserMove='';

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

localStorage.setItem('score', JSON.stringify(score));

/*document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;*/

function updateScoreElement() {
    document.getElementById('wins').innerText = `${score.wins}`;
    document.getElementById('losses').innerText = `${score.losses}`;
    document.getElementById('ties').innerText = `${score.ties}`;
    document.getElementById('quesone').style.border = '0px solid black';
    document.getElementById('wins').style.backgroundColor = 'black';
    document.getElementById('result').style.backgroundColor = 'rgba(49, 46, 46, 0.555)';
    document.getElementById('result').innerText = 'Result';
    document.getElementById('quesone').src = 'images/question mark.png';
    document.getElementById('questwo').src = 'images/question mark.png';
    /*document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;*/
  }

function FunRandNumGen () {
    RandNum = Math.random();
    FunCompMove();
}
//FunRandNumGen();
function FunCompMove(){
    if(RandNum>=0 && RandNum<1/3){
        CompMove = 'Rock';
    }
    else if(RandNum>=1/3 && RandNum<2/3){
        CompMove = 'Paper';
    }
    else if(RandNum>=2/3 && RandNum<1){
        CompMove = 'Scissors';
    }
}
//FunCompMove();

function FunRock(){
    UserMove = 'Rock';
    document.getElementById('quesone').src = `images/${UserMove}.png`;
}
function FunPaper(){
    UserMove = 'Paper';
    document.getElementById('quesone').src = `images/${UserMove}.png`;
}
function FunScissors(){
    UserMove = 'Scissors';
    document.querySelector('#quesone').replaceWith =`<img class="img" src="images/${UserMove}.png" alt="Rock">`
}

//FunUserMove();
function FunDispMoves(){
    console.log(`Computer Chooses:${CompMove}`);
    console.log(`User Chooses:${UserMove}`);
    FunComp();
}

//FunDispMoves();

function FunComp(){
    if(CompMove === UserMove){
        result = 'Tie';
        score.ties +=1;
    }
    else if(CompMove === 'Rock' && UserMove ==='Scissors' || CompMove ==='Paper' && UserMove ==='Rock' || CompMove ==='Scissors' && UserMove ==='Paper'){
        result = 'Computer Wins';
        score.losses +=1;
    }
    else if(CompMove === 'Rock' && UserMove ==='Paper' || CompMove ==='Paper' && UserMove ==='Scissors' || CompMove ==='Scissors' && UserMove ==='Rock'){
        result = 'You Win';
        score.wins +=1;
    }
    console.log(result)
    UserImg();
}
//FunComp();
function UserImg(){
    document.getElementById('quesone').src = `images/${UserMove}.png`;
    document.getElementById('questwo').src = `images/${CompMove}.png`;
    document.getElementById('result').innerText = `${result}`;
    FunTable();
}
function FunTable(){
    console.log(score.wins);
    console.log(score.losses);
    console.log(score.ties);
    document.getElementById('wins').innerText = `${score.wins}`;
    document.getElementById('losses').innerText = `${score.losses}`;
    document.getElementById('ties').innerText = `${score.ties}`;
    FunStyle();
}
function FunStyle(){
    if(result == 'You Win'){
        document.getElementById('quesone').style.border = '5px solid green';
        document.getElementById('wins').style.backgroundColor = 'green';
        document.getElementById('result').style.backgroundColor = 'green';
    }
    else{
        document.getElementById('quesone').style.border = '0px solid black';
        document.getElementById('wins').style.backgroundColor = 'black';
        document.getElementById('result').style.backgroundColor = 'rgba(49, 46, 46, 0.555)';
    }
}
