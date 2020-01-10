const startButton = document.getElementById('startButton');
const indexTitle  = document.getElementById('indexTitle');
var totalTime     = 10;
var totalScore    = 0;

var colorList = ["blue", "blue", "red", "red"];
startButton.addEventListener('click', function startTheGame(){
        const container = document.getElementById('container');

        container.removeChild(startButton);
        container.removeChild(indexTitle);

        containerFunction();
    
        SimilarColorsGame(); 
})

function containerFunction() {

    const span = document.createElement('span');

    const createTitle     = document.createElement('div');
    createTitle.setAttribute('id', 'title');
    const createGameInfo  = document.createElement('div');
    createGameInfo.setAttribute('id', 'gameInfo');
    const createCardsArea = document.createElement('div');
    createCardsArea.setAttribute('id', 'cardsArea');
    const createTime      = document.createElement('div');
    createTime.setAttribute('id', 'time');
    const createScore     = document.createElement('div');
    createScore.setAttribute('id', 'score');
    
    span.textContent = 'SIMILAR COLORS GAME';

    createTitle.appendChild(span);

    const scoreFirstSpan = document.createElement('span');
    const scoreSecondSpan = document.createElement('span');
    scoreFirstSpan.textContent = "SCORE : ";

    const timeFirstSpan = document.createElement('span');
    const timeSecondSpan = document.createElement('span');
    timeFirstSpan.textContent ="TIME : ";

    container.appendChild(createTitle);
    container.appendChild(createGameInfo);
    container.appendChild(createCardsArea);
   

    createGameInfo.appendChild(createScore);
    
    createGameInfo.appendChild(createTime);

    createScore.appendChild(scoreFirstSpan);
    createScore.appendChild(scoreSecondSpan);

    createTime.appendChild(timeFirstSpan);
    createTime.appendChild(timeSecondSpan);

    
}

function SimilarColorsGame(){
    const cardsArea  = document.getElementById('cardsArea');
    const titleDiv   = document.getElementById('title');
    const timeValue  = document.getElementById('time').lastChild;
    const scoreValue = document.getElementById('score').lastChild;

    // Time, Game Completed & Game Over
    const scoreDiv   = document.getElementById('score');
    const timeDiv    = document.getElementById('time');

    const gameOver   = document.createElement("div") ;
    gameOver.setAttribute("id", "gameOver");
    gameOver.textContent = "GAME OVER!";

    const gameCompleted   = document.createElement("div") ;
    gameCompleted.setAttribute("id", "gameCompleted");
    gameCompleted.textContent = "WELL DONE!";

    var yourScore = document.createElement("div");
    yourScore.setAttribute("id", "yourScore");


    const playAgain = document.createElement("button");
    playAgain.setAttribute("id", "playAgain");
    playAgain.textContent = "PLAY AGAIN";

    
    var copyOfColorList = [];

    for(var i = 0; i < colorList.length; i++){
        copyOfColorList[i] = colorList[i];
    }
    var score = 0;
    // Craeting elements with random colors from color list

    for (var i = colorList.length; i >= 1; i--){
        var randomItem = Math.floor(Math.random() * i);
        var randomColor  = copyOfColorList[randomItem];
        var square = document.createElement('div');
        square.setAttribute("id", ("square" + i));
        square.setAttribute("class", "square");
        square.setAttribute("name", randomColor);
        cardsArea.appendChild(square);
        copyOfColorList.splice(randomItem, 1);
        console.log(randomColor);
    }

    scoreValue.textContent = totalScore;
    timeValue.textContent  = totalTime + "s";
    var timeInterval = setInterval(() => {
            totalTime = totalTime - 1;
            timeValue.textContent  = totalTime + "s";
            if((score == 200 && colorList.length == 4)){
                // Level 2
                totalScore = totalScore + totalTime * 100;
                var colors = ["blue", "blue", "red", "red","green" ,"green"];
                createLevels(colors);
            }
            else if((score == 300 && colorList.length == 6)){
                // Level 3
                totalScore = totalScore + totalTime * 100;
                colors = ["blue", "blue", "red", "red","green" ,"green", "yellow", "yellow"];
                createLevels(colors);
            }
            else if((score == 400 && colorList.length == 8)){
                // Level 4
                totalScore = totalScore + totalTime * 100;
                colors = ["blue", "blue", "red", "red","green" ,"green", "yellow", "yellow", "orange", "orange"];
                createLevels(colors);
            }
            else if((score == 500 && colorList.length == 10)){
                // Level 5
                totalScore = totalScore + totalTime * 100;
                colors = ["blue", "blue", "red", "red","green" ,"green", "yellow", "yellow", "orange", "orange", "purple", "purple"];
                createLevels(colors);
            }
            else if((score == 600 && colorList.length == 12)){
                // Level 6
                totalScore = totalScore + totalTime * 100;
                colors = ["blue", "blue", "red", "red","green" ,"green", "yellow", "yellow", "orange", "orange", "purple", "purple",
                            "cyan", "cyan"];
                createLevels(colors);
            }
            else if((score == 700 && colorList.length == 14)){
                // Level 7
                totalScore = totalScore + totalTime * 100;
                colors = ["blue", "blue", "red", "red","green" ,"green", "yellow", "yellow", "orange", "orange", "purple", "purple",
                            "cyan", "cyan", "white", "white"];
                createLevels(colors);

            }else if ((score == 800 && colorList.length == 16)){
                                totalScore = totalScore + totalTime * 100;
                                gameCompleted.appendChild(yourScore);

                                var cardsAreaParent = cardsArea.parentElement;
                    
                                yourScore.textContent = "YOUR SCORE IS " + totalScore;
                                clearInterval(timeInterval);
                                cardsAreaParent.replaceChild(gameCompleted ,cardsArea);
                                
                                
                                var scoreDivParent = scoreDiv.parentElement;
                                scoreDivParent.removeChild(scoreDiv);
                    
                                var timeDivParent = timeDiv.parentElement;
                                timeDivParent.removeChild(timeDiv);

                                var titleDivParent = titleDiv.parentElement;
                                titleDivParent.removeChild(titleDiv);

                                // To play again
                                gameCompleted.appendChild(playAgain);
                                var playAgainButton = document.getElementById("playAgain");
                
                                playAgainButton.addEventListener('click', function reset(){
                                    cardsAreaParent.removeChild(gameCompleted);
                                    var newCardsArea = document.createElement('div');
                                    newCardsArea.setAttribute('id', 'cardsArea');
                                    container.appendChild(titleDiv);
                                    cardsAreaParent.appendChild(newCardsArea);
                                    scoreDivParent.appendChild(scoreDiv);
                                    timeDivParent.appendChild(timeDiv);
                                    colorList  = ["blue", "blue", "red", "red"];
                                    totalTime  = 10;
                                    totalScore = 0;
                                    SimilarColorsGame();
                             });
            }
      

            else if(totalTime == -1){
                clearInterval(timeInterval);
                gameOver.appendChild(yourScore);
                
                yourScore.textContent = "YOUR SCORE IS " + totalScore;

                var cardsAreaParent = cardsArea.parentElement;
                cardsAreaParent.replaceChild(gameOver ,cardsArea);
                
                var scoreDivParent = scoreDiv.parentElement;
                scoreDivParent.removeChild(scoreDiv);

                var timeDivParent = timeDiv.parentElement;
                timeDivParent.removeChild(timeDiv);

                var titleDivParent = titleDiv.parentElement;
                titleDivParent.removeChild(titleDiv);
                
                
                // To play again
                gameOver.appendChild(playAgain);
                var playAgainButton = document.getElementById("playAgain");

                playAgainButton.addEventListener('click', function reset(){
                    cardsAreaParent.removeChild(gameOver);
                    var newCardsArea = document.createElement('div');
                    newCardsArea.setAttribute('id', 'cardsArea');
                    container.appendChild(titleDiv);
                    cardsAreaParent.appendChild(newCardsArea);
                    scoreDivParent.appendChild(scoreDiv);
                    timeDivParent.appendChild(timeDiv);
                    colorList  = ["blue", "blue", "red", "red"];
                    totalTime  = 10;
                    totalScore = 0;
                    SimilarColorsGame();
                });
            }

        }, 1000);




    // Event for the game on click

    cardsArea.addEventListener('click', function firstPick(e){
        // The first click

        if(e.target.className == 'square'){
            var firstSquare = e.target;
            var firstSquareColorValue = firstSquare.attributes.name.value;
            firstSquare.setAttribute("style", "background-color: " + firstSquareColorValue + ";" ); // Reveal the square color
            
            cardsArea.addEventListener('click', function secondPick(e){
                // Event for the second click

                if(e.target.className == 'square' && e.target.id != firstSquare.id){
                    var secondSquare = e.target;
                    var secondSquareColorValue = secondSquare.attributes.name.value;
                    secondSquare.setAttribute("style", "background-color: " + secondSquareColorValue + ";" );

                    if(firstSquareColorValue == secondSquareColorValue){
                        
                        score = score + 100;
                        totalScore = totalScore + 100;
                        scoreValue.textContent = totalScore;
                    
                        setTimeout(() => {
                            firstSquare.setAttribute("class", "hide");
                            secondSquare.setAttribute("class", "hide");
                            // To repeat events again
                            gameMainFunction();
                        }, 1000);


                        //To remove the second event
                        cardsArea.removeEventListener('click', secondPick);
                    
                    
                    }else if (firstSquareColorValue != secondSquareColorValue){
                        setTimeout(() => {
                            firstSquare.removeAttribute("style", "background-color: " + firstSquareColorValue + ";");
                            secondSquare.removeAttribute("style", "background-color: " + secondSquareColorValue + ";");
                            // To repeat events again
                            gameMainFunction();
                        }, 1000);
                    
                        //To remove the second event
                        cardsArea.removeEventListener('click', secondPick);

                    }
                
                }
            })
            //To remove the first event
            cardsArea.removeEventListener('click', firstPick); 

        }
    })

    function createLevels(colors){
           
            for(var i =0; i < colors.length; i++){
                colorList[i] = colors[i];
            }


            var cardsAreaParent = cardsArea.parentElement;
            // cardsAreaParent.replaceChild(gameCompleted ,cardsArea);
            cardsAreaParent.removeChild(cardsArea);
            
            var scoreDivParent = scoreDiv.parentElement;
            scoreDivParent.removeChild(scoreDiv);

            var timeDivParent = timeDiv.parentElement;
            timeDivParent.removeChild(timeDiv);
            gameCompleted.appendChild(yourScore);

            clearInterval(timeInterval);//Not placed at the beginning to be able to calculate the score from time
            
                           // To play again
                // gameCompleted.appendChild(playAgain);
                // var playAgainButton = document.getElementById("playAgain");

                // playAgainButton.addEventListener('click', function reset(){
                // cardsAreaParent.removeChild(gameCompleted);
                if (score != 800){
                    var newCardsArea = document.createElement('div');
                    newCardsArea.setAttribute('id', 'cardsArea');
                    cardsAreaParent.appendChild(newCardsArea);
                    scoreDivParent.appendChild(scoreDiv);
                    timeDivParent.appendChild(timeDiv);
                    totalTime = 10 + (colors.length) * 2;
                    SimilarColorsGame();
                }
                
    
            // });
           

        }
    
    function gameMainFunction(){cardsArea.addEventListener('click', function firstPick(e){
        if(e.target.className == 'square'){
            var firstSquare = e.target;
            var firstSquareColorValue = firstSquare.attributes.name.value;
            firstSquare.setAttribute("style", "background-color: " + firstSquareColorValue + ";" );
            
            cardsArea.addEventListener('click', function secondPick(e){
                if(e.target.className == 'square' && e.target.id != firstSquare.id){
                    var secondSquare = e.target;
                    var secondSquareColorValue = secondSquare.attributes.name.value;
                    secondSquare.setAttribute("style", "background-color: " + secondSquareColorValue + ";" );

                    if(firstSquareColorValue == secondSquareColorValue){
                        score = score + 100;
                        totalScore = totalScore + 100;
                        scoreValue.textContent = totalScore;
                        setTimeout(() => {
                            firstSquare.setAttribute("class", "hide");
                            secondSquare.setAttribute("class", "hide");
                            gameMainFunction();
                        }, 1000);

                    cardsArea.removeEventListener('click', secondPick);
                    }else if (firstSquareColorValue != secondSquareColorValue){
                        setTimeout(() => {
                            firstSquare.removeAttribute("style", "background-color: " + firstSquareColorValue + ";");
                            secondSquare.removeAttribute("style", "background-color: " + secondSquareColorValue + ";");
                            gameMainFunction();
                        }, 1000);
                    
                    
                        cardsArea.removeEventListener('click', secondPick);
                        
                    }
                
                }
            })
        
            cardsArea.removeEventListener('click', firstPick);
        }
    })}
}