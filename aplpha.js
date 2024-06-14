// function play(){
    
//     // home section
//  const homeSection =document.getElementById('home-screen');
//  homeSection.classList.add('hidden');

// //   play ground
//      const playSection=document.getElementById('play-ground');
//      playSection.classList.remove('hidden');
//      contionueGame(); 
// }
function handleKyboard(event){
   const playerPressed = event.key;
  console.log('player pressed', playerPressed);

//   stop game if pressed "esc"
   
      if(playerPressed ==='Escape'){
        gameover();
      }
//   get the exprected to press
const currentAlphabetElement = document.getElementById('current-alpohabet');
const currentAlphabet = currentAlphabetElement.innerText;
const exprectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPressed,exprectedAlphabet);
      
    //  check match or not
    if (playerPressed === exprectedAlphabet){
        console.log('you get a point');
        // console.log('you have pressed correctly',exprectedAlphabet);
         
        // const currentScore =document.getElementById('current-score');
        // const newScore =currentScore.innerText;
        // const point=parseInt(newScore);
        // console.log(point)
          const currentScore = getTextElementValueById('current-score');
        const totalpoint = currentScore+1;
        // currentScore.innerText= totalpoint;
         setTextElementValueById('current-score',totalpoint);
        remById(exprectedAlphabet);
        contionueGame();
    }
    else{
        console.log('failed');
        // const currentLife = getElementById('current-life');
        // const newLife =currentLife-1;
        // const life=parseInt(newLife);
        // console.log(life);

        // const totalLife= life -1;
        // if(totalLife === 0){
        //     console.log("You Failed");
        // }
        // currentLife.innerText=totalLife;
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life',updatedLife);
        if(updatedLife === 0){
            gameover();
        }
    }
}
// caputure kaybord control
 document.addEventListener('keyup',handleKyboard);

 function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showId('play-ground');
  

    // reset score and life
    setTextElementValueById('current-life',3);
    setTextElementValueById('current-score',0);
    
    contionueGame();

 }
 function gameover(){
    hideElementById('play-ground');
    showId('final-score');
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    const currentAlphabet = getElementTextById('current-alpohabet');
    remById(currentAlphabet);
 }


function contionueGame(){
    const alphabet =getARandomAlphabet();
    console.log('your random Alphabet',alphabet);
    const currentId =document.getElementById('current-alpohabet');
    currentId.innerText = alphabet;
    setaddBackgroundColortById(alphabet);
    
}
