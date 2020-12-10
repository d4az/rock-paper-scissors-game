

const game = () => {
    let pScore = 0;
    let cScore = 0;
    
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeout");
        match.classList.add("fadein");
      });
    };

    const plainggame =() =>{
      const options = document.querySelectorAll(".options button");
      const playerhand = document.getElementById("player-hand");
      const computerhand = document.getElementById("computer-hand");

      //computer options
      const computeroptions =['rock','paper','scissors'];


      options.forEach(option =>{
        option.addEventListener("click" ,function(){
          //computer choice 

          const computernumber = Math.floor(Math.random()*3);
          const computerchoice = computeroptions[computernumber];
          
          //compairing and giving out

          compairhands(this.textContent , computerchoice)

          //update images

          playerhand.src = `./assets/${this.textContent}.png`;
          computerhand.src = `./assets/${computerchoice}.png`;

        });
      });
    };

    //compair

    const compairhands = (player , computer) =>{
      const winner = document.querySelector(".iwon");

      // check for a tie in the game

      if(player === computer){
        winner.textContent ="GAME TIE";
        return;
      }
      //check for rock

      if(player === 'rock'){
        if(computer === 'scissors'){
          winner.textContent = "PLAYER WON";
          
          pScore++;
          updatescoreplayer(pScore);
          return;
        }
        else{
          winner.textContent ="COMPUTER WON";
          cScore = cScore+1;
          updatescorecomputer(cScore);
          
          return;
        }
      }


      //check for paper

      if(player === 'paper'){
        if(computer === 'scissors'){
          winner.textContent = "COMPUTER WON";
          cScore = cScore+1;
          updatescorecomputer(cScore);
          return;
        }
        else{
          winner.textContent ="PLAYER WON";
          pScore = pScore+1;
          updatescoreplayer(pScore);
          return;
        }
      }

      //check for sissor

      if(player === 'scissors'){
        if(computer === 'paper'){
          winner.textContent = "PLAYER WON";
          pScore = pScore+1;
          updatescoreplayer(pScore);
          return;
        }
        else{
          winner.textContent ="COMPUTER WON";
          cScore = cScore+1;
          updatescorecomputer(cScore);
          return;
        }
      }

    }

    const updatescoreplayer= (pscre) =>{
      const players = document.getElementById("players");

      players.textContent = pscre;
    }

    const updatescorecomputer= (cscore) =>{
      const com = document.getElementById("computers");

      com.textContent = cscore;
    }


    startGame();
    plainggame();

  
  };


game();

