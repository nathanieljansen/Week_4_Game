var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var coin1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var coin2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var coin3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var userTotalScore = 0;
var wins = "000";
var losses = "003";
var coinSound = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav")
var lostRoundSound = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_mariodie.wav")
var gameOverSound = new Audio
("http://themushroomkingdom.net/sounds/wav/smb/smb_gameover.wav")
var roundWonSound = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_stage_clear.wav")



$(function () {
  // Writes the wins, losses, users score, and the random number to the page
  $(".winning").html(wins)
  $(".losing").html(losses)
  $(".total").html(userTotalScore)
  $('.rand-num').html(randomNum)
  console.log(randomNum)

  // 
  $('.coin-1').on('click', function () {
    coinSound.play();
    console.log(parseInt($(".coin-1").attr("data-value")))
    userTotalScore += coin1Value
    gameFunction();
  });


  $('.coin-2').on('click', function () {
    coinSound.play();
    console.log(parseInt($(".coin-2").attr("data-value")))
    userTotalScore += coin2Value
    gameFunction();
  });


  $('.coin-3').on('click', function () {
    coinSound.play();
    console.log(parseInt($(".coin-3").attr("data-value")))
    userTotalScore += coin3Value
    gameFunction();
  });


  function gameFunction() {
    $(".coin-1, .coin-2, .coin-3").on('click');
    $(".total").html(userTotalScore)
    console.log(userTotalScore)
    if (userTotalScore == randomNum) {
      roundWonSound.play();
      wins++
      $('.coin-1, .coin-2, .coin-3').each(function () {
        this.style.pointerEvents = 'none';
      });
      $(".winning").html("00" + wins)
      $(".winnerLoser").html("You won!");
      $(".startOver").html("Click Here to Go Again");
    }

    else if (userTotalScore >= randomNum) {
      losses--
      if (losses <= 0 ) {
        gameOverSound.play();
        wins = 0;
        losses = 0;
        $(".winning").html("00" + wins)
        $(".losing").html("00" + losses)
        $(".winnerLoser").html("Game Over!");
        $(".startOver").html("Click Here to Start Again");
        $('.coin-1, .coin-2, .coin-3').each(function () {
          this.style.pointerEvents = 'none';
        });

      }
      else if (userTotalScore >= randomNum) {
        lostRoundSound.play();
        $('.coin-1, .coin-2, .coin-3').each(function () {
          this.style.pointerEvents = 'none';
        });
        $(".losing").html("00" + losses);
        $(".winnerLoser").html("You Lost!");
        $(".startOver").html("Click Here to Try Again");
      }
    }
  }

  function randomizeNum() {
    randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    coin1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    coin2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    coin3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    userTotalScore = 0;
    $('.rand-num').html(randomNum)
    $(".total").html(userTotalScore)
  }

  function clearWinLossText() {
    $(".winnerLoser").html(" ");
    $(".startOver").html(" ");
  }

  $(".startOver").on("click", function () {
    $('.coin-1, .coin-2, .coin-3').each(function () {
      this.style.pointerEvents = 'auto';
    });
    clearWinLossText();
    randomizeNum();
  })

});



